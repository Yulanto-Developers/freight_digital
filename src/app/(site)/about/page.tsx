
import React from "react";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
import Banner from "@/components/Layout/Banner";
import AboutSec from "@/components/about";
import GrowthSection from "@/components/about/Growth";
import WhyChooseUs from "@/components/about/WhyChosse";
import FreightDigitalInfo from "@/components/about/WhyChosse";
export const metadata: Metadata = {
    title: "About",
};

const page = () => {
    // const breadcrumbLinks = [
    //     { href: "/", text: "Home" },
    //     { href: "/about", text: "About" },
    // ];
    return (
        <>
            <Banner page='About Us' url='/images/banner/b-450.jpg' />
            <AboutSec />
            <FreightDigitalInfo />
            <GrowthSection />
            <TicketSection />
        </>
    );
};

export default page;