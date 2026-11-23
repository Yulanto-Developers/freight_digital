
'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";

import logo from '../../../../public/images/logo/Logo-1.png';
import logo1 from '../../../../public/images/logo/freight-digital.png';
import img1 from '../../../../public/images/about/about-1.jpg';

const FlipBook = HTMLFlipBook as any;

export default function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const [dimensions, setDimensions] = useState({
        width: 550,
        height: 700,
        portrait: false,
    });

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            if (screenWidth <= 640) {
                setDimensions({
                    width: Math.min(screenWidth - 32, 400),
                    height: Math.min(
                        screenHeight - 190,
                        Math.round((screenWidth - 32) * 1.35)
                    ),
                    portrait: true,
                });
            } else if (screenWidth <= 1024) {
                setDimensions({
                    width: 450,
                    height: 600,
                    portrait: true,
                });
            } else {
                setDimensions({
                    width: 550,
                    height: 700,
                    portrait: false,
                });
            }
        };

        updateDimensions();

        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const current_date = new Date();

    const fulldate = current_date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const topStories = [
        {
            category: "PORTS & TERMINALS",
            title: "UAE Ports Record Higher Cargo Volumes in Q3",
            page: "03",
        },
        {
            category: "AIR CARGO",
            title: "Air Cargo Demand Grows as UAE Strengthens Global Links",
            page: "04",
        },
        {
            category: "PROJECT CARGO",
            title: "UAE Handles Key Industrial Shipment",
            page: "06",
        },
    ];

    const sideStories = [
        {
            category: "AIR CARGO",
            title: "Emirates SkyCargo Expands Capacity to Meet Rising Demand",
            description: "Emirates SkyCargo expands its cargo operations to support increasing global demand.",
            page: "04",
        },
        {
            category: "CUSTOMS & COMPLIANCE",
            title: "UAE Introduces Updates to Cargo Documentation",
            description: "New requirements aim to streamline customs clearance and improve compliance.",
            page: "05",
        },
        {
            category: "PROJECT CARGO",
            title: "Major Industrial Cargo Move Completed in Abu Dhabi",
            description: "A large project cargo shipment successfully handled in the UAE.",
            page: "06",
        },
    ];

    const pageDetails = [
        {
            title: "Global Logistics and Supply Chain",
            description: "Exploring the latest developments in international freight, shipping and logistics.",
        },
        {
            title: "Air Cargo Industry Updates",
            description: "The changing landscape of air freight and global cargo transportation.",
        },
        {
            title: "Ports and Terminal Developments",
            description: "Discover the latest port infrastructure and terminal operations.",
        },
        {
            title: "Project Cargo and Heavy Transport",
            description: "Major industrial shipments and specialized transportation solutions.",
        },
        {
            title: "Future of Freight Digital",
            description: "Innovations and technology transforming the logistics industry.",
        },
        {
            title: "Thank You for Reading",
            description: "Stay connected with Freight Digital for the latest industry news.",
        },
    ];

    return (
        <div className="w-full pt-20 sm:pt-28 md:pt-36 overflow-x-hidden">

            <section className="w-full min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-144px)] bg-amber-100 flex justify-center items-center py-6 sm:py-10 px-2 sm:px-4">

                <div
                    id="newspaper-book"
                    className="w-full flex justify-center items-center overflow-visible"
                >
                    <div
                        className="transition-transform duration-300 ease-in-out"
                        style={{
                            width: dimensions.portrait
                                ? dimensions.width
                                : dimensions.width * 2,

                            transform:
                                !dimensions.portrait && currentPage === 0
                                    ? `translateX(-${dimensions.width / 2}px)`
                                    : "translateX(0px)",
                        }}
                    >
                        <FlipBook
                            key={`${dimensions.width}-${dimensions.portrait}`}
                            width={dimensions.width}
                            height={dimensions.height}
                            size="fixed"
                            minWidth={dimensions.width}
                            maxWidth={dimensions.width}
                            minHeight={dimensions.height}
                            maxHeight={dimensions.height}
                            drawShadow={true}
                            showCover={true}
                            showPageCorners={true}
                            flippingTime={1000}
                            usePortrait={dimensions.portrait}
                            startPage={0}
                            autoSize={true}
                            maxShadowOpacity={0.5}
                            mobileScrollSupport={true}
                            useMouseEvents={true}
                            clickEventForward={true}
                            disableFlipByClick={false}
                            onFlip={(e: any) => setCurrentPage(e.data)}
                        >

                            {/* PAGE 1 - FRONT COVER */}

                            <div className="w-full h-full bg-white p-1.5 sm:p-2 font-serif text-black">

                                <div className="w-full h-full border border-black p-1.5 sm:p-2 flex flex-col overflow-hidden">

                                    {/* MASTHEAD */}

                                    <header className="flex items-center justify-between gap-1 sm:gap-2 border-b-2 border-black pb-1.5 sm:pb-2">

                                        <div className="w-[19%] shrink-0">
                                            <Image
                                                src={logo}
                                                alt="Freight Digital Logo"
                                                width={120}
                                                height={100}
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>

                                        <div className="flex-1 flex justify-center">
                                            <Image
                                                src={logo1}
                                                alt="Freight Digital Newspaper"
                                                width={260}
                                                height={90}
                                                className="w-full max-w-[260px] h-auto object-contain"
                                            />
                                        </div>

                                        <div className="w-[22%] shrink-0 text-right">
                                            <p className="text-[6px] sm:text-[8px] leading-tight font-normal">
                                                {fulldate}
                                            </p>

                                            {/* <p className="text-[6px] sm:text-[7px] mt-1 font-bold">
                                                UAE EDITION
                                            </p> */}
                                        </div>

                                    </header>

                                    {/* TOP STORIES */}

                                    <section className="grid grid-cols-3 border-b-2 border-black py-1.5 sm:py-2 gap-1">

                                        {topStories.map((item, index) => (

                                            <article
                                                key={index}
                                                className={`flex flex-col sm:flex-row gap-1 min-w-0 px-1 ${index !== 2 ? "border-r border-black" : ""
                                                    }`}
                                            >

                                                <Image
                                                    src={img1}
                                                    alt={item.category}
                                                    width={65}
                                                    height={65}
                                                    className="w-full sm:w-[42%] h-[35px] sm:h-[65px] object-cover shrink-0"
                                                />

                                                <div className="min-w-0 flex flex-col justify-between">

                                                    <div>
                                                        <h3 className="text-[6px] sm:text-[8px] leading-tight font-bold text-[#e84b16]">
                                                            {item.category}
                                                        </h3>

                                                        <p className="text-[6px] sm:text-[8px] leading-[1.3] font-semibold mt-1">
                                                            {item.title}
                                                        </p>
                                                    </div>

                                                    <p className="text-[6px] sm:text-[7px] text-right">
                                                        Page {item.page}
                                                    </p>

                                                </div>

                                            </article>

                                        ))}

                                    </section>

                                    {/* MAIN CONTENT */}

                                    <main className="grid grid-cols-[1.8fr_0.9fr] gap-1.5 sm:gap-2 flex-1 min-h-0 pt-2">

                                        {/* MAIN ARTICLE */}

                                        <section className="min-w-0 flex flex-col">

                                            <div className="border-b border-black pb-1">

                                                <h1 className="text-[15px] sm:text-[24px] leading-[1.08] font-bold">
                                                    Inside Jebel Ali: How DP World Connects the UAE to Global Trade
                                                </h1>

                                                <p className="text-[7px] sm:text-[9px] leading-tight italic mt-1 font-normal">
                                                    A closer look at DP World's operations, its role in Jebel Ali and why it remains a key hub for international shipping.
                                                </p>

                                            </div>

                                            {/* MAIN IMAGE */}

                                            <div className="mt-2">

                                                <Image
                                                    src={img1}
                                                    alt="DP World Port"
                                                    width={600}
                                                    height={350}
                                                    className="w-full h-[90px] sm:h-[145px] object-cover"
                                                />

                                                <p className="text-[6px] sm:text-[7px] leading-3 mt-1 font-normal">
                                                    Operations at DP World's Jebel Ali Port in Dubai.
                                                    (Photo: DP World)
                                                </p>

                                            </div>

                                            {/* ARTICLE TEXT */}

                                            <div className="grid grid-cols-2 gap-1 sm:gap-2 mt-2 flex-1">

                                                <div className="text-[6.5px] sm:text-[8px] leading-[1.35] text-justify font-normal">

                                                    <p>
                                                        <span className="text-xl sm:text-3xl font-bold text-[#e84b16] float-left mr-1 leading-none">
                                                            D
                                                        </span>

                                                        P World's operations at Jebel Ali have played a central role in establishing the UAE as a major hub for international trade. The port, one of the largest in the region, handles millions of containers each year and connects businesses to global markets.
                                                    </p>

                                                </div>

                                                <div className="text-[6.5px] sm:text-[8px] leading-[1.35] text-justify border-l border-black pl-1 sm:pl-2 font-normal">

                                                    <p>
                                                        Through its advanced terminals, integrated logistics solutions and strong transport links, DP World supports global supply chains and helps businesses move goods efficiently across markets. Industry analysts say the port's scale and connectivity continue to strengthen the UAE's position in global commerce.
                                                    </p>

                                                </div>

                                            </div>

                                        </section>

                                        {/* SIDEBAR */}

                                        <aside className="border-l border-black pl-1.5 sm:pl-2 min-w-0 flex flex-col">

                                            {sideStories.map((item, index) => (

                                                <article
                                                    key={index}
                                                    className={`pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 ${index !== 2 ? "border-b border-black" : ""
                                                        }`}
                                                >

                                                    <h4 className="text-[6px] sm:text-[8px] font-bold text-[#e84b16]">
                                                        {item.category}
                                                    </h4>

                                                    <h3 className="text-[8px] sm:text-[11px] leading-[1.15] font-bold">
                                                        {item.title}
                                                    </h3>

                                                    <Image
                                                        src={img1}
                                                        alt={item.category}
                                                        width={250}
                                                        height={130}
                                                        className="w-full h-[40px] sm:h-[75px] object-cover mt-1"
                                                    />

                                                    <p className="text-[6px] sm:text-[7px] leading-[1.3] mt-1 text-justify font-normal">
                                                        {item.description}
                                                    </p>

                                                    <p className="text-[6px] sm:text-[7px] text-right mt-1">
                                                        Page {item.page}
                                                    </p>

                                                </article>

                                            ))}

                                        </aside>

                                    </main>

                                    {/* FOOTER */}

                                    <footer className="border-t border-black pt-1 flex justify-between gap-1 text-[5px] sm:text-[7px] font-normal">

                                        <p>FREIGHT DIGITAL FZC LLC</p>

                                        <p className="text-center">UAE LOGISTICS & TRADE NEWS</p>

                                        <p>PAGE 01</p>

                                    </footer>

                                </div>

                            </div>

                            {/* PAGE 2 ONWARDS */}

                            {pageDetails.map((item, index) => (

                                <div
                                    key={index}
                                    className="bg-white text-black w-full h-full p-1.5 sm:p-3 font-serif"
                                >

                                    <div className="border border-black w-full h-full p-1.5 sm:p-3 flex flex-col overflow-hidden">

                                        {/* PAGE HEADER */}

                                        <div className="flex justify-between items-center gap-1 border-b-2 border-black pb-2">

                                            <Image
                                                src={logo}
                                                alt="Freight Digital"
                                                width={90}
                                                height={70}
                                                className="w-[20%] h-auto object-contain"
                                            />

                                            <Image
                                                src={logo1}
                                                alt="Freight Digital"
                                                width={200}
                                                height={70}
                                                className="w-[55%] h-auto object-contain"
                                            />

                                            <p className="text-[6px] sm:text-[8px] text-right w-[25%]">
                                                {fulldate}
                                            </p>

                                        </div>

                                        {/* PAGE TITLE */}

                                        <div className="py-2 sm:py-4 border-b border-black">

                                            <p className="text-[7px] sm:text-[9px] font-bold text-[#e84b16]">
                                                FREIGHT DIGITAL NEWS
                                            </p>

                                            <h2 className="text-lg sm:text-2xl font-bold mt-1 leading-tight">
                                                {item.title}
                                            </h2>

                                            <p className="text-[8px] sm:text-[10px] italic mt-2 font-normal">
                                                {item.description}
                                            </p>

                                        </div>

                                        {/* PAGE IMAGE */}

                                        <div className="mt-2 sm:mt-4">

                                            <Image
                                                src={img1}
                                                alt={item.title}
                                                width={600}
                                                height={300}
                                                className="w-full h-[120px] sm:h-[200px] object-cover"
                                            />

                                        </div>

                                        {/* PAGE ARTICLE */}

                                        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-2 sm:mt-4 text-[7px] sm:text-[10px] leading-relaxed text-justify font-normal">

                                            <p>
                                                The global freight and logistics industry continues to evolve with new opportunities, advanced technologies and changing international trade requirements. Businesses are increasingly focusing on efficient transportation, improved infrastructure and stronger supply chain connectivity.
                                            </p>

                                            <p>
                                                Freight Digital brings industry updates, developments and insights to professionals across the logistics sector. Our coverage highlights important changes in the market and the developments shaping the future of international freight.
                                            </p>

                                        </div>

                                        {/* PAGE FOOTER */}

                                        <div className="mt-auto border-t border-black pt-2 flex justify-between text-[6px] sm:text-[8px]">

                                            <p>FREIGHT DIGITAL FZC LLC</p>

                                            <p>
                                                PAGE {String(index + 2).padStart(2, '0')}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </FlipBook>
                    </div>
                </div>

            </section>

        </div>
    );
}
