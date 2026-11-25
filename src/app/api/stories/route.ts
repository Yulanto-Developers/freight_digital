
import { NextRequest, NextResponse } from "next/server";
import { put, del } from "@vercel/blob";
import { db } from "@/lib/config";
import CheckCookies from "@/lib/CheckCookies";

// ==================== TYPES ====================

type TopStory = {
    title: string;
    description: string;
};

type SideStory = {
    sidetitle: string;
    sidedesc: string;
};

type MainStory = {
    heading: string;
    subtitle: string;
    description: string;
};

// ==================== CONFIGURATION ====================

const MAX_IMAGE_SIZE = 4 * 1024 * 1024;

const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp"
];

// New PUBLIC Blob store credentials
const BLOB_TOKEN = process.env.MAG_IMG_READ_WRITE_TOKEN;

// ==================== IMAGE UPLOAD ====================

async function uploadImage(
    file: FormDataEntryValue | null
): Promise<string> {

    if (!(file instanceof File) || file.size === 0) {
        throw new Error("Image is required");
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
        throw new Error("Only JPG, PNG and WEBP images are allowed");
    }

    if (file.size > MAX_IMAGE_SIZE) {
        throw new Error("Each image must be below 4MB");
    }

    if (!BLOB_TOKEN) {
        throw new Error(
            "Public Blob read-write token is missing. Check MAG_IMG_READ_WRITE_TOKEN."
        );
    }

    const extension =
        file.name.split(".").pop()?.toLowerCase() || "jpg";

    const blob = await put(
        `magazine/${crypto.randomUUID()}.${extension}`,
        file,
        {
            access: "public",
            addRandomSuffix: true,
            contentType: file.type,
            token: BLOB_TOKEN
        }
    );

    return blob.url;
}

// ==================== WORD LIMIT ====================

function isWithinWordLimit(value: string) {
    return value.trim().split(/\s+/).filter(Boolean).length <= 20;
}

// ==================== CLEANUP UPLOADED IMAGES ====================

async function cleanupImages(urls: string[]) {

    if (!urls.length) return;

    if (!BLOB_TOKEN) {
        console.error("Blob cleanup skipped: token missing");
        return;
    }

    try {
        await del(urls, {
            token: BLOB_TOKEN
        });
    } catch (error) {
        console.error("Blob cleanup error:", error);
    }
}

// =====================================================
// POST API - CREATE MAGAZINE (ADMIN ONLY)
// =====================================================

