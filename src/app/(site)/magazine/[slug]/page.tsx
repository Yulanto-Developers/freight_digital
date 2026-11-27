
import { notFound } from "next/navigation";
import { magazines } from "@/data/magazines";
import MagazineReader from "@/components/magazine/FlipBookLoader";

export default async function MagazineDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const magazine = magazines.find(
        (item) => item.slug === slug
    );

    if (!magazine) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#58595b] pt-52">

            {/* <div className="max-w-6xl mx-auto px-4 pt-8 pb-3 text-center">

                <p className="text-xs uppercase tracking-[3px] text-[#ed6427] font-bold">
                    {magazine.category}
                </p>

                <h1 className="text-2xl sm:text-4xl font-bold text-[#102d47] mt-2">
                    {magazine.title}
                </h1>

                <p className="text-gray-600 text-sm mt-2">
                    {magazine.date}
                </p>

            </div> */}

            <MagazineReader />

        </main>
    );
}
