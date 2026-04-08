"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ThumbnailCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const mainSliderRef = useRef<Slider | null>(null);
    const navSliderRef = useRef<Slider | null>(null);

    const settingsFor = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: navSliderRef.current as Slider,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: navSliderRef.current as Slider,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: navSliderRef.current as Slider,
                },
            },
        ],
    };

    const settingsNav = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: mainSliderRef.current as Slider,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (oldIndex: number, newIndex: number) =>
            setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
        ],
    };

    const img = ['/images/home-img/img-1.jpg', '/images/home-img/img-2.jpg', '/images/home-img/img-3.jpg', '/images/home-img/img-4.jpg', '/images/home-img/img-5.jpg', '/images/home-img/img-6.jpg'];

    useEffect(() => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickGoTo(activeIndex);
        }
    }, [activeIndex]);

    return (
        <>
            <div>
                <Slider {...settingsFor} ref={mainSliderRef} className="pb-3">
                    {img.map((item, index) => (
                        <div key={index}>
                            <Image
                                src={item}
                                alt={`Conference ${index + 1}`}
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </Slider>
                <Slider {...settingsNav} ref={navSliderRef} className="thumb">
                    {img.map((item, index) => (
                        <div key={index}>
                            <Image
                                src={item}
                                alt={`Conference ${index + 1}`}
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg"
                            />
                        </div>
                    ))}


                </Slider>
            </div>
        </>
    );
};

export default ThumbnailCarousel;
