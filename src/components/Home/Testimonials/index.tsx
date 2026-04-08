"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Custom Arrow Components
const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all group shadow-xl"
            aria-label="Next Slide"
        >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all group shadow-xl"
            aria-label="Previous Slide"
        >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
    );
};

const Testimonials = () => {
    const testimonials = [
        {
            name: "Jordhan Daniyel",
            role: "Global Logistics Director",
            profilePic: "/images/testimonials/testimonials-profile.png",
            content: "My busy schedule leaves little, if any, time for blogging and social media. This platform has been a huge part of helping me grow my business through global freight networks.",
            stars: 5
        },
        {
            name: "Jordhan Daniyel",
            role: "Global Logistics Director",
            profilePic: "/images/testimonials/testimonials-profile.png",
            content: "My busy schedule leaves little, if any, time for blogging and social media. This platform has been a huge part of helping me grow my business through global freight networks.",
            stars: 5
        },
        {
            name: "Jordhan Daniyel",
            role: "Global Logistics Director",
            profilePic: "/images/testimonials/testimonials-profile.png",
            content: "My busy schedule leaves little, if any, time for blogging and social media. This platform has been a huge part of helping me grow my business through global freight networks.",
            stars: 5
        },
        {
            name: "Jordhan Daniyel",
            role: "Global Logistics Director",
            profilePic: "/images/testimonials/testimonials-profile.png",
            content: "My busy schedule leaves little, if any, time for blogging and social media. This platform has been a huge part of helping me grow my business through global freight networks.",
            stars: 5
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, // Link custom arrow
        prevArrow: <PrevArrow />, // Link custom arrow
        autoplay: true,
        autoplaySpeed: 5000,
        customPaging: (i: number) => (
            <div className="w-2 h-2 mx-2 bg-blue-600/30 rounded-full hover:bg-blue-500 transition-all dot-active"></div>
        ),
    };

    return (
        <section className="relative pb-24 pt-14 bg-[#0d1a2c] overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="uppercase text-[11px] font-black italic px-2 py-1 bg-white rounded-xl tracking-wider text-[#0D1A2C] text-center">Our Happy Clients!</span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">What Our Attendees Say</h3>
                </div>

                <div className="max-w-4xl mx-auto relative px-4 md:px-0">
                    <Slider {...settings} className="testimonial-slider mb-20">
                        {testimonials.map((item, index) => (
                            <div key={index} className="outline-none">
                                <div className="relative p-8 md:p-16 rounded-[40px] bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                                    <Quote className="absolute top-10 left-10 w-32 h-32 text-white/[0.03] -z-10" />

                                    <div className="flex flex-col items-center text-center">
                                        <div className="flex gap-1 mb-8">
                                            {[...Array(item.stars)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <p className="text-xl md:text-2xl leading-relaxed text-blue-100/80 italic mb-10">
                                            "{item.content}"
                                        </p>

                                        <div className="flex flex-col items-center">
                                            <div className="relative w-20 h-20 mb-4 p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg">
                                                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#0d1a2c]">
                                                    <Image src={item.profilePic} alt={item.name} fill className="object-cover" />
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-bold text-white">{item.name}</h4>
                                            <p className="text-blue-400 text-sm font-medium">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>


                </div>
            </div>

            <style jsx global>{`
        .testimonial-slider .slick-dots { bottom: -50px; }
        .testimonial-slider .slick-dots li.slick-active div {
          background-color: #3b82f6;
          width: 24px;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;