export async function POST(req: NextRequest) {

    const uploadedUrls: string[] = [];

    try {

        // 1. CHECK LOGIN

        const token: any = await CheckCookies(req);

        if (!token || !token.id) {
            return NextResponse.json({
                status: false,
                message: "Unauthorized"
            }, { status: 401 });
        }

        // 2. CHECK ADMIN ROLE

        const [loginRows]: any = await db.query(
            "SELECT id, role FROM login_details WHERE id = ?",
            [token.id]
        );

        if (!loginRows || loginRows.length === 0) {
            return NextResponse.json({
                status: false,
                message: "User not found"
            }, { status: 404 });
        }

        if (
            String(loginRows[0].role).toLowerCase() !== "admin"
        ) {
            return NextResponse.json({
                status: false,
                message: "Only administrators can create magazines"
            }, { status: 403 });
        }

        // 3. CHECK BLOB TOKEN

        if (!BLOB_TOKEN) {
            return NextResponse.json({
                status: false,
                message: "Public Blob credentials are not configured"
            }, { status: 500 });
        }

        // 4. GET FORMDATA

        const formData = await req.formData();

        // 5. GET STORIES

        const topStories: TopStory[] = JSON.parse(
            String(formData.get("topStories") || "[]")
        );

        const sideStories: SideStory[] = JSON.parse(
            String(formData.get("sideStories") || "[]")
        );

        const mainStory: MainStory = JSON.parse(
            String(formData.get("mainStory") || "{}")
        );

        // 6. VALIDATE TOP STORIES

        if (
            !Array.isArray(topStories) ||
            topStories.length < 1 ||
            topStories.length > 3
        ) {
            return NextResponse.json({
                status: false,
                message: "You must provide 1 to 3 top stories"
            }, { status: 400 });
        }

        // 7. VALIDATE SIDE STORIES

        if (
            !Array.isArray(sideStories) ||
            sideStories.length < 1 ||
            sideStories.length > 3
        ) {
            return NextResponse.json({
                status: false,
                message: "You must provide 1 to 3 side stories"
            }, { status: 400 });
        }

        // 8. VALIDATE MAIN STORY

        if (
            !mainStory.heading?.trim() ||
            !mainStory.subtitle?.trim() ||
            !mainStory.description?.trim()
        ) {
            return NextResponse.json({
                status: false,
                message: "Please complete the main story"
            }, { status: 400 });
        }

        // 9. VALIDATE TOP STORY DETAILS

        for (const story of topStories) {

            if (
                !story.title?.trim() ||
                !story.description?.trim() ||
                !isWithinWordLimit(story.description)
            ) {
                return NextResponse.json({
                    status: false,
                    message: "Invalid top story details. Description must not exceed 20 words."
                }, { status: 400 });
            }
        }

        // 10. VALIDATE SIDE STORY DETAILS

        for (const story of sideStories) {

            if (
                !story.sidetitle?.trim() ||
                !story.sidedesc?.trim() ||
                !isWithinWordLimit(story.sidedesc)
            ) {
                return NextResponse.json({
                    status: false,
                    message: "Invalid side story details. Description must not exceed 20 words."
                }, { status: 400 });
            }
        }

        // 11. UPLOAD TOP STORY IMAGES

        const updatedTopStories: (TopStory & { image: string })[] = [];

        for (let index = 0; index < topStories.length; index++) {

            const imageUrl = await uploadImage(
                formData.get(`topImage_${index}`)
            );

            uploadedUrls.push(imageUrl);

            updatedTopStories.push({
                ...topStories[index],
                image: imageUrl
            });
        }

        // 12. UPLOAD SIDE STORY IMAGES

        const updatedSideStories: (SideStory & { image: string })[] = [];

        for (let index = 0; index < sideStories.length; index++) {

            const imageUrl = await uploadImage(
                formData.get(`sideImage_${index}`)
            );

            uploadedUrls.push(imageUrl);

            updatedSideStories.push({
                sidetitle: sideStories[index].sidetitle,
                sidedesc: sideStories[index].sidedesc,
                image: imageUrl
            });
        }

        // 13. UPLOAD MAIN STORY IMAGE

        const mainImageUrl = await uploadImage(
            formData.get("mainImage")
        );

        uploadedUrls.push(mainImageUrl);

        const updatedMainStory = {
            ...mainStory,
            image: mainImageUrl
        };

        // 14. SAVE INTO MYSQL

        const [insertResult]: any = await db.query(
            `INSERT INTO magazine_front_pages
            (
                top_stories,
                side_stories,
                main_story,
                created_by
            )
            VALUES (?, ?, ?, ?)`,
            [
                JSON.stringify(updatedTopStories),
                JSON.stringify(updatedSideStories),
                JSON.stringify(updatedMainStory),
                loginRows[0].id
            ]
        );

        // 15. SUCCESS RESPONSE

        return NextResponse.json({
            status: true,
            message: "Magazine details saved successfully",
            magazineId: insertResult.insertId,
            data: {
                top_stories: updatedTopStories,
                side_stories: updatedSideStories,
                main_story: updatedMainStory
            }
        }, { status: 201 });

    } catch (error) {

        console.error("Magazine POST API Error:", error);

        // DELETE UPLOADED IMAGES IF SOMETHING FAILS

        await cleanupImages(uploadedUrls);

        return NextResponse.json({
            status: false,
            message: error instanceof Error
                ? error.message
                : "Internal Server Error"
        }, { status: 500 });
    }
}

// =====================================================
// GET API - FETCH LATEST MAGAZINE (PUBLIC)
// =====================================================

export async function GET() {

    try {

        const [rows]: any = await db.query(
            `SELECT
                id,
                top_stories,
                side_stories,
                main_story,
                created_by
            FROM magazine_front_pages
            ORDER BY id DESC
            LIMIT 1`
        );

        if (!rows || rows.length === 0) {

            return NextResponse.json({
                status: true,
                message: "No magazine published yet",
                data: null
            }, { status: 200 });
        }

        return NextResponse.json({
            status: true,
            message: "Magazine fetched successfully",
            data: rows[0]
        }, { status: 200 });

    } catch (error) {

        console.error("Magazine GET API Error:", error);

        return NextResponse.json({
            status: false,
            message: "Failed to fetch magazine"
        }, { status: 500 });
    }
}
