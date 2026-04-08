"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const sliderData = [
    {
        tag: "",
        title: "Grow Your Logistics Business \n With Digital Power",
        desc: "Freight Digital helps freight forwarders, IATA agents, and logistics companies boost visibility and generate high-quality business leads through targeted digital marketing.",
        bgImage: "/images/banner/banner-1.1.jpg",
        accent: "from-blue-600 to-cyan-400",
    },
    {
        tag: "",
        title: "Digital Marketing \n Built   for Freight Forwarders",
        desc: "We specialize in logistics marketing—helping freight forwarders, NVOCCs, transport companies, and customs brokers connect with airlines, and carriers to grow their business.",
        bgImage: "/images/banner/banner-2.jpg",
        accent: "from-purple-600 to-pink-500",
    },
];
export default function HeroSlider() {
    return (
        <section className="relative w-full overflow-hidden paddding-hero-ls">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                speed={1500}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="w-full"
            >
                {sliderData.map((slide, i) => (
                    <SwiperSlide key={i} className="relative">
                        {/* Background Image with Gradient Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110 swiper-slide-active:scale-100"
                            style={{ backgroundImage: `url(${slide.bgImage})` }}
                        >
                            {/* Dark Overlay - Critical for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/40"></div>
                        </div>

                        {/* Content Container */}
                        <div className="container relative z-10 flex flex-col justify-center px-6">
                            <div className="max-w-3xl slide-content md:py-20">
                                {/* chuma space purpose */}
                                <span className={`inline-block px-5 py-1.5 rounded-full text-xs font-black uppercase   mb-8 shadow-lg`}>
                                    {slide.tag ?? ''}
                                </span>

                                <h1 className="text-6xl md:text-[4rem] font-black text-white leading-[1.05] mb-8 drop-shadow-2xl whitespace-pre-line">
                                    {slide.title}
                                </h1>

                                <p className="text-xl text-slate-200 max-w-xl mb-12 leading-relaxed opacity-90">
                                    {slide.desc}
                                </p>

                                <div className="flex flex-wrap gap-6">
                                    <Link href="/services" className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:-translate-y-1">
                                        Our Solutions
                                    </Link>
                                    <Link href="/contact" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300">
                                        Reach Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Global Style overrides for Pagination */}
            <style jsx global>{`
        .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.3;
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
        </section>
    );
}