
import React from "react";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
import Banner from "@/components/Layout/Banner";
import Edition from "@/components/edition";


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
            <Banner page='Daily Edition' url='/images/banner/banner-3.jpg' />
            <Edition/>
            <TicketSection />
        </>
    );
};

export default page;