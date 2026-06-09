
import React from "react";
import { Metadata } from "next";
import Banner from "@/components/Layout/Banner";
// import TicketSection from "@/components/Home/TicketSection";
import ServicesSection from "@/components/service";
import IndustriesServed from "@/components/service/IndustriesServed";
export const metadata: Metadata = {
    title: "Our Service",
};

const page = () => {
    // const breadcrumbLinks = [
    //     { href: "/", text: "Home" },
    //     { href: "/about", text: "About" },
    // ];
    return (
        <>
            <Banner page='Our Service' url='/images/banner/b-470.jpg' />
            <ServicesSection />
            <IndustriesServed />
            {/* <TicketSection /> */}
        </>
    );
};

export default page;