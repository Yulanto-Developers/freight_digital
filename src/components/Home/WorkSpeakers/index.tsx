"use client";
import React from "react";
import Image from "next/image";
import { speakers } from "@/app/api/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const WorkSpeakers = ({ showTitle = true }) => {
  const pathname = usePathname();
  return (
    <>
      <section className={` dark:bg-darkmode ${pathname === "/" ? "" : ""}`}>
        {showTitle && (
          <div className="flex flex-col justify-center items-center">
            <span className="uppercase text-[11px] font-black italic px-2 py-1 bg-white rounded-xl tracking-wider text-[#0D1A2C] text-center">Industry Understanding</span>
            <h2 className="text-center pb-12">Your Growth with FreightDigital</h2>

          </div>
        )}
       
            <div className="text-center md:pb-20 pb-8">

              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="text-SlateBlueText dark:text-opacity-80 text-lg font-normal max-w-920 m-auto">
                The logistics industry is highly competitive and relationship-driven. Many freight forwarding companies still rely on traditional methods such as referrals and agent networks to gain business. Freight Digital helps logistics companies take advantage of these opportunities by building strong digital strategies that improve online visibility and generate qualified business inquiries.
             
          </p>
        </div>
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`}
              data-aos-duration="1000"
              className={`col-span-1 group overflow-hidden ${index % 2 === 1 ? "lg:mt-28 mt-0" : ""
                }`}
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={speaker.src}
                  alt={speaker.alt}
                  width={0}
                  height={0}
                  quality={100}
                  layout="responsive"
                  sizes="100vh"
                  className=" object-cover w-full h-full transition-all duration-0.4s group-hover:scale-110"
                />
              </div>
              <div className="pt-6">
                <h6 className="text-[22px] leading-[2.25rem] font-bold text-secondary dark:text-white">
                  {speaker.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkSpeakers;
