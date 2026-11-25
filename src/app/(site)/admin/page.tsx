
'use client'

import { useState } from "react";

type Story = {
    title: string;
    description: string;
    image: File | null;
};

type SideStory = {
    sidetitle: string;
    sidedesc: string;
    sideimage: File | null;
};

function Admin() {

    const [storyCount, setStoryCount] = useState(1);
    const [sidestoryCount, setsideStoryCount] = useState(1);

    // TOP STORIES
    const [stories, setStories] = useState<Story[]>([
        { title: "", description: "", image: null }
    ]);

    // SIDE STORIES
    const [sidestories, setsideStories] = useState<SideStory[]>([
        { sidetitle: "", sidedesc: "", sideimage: null }
    ]);

    // MAIN STORY
    const [mainStory, setMainStory] = useState({
        heading: "",
        subtitle: "",
        description: "",
        image: null as File | null
    });

    // LIMIT DESCRIPTION TO 20 WORDS
    const limitWords = (value: string, limit = 20) => {
        return value.trim().split(/\s+/).filter(Boolean).length > limit
            ? value.trim().split(/\s+/).filter(Boolean).slice(0, limit).join(" ")
            : value;
    };

    // TOP STORY COUNT
    const handleCountChange = (count: number) => {
        setStoryCount(count);

        setStories((prev) =>
            Array.from({ length: count }, (_, index) => ({
                title: prev[index]?.title || "",
                description: prev[index]?.description || "",
                image: prev[index]?.image || null
            }))
        );
    };

    // TOP STORY INPUT CHANGE
    const handleStoryChange = (
        index: number,
        field: keyof Story,
        value: string | File | null
    ) => {
        setStories((prev) =>
            prev.map((story, i) =>
                i === index ? { ...story, [field]: value } : story
            )
        );
    };

    // SIDE STORY COUNT
    const handlesideChange = (count: number) => {
        setsideStoryCount(count);

        setsideStories((prev) =>
            Array.from({ length: count }, (_, index) => ({
                sidetitle: prev[index]?.sidetitle || "",
                sidedesc: prev[index]?.sidedesc || "",
                sideimage: prev[index]?.sideimage || null
            }))
        );
    };

    // SIDE STORY INPUT CHANGE
    const handlesideStoryChange = (
        index: number,
        field: keyof SideStory,
        value: string | File | null
    ) => {
        setsideStories((prev) =>
            prev.map((story, i) =>
                i === index ? { ...story, [field]: value } : story
            )
        );
    };

    // MAIN STORY INPUT CHANGE
    const handleMainStoryChange = (
        field: keyof typeof mainStory,
        value: string | File | null
    ) => {
        setMainStory((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    // FORM SUBMIT
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            // TOP STORIES
            formData.append(
                "topStories",
                JSON.stringify(
                    stories.map(({ image, ...rest }) => rest)
                )
            );

            stories.forEach((story, index) => {
                if (story.image) {
                    formData.append(`topImage_${index}`, story.image);
                }
            });

            // SIDE STORIES
            formData.append(
                "sideStories",
                JSON.stringify(
                    sidestories.map(({ sideimage, ...rest }) => rest)
                )
            );

            sidestories.forEach((story, index) => {
                if (story.sideimage) {
                    formData.append(`sideImage_${index}`, story.sideimage);
                }
            });

            // MAIN STORY
            formData.append(
                "mainStory",
                JSON.stringify({
                    heading: mainStory.heading,
                    subtitle: mainStory.subtitle,
                    description: mainStory.description
                })
            );

            if (mainStory.image) {
                formData.append("mainImage", mainStory.image);
            }

            // API CALL
            const response = await fetch("/api/stories", {
                method: "POST",
                credentials: "include",
                body: formData
            });

            const result = await response.json();

            if (!response.ok || !result.status) {
                throw new Error(result.message || "Failed to save magazine");
            }

            alert(result.message);

        } catch (error) {
            console.error("Error submitting magazine:", error);
            alert(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-2xl font-bold text-gray-900">
                    Magazine Admin
                </h1>

                {/* <p className="text-gray-500 mt-1">
                    Enter the Magazine Details
                </p> */}

                <form onSubmit={handleSubmit} className="mt-8 space-y-8">

                    {/* =================================
                        TOP STORIES
                    ================================= */}

                    <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">

                        <h2 className="text-lg font-bold text-[#f1671a] mb-5">
                            01. Top Stories
                        </h2>

                        <div className="mb-6">

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Number of Top Stories
                            </label>

                            <select
                                value={storyCount}
                                onChange={(e) => handleCountChange(Number(e.target.value))}
                                className="border border-gray-300 bg-white w-full sm:w-40 rounded-md p-3 text-black"
                            >
                                <option value={1}>1 Story</option>
                                <option value={2}>2 Stories</option>
                                <option value={3}>3 Stories</option>
                            </select>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                            {stories.map((story, index) => (

                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                                >

                                    <h3 className="font-semibold text-gray-800">
                                        Top Story {index + 1}
                                    </h3>

                                    {/* TITLE */}

                                    <div>

                                        <label className="block text-sm text-gray-600 mb-2">
                                            Story Title
                                        </label>

                                        <input
                                            type="text"
                                            value={story.title}
                                            onChange={(e) =>
                                                handleStoryChange(index, "title", e.target.value)
                                            }
                                            placeholder="Enter story title"
                                            required
                                            className="w-full border bg-white border-gray-300 rounded-md p-3 text-black"
                                        />

                                    </div>

                                    {/* DESCRIPTION */}

                                    <div>

                                        <label className="block text-sm text-gray-600 mb-2">
                                            Description (Maximum 20 words)
                                        </label>

                                        <textarea
                                            value={story.description}
                                            onChange={(e) =>
                                                handleStoryChange(
                                                    index,
                                                    "description",
                                                    limitWords(e.target.value)
                                                )
                                            }
                                            placeholder="Enter description"
                                            rows={3}
                                            required
                                            className="w-full border bg-white border-gray-300 rounded-md p-3 text-black resize-none"
                                        />

                                        <p className="text-xs text-gray-500 text-right">
                                            {story.description.trim()
                                                ? story.description.trim().split(/\s+/).length
                                                : 0}/20 words
                                        </p>

                                    </div>

                                    {/* IMAGE */}

                                    <div>

                                        <label className="block text-sm text-gray-600 mb-2">
                                            Story Image
                                        </label>

                                        <input
                                            type="file"
                                            accept="image/*"
                                            required
                                            onChange={(e) =>
                                                handleStoryChange(
                                                    index,
                                                    "image",
                                                    e.target.files?.[0] || null
                                                )
                                            }
                                            className="w-full text-sm bg-white text-gray-600 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-[#58595b]/20 file:text-black"
                                        />

                                        {story.image && (
                                            <p className="text-xs text-[#f1671a] mt-2">
                                                {story.image.name}
                                            </p>
                                        )}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>


                    {/* =================================
                        SIDE STORIES
                    ================================= */}

                    <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">

                        <h2 className="text-lg font-bold text-[#f1671a] mb-5">
                            02. Side Stories
                        </h2>

                        <div className="mb-6">

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Number of Side Stories
                            </label>

                            <select
                                value={sidestoryCount}
                                onChange={(e) => handlesideChange(Number(e.target.value))}
                                className="border border-gray-300 bg-white w-full sm:w-40 rounded-md p-3 text-black"
                            >
                                <option value={1}>1 Story</option>
                                <option value={2}>2 Stories</option>
                                <option value={3}>3 Stories</option>
                            </select>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                            {sidestories.map((story, index) => (

                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                                >

                                    <h3 className="font-semibold text-gray-800">
                                        Side Story {index + 1}
                                    </h3>

                                    {/* TITLE */}

                                    <div>

                                        <label className="block text-sm text-gray-600 mb-2">
                                            Story Title
                                        </label>

                                        <input
                                            type="text"
                                            value={story.sidetitle}
                                            onChange={(e) =>
                                                handlesideStoryChange(index, "sidetitle", e.target.value)
                                            }
                                            placeholder="Enter side story title"
                                            required
                                            className="w-full border bg-white border-gray-300 rounded-md p-3 text-black"
                                        />

                                    </div>

                                    {/* DESCRIPTION */}

                                    <div>

                                        <label className="block text-sm text-gray-600 mb-2">
                                            Description (Maximum 20 words)
                                        </label>

                                        <textarea
                                            value={story.sidedesc}
                                            onChange={(e) =>
                                                handlesideStoryChange(
                                                    index,
                                                    "sidedesc",
                                                    limitWords(e.target.value)
                                                )
                                            }
                                            placeholder="Enter description"
                                            rows={3}
                                            required
                                            className="w-full border bg-white border-gray-300 rounded-md p-3 text-black resize-none"
                                        />

                                        <p className="text-xs text-gray-500 text-right">
                                            {story.sidedesc.trim()
                                                ? story.sidedesc.trim().split(/\s+/).length
                                                : 0}/20 words
                                        </p>

                                    </div>

                                    {/* IMAGE */}

                                    <div>

                                        <label className="block text-sm text-gray-600 mb-2">
                                            Story Image
                                        </label>

                                        <input
                                            type="file"
                                            accept="image/*"
                                            required
                                            onChange={(e) =>
                                                handlesideStoryChange(
                                                    index,
                                                    "sideimage",
                                                    e.target.files?.[0] || null
                                                )
                                            }
                                            className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-[#58595b]/20 file:text-[#000]"
                                        />

                                        {story.sideimage && (
                                            <p className="text-xs text-[#f1671a] mt-2">
                                                {story.sideimage.name}
                                            </p>
                                        )}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>


                    {/* =================================
                        MAIN STORY
                    ================================= */}

                    <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">

                        <h2 className="text-lg font-bold text-[#f1671a] mb-5">
                            03. Main Story
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* HEADING */}

                            <div className="md:col-span-2">

                                <label className="block text-sm text-gray-600 mb-2">
                                    Main Story Heading
                                </label>

                                <input
                                    type="text"
                                    value={mainStory.heading}
                                    onChange={(e) =>
                                        handleMainStoryChange("heading", e.target.value)
                                    }
                                    placeholder="Enter main story heading"
                                    required
                                    className="w-full border bg-white border-gray-300 rounded-md p-3 text-black"
                                />

                            </div>

                            {/* SUBTITLE */}

                            <div className="md:col-span-2">

                                <label className="block text-sm text-gray-600 mb-2">
                                    Main Story Subtitle
                                </label>

                                <input
                                    type="text"
                                    value={mainStory.subtitle}
                                    onChange={(e) =>
                                        handleMainStoryChange("subtitle", e.target.value)
                                    }
                                    placeholder="Enter main story subtitle"
                                    required
                                    className="w-full border bg-white border-gray-300 rounded-md p-3 text-black"
                                />

                            </div>

                            {/* IMAGE */}

                            <div className="md:col-span-2">

                                <label className="block text-sm text-gray-600 mb-2">
                                    Main Story Image
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    required
                                    onChange={(e) =>
                                        handleMainStoryChange(
                                            "image",
                                            e.target.files?.[0] || null
                                        )
                                    }
                                    className="w-full border border-gray-300 rounded-md p-3 text-black"
                                />

                                {mainStory.image && (
                                    <p className="text-xs text-[#f1671a] mt-2">
                                        {mainStory.image.name}
                                    </p>
                                )}

                            </div>

                            {/* DESCRIPTION */}

                            <div className="md:col-span-2">

                                <label className="block text-sm text-gray-600 mb-2">
                                    Main Story Description
                                </label>

                                <textarea
                                    value={mainStory.description}
                                    onChange={(e) =>
                                        handleMainStoryChange("description", e.target.value)
                                    }
                                    placeholder="Enter complete main story description"
                                    rows={8}
                                    required
                                    className="w-full border bg-white border-gray-300 rounded-md p-3 text-black resize-y"
                                />

                            </div>

                        </div>

                    </section>


                    {/* SUBMIT */}

                    <div className="flex justify-end">

                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
                        >
                            Save Magazine Details
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Admin;
