
import Image from "next/image";
import Link from "next/link";
import { magazines } from "@/data/magazines";

export default function MagazinePage() {
    return (
        <main className="min-h-screen bg-[#58595b] px-4 pt-52 pb-12 sm:px-8">

            <div className="max-w-6xl mx-auto">

                <div className="border-b-2 border-[#ed6427]  pb-5 mb-8">
                    <p className="text-sm uppercase tracking-[3px] text-[#ed6427]">
                        Freight Digital Publications
                    </p>

                    <h1 className="text-3xl sm:text-5xl font-bold text-[#fff] mt-3">
                        Newspaper Archive
                    </h1>

                    {/* <p className="text-gray-600 mt-3">
                        Read the latest editions of Freight Digital.
                    </p> */}
                </div>

                <div className="space-y-6">

                    {magazines.map((magazine) => (
                        <article
                            key={magazine.slug}
                            className="bg-white border rounded-md border-gray-200 shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row gap-6"
                        >

                            <Link
                                href={`/magazine/${magazine.slug}`}
                                className="shrink-0 w-full sm:w-48"
                            >
                                <div className="relative aspect-[0.72] overflow-hidden bg-gray-100">
                                    <Image
                                        src={magazine.cover}
                                        alt={magazine.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>

                            <div className="flex flex-col justify-center flex-1">

                                <p className="text-xs uppercase tracking-widest text-[#ed6427] font-bold">
                                    {magazine.category}
                                </p>

                                <h2 className="text-2xl sm:text-3xl font-bold text-[#102d47] mt-3">
                                    {magazine.title}
                                </h2>

                                <p className="text-gray-500 text-sm mt-2">
                                    {magazine.date}
                                </p>

                                <p className="text-gray-600 leading-7 mt-4">
                                    {magazine.description}
                                </p>

                                <div className="mt-6">
                                    <Link
                                        href={`/magazine/${magazine.slug}`}
                                        className="inline-flex items-center gap-3 bg-[#102d47] hover:bg-[#ed6427] text-white px-6 py-3 text-sm font-semibold transition"
                                    >
                                        View Magazine
                                        <span>→</span>
                                    </Link>
                                </div>

                            </div>
                        </article>
                    ))}

                </div>

            </div>
        </main>
    );
}
