"use client"; // <--- Add this right here at the absolute top line!

import React from "react";
import Link from "next/link";

const ContactInfo = () => {
    const ArrowIcon = () => (
        <svg
            width="18"
            height="14"
            viewBox="0 0 23 17"
            fill="#f1671a"
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform duration-300 ease-out group-hover:translate-x-1.5"
        >
            <path d="M22.653 7.76352L15.3613 0.471852C15.1648 0.282104 14.9017 0.177109 14.6286 0.179483C14.3555 0.181856 14.0942 0.291407 13.9011 0.484541C13.7079 0.677674 13.5984 0.938937 13.596 1.21206C13.5936 1.48518 13.6986 1.74831 13.8884 1.94477L19.4019 7.45831H1.08317C0.806904 7.45831 0.541951 7.56806 0.346601 7.76341C0.151251 7.95876 0.0415039 8.22371 0.0415039 8.49998C0.0415039 8.77625 0.151251 9.0412 0.346601 9.23655C0.541951 9.4319 0.806904 9.54165 1.08317 9.54165H19.4019L13.8884 15.0552C13.7889 15.1513 13.7095 15.2662 13.6549 15.3933C13.6003 15.5204 13.5716 15.6571 13.5704 15.7954C13.5692 15.9337 13.5956 16.0709 13.6479 16.1989C13.7003 16.3269 13.7777 16.4432 13.8755 16.541C13.9733 16.6388 14.0896 16.7162 14.2176 16.7685C14.3456 16.8209 14.4828 16.8473 14.6211 16.8461C14.7594 16.8449 14.8961 16.8161 15.0232 16.7615C15.1503 16.707 15.2652 16.6276 15.3613 16.5281L22.653 9.23644C22.8482 9.0411 22.958 8.77619 22.958 8.49998C22.958 8.22377 22.8482 7.95886 22.653 7.76352Z" />
        </svg>
    );

    return (
        <section className="relative overflow-hidden bg-[#fff] py-20 lg:py-32">
            <div
                className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
                style={{ backgroundColor: "#f1671a" }}
            />
            <div
                className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
                style={{ backgroundColor: "#58595b" }}
            />

            <div className="container mx-auto px-4 lg:max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-28">

                    {/* Card 1: Email */}
                    <div className="group relative flex flex-col justify-between p-8 lg:p-10 rounded-3xl bg-[#58595b]  border border-slate-100  shadow-sm hover:shadow-xl transition-all duration-300"
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#f1671a'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
                        <div>
                            <div
                                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundColor: "rgb(255 255 255 / 27%)", color: "#f1671a" }}
                            >
                                <i className="bg-[url('/images/contact-page/email.svg')] bg-no-repeat bg-contain w-7 h-7 inline-block"></i>
                            </div>
                            <h3
                                className="text-2xl font-bold tracking-tight"
                                style={{ color: "#f1671a" }}
                            >
                                Email Us
                            </h3>
                            <p className="text-white font-normal text-base leading-relaxed mt-3 mb-8 max-w-md">
                                Please feel free to drop us a line. We typically respond to all inquiries within 24 business hours.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 font-semibold text-base border-b-2 border-transparent pb-1 transition-all duration-200"
                                style={{ color: "#f1671a" }}
                                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#f1671a'}
                                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                            >
                                Leave a message
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2: Careers */}
                    <div className="group relative flex flex-col justify-between p-8 lg:p-10 rounded-3xl bg-[#58595b] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fff'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
                        <div>
                            <div
                                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundColor: "rgb(255 255 255 / 27%)" }}
                            >
                                <i className="bg-[url('/images/contact-page/Career.svg')] bg-no-repeat bg-contain w-7 h-7 inline-block"></i>
                            </div>
                            <h3
                                className="text-2xl font-bold tracking-tight dark:text-white"
                                style={{ color: "#f1671a" }}
                            >
                                Careers
                            </h3>
                            <p className="text-white font-normal text-base leading-relaxed mt-3 mb-8 max-w-md">
                                We are always on the lookout for exceptional talent. Join us in shaping the future of our industry.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 font-semibold text-base border-b-2 border-transparent pb-1 transition-all duration-200"
                                style={{ color: "#f1671a" }}
                                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#f1671a'}
                                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                            >
                                Send an application
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Map Section */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-slate-800 group/map">
                    <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover/map:opacity-0 opacity-5"
                        style={{ backgroundColor: "#58595b" }}
                    />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395806.46116803563!2d79.87899178681546!3d13.047985946519182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1779347845855!5m2!1sen!2sin"
                        width="100%"
                        height="480"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full filter grayscale-[10%] contrast-[102%] dark:invert-[90%] dark:hue-rotate-[180deg] transition-all duration-500 ease-in-out"
                    />
                </div>
            </div>


        </section>
    );
};

export default ContactInfo;