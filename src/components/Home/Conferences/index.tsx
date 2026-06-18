import React from "react";
import Link from "next/link";
import ThumbnailCarousel from "../ThumbnailCarousel";

const Conferences = () => {
  return (
    <>
      <section className="bg-IcyBreeze dark:bg-[#fff] relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-[#0A2947] before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <ThumbnailCarousel />
            </div>
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <span className="uppercase text-[11px] font-black italic px-2 py-1 bg-[#58595B]/50 rounded-xl tracking-wider text-[#fff]">Welcome to </span>
              <h2 className="uppercase text-[#F1671A]">freight digital</h2>
              <p className="text-lg font-normal text-justify text-[#58595B] dark:text-opacity-90 max-w-506 md:pt-3 pt-5 md:pb-10 pb-6">
                Freight Digital is a specialized digital marketing partner  dedicated exclusively to the freight forwarding, logistics, shipping, and supply chain industry. We help freight forwarders, customs brokers, NVOCCs, transport operators, and logistics service providers strengthen their digital presence, enhance brand visibility, and generate new business opportunities worldwide.
              </p>
              <Link
                href="/about"
                className="btn_outline btn-3 hover-outline-slide-down"
              >
                <span>Read more</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences;
