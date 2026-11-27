
"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import img1 from "@/../public/images/newspaper/img- (1).jpg";
import img2 from "@/../public/images/newspaper/img- (2).jpg";
import img3 from "@/../public/images/newspaper/img- (3).jpg";
import img4 from "@/../public/images/newspaper/img- (4).jpg";
import img5 from "@/../public/images/newspaper/img- (5).jpg";
import img6 from "@/../public/images/newspaper/img- (6).jpg";
import img7 from "@/../public/images/newspaper/img- (7).jpg";
import img8 from "@/../public/images/newspaper/img- (8).jpg";

const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
];

const Page = forwardRef<
    HTMLDivElement,
    { src: string; number: number }
>(({ src, number }, ref) => {
    return (
        <div
            ref={ref}
            className="newspaper-page bg-white overflow-hidden"
        >
            <img
                src={src}
                alt={`Freight Digital Newspaper Page ${number}`}
                draggable={false}
                className="w-full h-full block select-none"
                style={{
                    objectFit: "contain",
                    objectPosition: "center",
                }}
            />
        </div>
    );
});

Page.displayName = "NewspaperPage";

export default function FlipbookLoader() {

    const bookRef = useRef<any>(null);

    const [mounted, setMounted] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    const [pageWidth, setPageWidth] = useState(600);

    const [pageHeight, setPageHeight] = useState(848);

    const [currentPage, setCurrentPage] = useState(0);

    // RESPONSIVE SIZE
    useEffect(() => {

        setMounted(true);

        const updateSize = () => {

            const screenWidth = window.innerWidth;

            // Tablet and mobile use single page
            const mobile = screenWidth < 900;

            setIsMobile(mobile);

            let width;

            if (mobile) {

                // Large single page on mobile
                width = Math.min(
                    screenWidth - 32,
                    560
                );

            } else {

                // Large newspaper page on desktop
                width = Math.min(
                    750,
                    Math.floor((screenWidth - 80) / 2)
                );

            }

            // Never reduce the page because of viewport height.
            setPageWidth(width);
            setPageHeight(Math.round(width * 1.414));

        };

        updateSize();

        window.addEventListener("resize", updateSize);

        return () => {
            window.removeEventListener("resize", updateSize);
        };

    }, []);

    // PAGE FLIP EVENT
    const handleFlip = useCallback((event: any) => {

        setCurrentPage(event.data);

    }, []);

    // NEXT
    const nextPage = () => {

        bookRef.current?.pageFlip()?.flipNext();

    };

    // PREVIOUS
    const previousPage = () => {

        bookRef.current?.pageFlip()?.flipPrev();

    };

    if (!mounted) return null;

    return (

        <section className="newspaper-reader">

            {/* NEWSPAPER */}

            <div className="newspaper-stage">

                <div
                    className="newspaper-book-position"
                    style={{
                        transform:
                            !isMobile && currentPage === 0
                                ? `translateX(-${pageWidth / 2}px)`
                                : "translateX(0px)",
                    }}
                >

                    <HTMLFlipBook
                        ref={bookRef}

                        width={pageWidth}
                        height={pageHeight}

                        size="fixed"

                        minWidth={280}
                        maxWidth={600}

                        minHeight={395}
                        maxHeight={900}

                        showCover={true}

                        usePortrait={isMobile}

                        autoSize={false}

                        mobileScrollSupport={true}

                        drawShadow={true}
                        maxShadowOpacity={0.35}

                        flippingTime={1000}

                        startPage={0}
                        startZIndex={0}

                        useMouseEvents={true}
                        swipeDistance={30}

                        clickEventForward={true}
                        showPageCorners={true}

                        disableFlipByClick={false}

                        onFlip={handleFlip}
                        style={{}}
                        className="freight-newspaper-book cursor-pointer"

                    >

                        {images.map((img, index) => (

                            <Page
                                key={index}
                                src={img.src}
                                number={index + 1}
                            />

                        ))}

                    </HTMLFlipBook>

                </div>

            </div>


            {/* PAGE NAVIGATION */}

            <div className="newspaper-navigation">

                <button
                    onClick={previousPage}
                    disabled={currentPage === 0}
                    className="newspaper-nav-btn"
                >
                    ← Previous
                </button>

                <div className="newspaper-counter">

                    <span>{currentPage + 1}</span>

                    <span>/</span>

                    <span>{images.length}</span>

                </div>

                <button
                    onClick={nextPage}
                    disabled={currentPage >= images.length - 1}
                    className="newspaper-nav-btn"
                >
                    Next →
                </button>

            </div>

            <p className="newspaper-hint">
                Turn pages using the corners or navigation buttons
            </p>

        </section>

    );

}
