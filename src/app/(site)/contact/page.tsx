import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
// import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
// import TicketSection from "@/components/Home/TicketSection";
import Banner from "@/components/Layout/Banner";
export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>

      <Banner page='Contact Us' url='/images/banner/contact-us.jpg' />
      <ContactInfo />
      <ContactForm />
      {/* <Location /> */}
      {/* <TicketSection /> */}
    </>
  );
};

export default page;
