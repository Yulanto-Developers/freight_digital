
import React from "react";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
import Banner from "@/components/Layout/Banner";
import AboutSec from "@/components/about";
import GrowthSection from "@/components/about/Growth";
export const metadata: Metadata = {
    title: "About | Symposium",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
    ];
    return (
        <>
            <Banner page='About Us' />
            <AboutSec />
            <GrowthSection />
            <TicketSection />
        </>
    );
};

export default page;