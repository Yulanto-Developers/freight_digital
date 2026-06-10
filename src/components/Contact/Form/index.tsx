import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
    return (
        <>
            <section id="consultation-section" className="bg-white lg:pb-24 pb-16 pt-0 font-sans">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-12 items-center">

                        {/* Form Column */}
                        <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl text-[#58595b] font-extrabold tracking-tight mb-8 ">
                                Get Online Consultation
                            </h2>

                            <form className="space-y-5" >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="pb-2 text-sm font-medium text-[#f1671a]">
                                            First Name*
                                        </label>
                                        <input
                                            id="first-name"
                                            className="w-full text-base text-[#f1671a]  px-4 py-3 rounded-xl border  bg-white border-[#58595b]  transition-all duration-300 focus:border-[#f1671a] focus:ring-2 focus:ring-[#f1671a]/20 focus:outline-none"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="pb-2 text-sm font-medium text-[#f1671a]">
                                            Last Name*
                                        </label>
                                        <input
                                            id="last-name"
                                            className="w-full text-base text-[#f1671a]  px-4 py-3 rounded-xl border  bg-white border-[#58595b]  transition-all duration-300 focus:border-[#f1671a] focus:ring-2 focus:ring-[#f1671a]/20 focus:outline-none"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="pb-2 text-sm font-medium text-[#f1671a]">
                                            Email address*
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full text-base text-[#f1671a]  px-4 py-3 rounded-xl border  bg-white border-[#58595b]  transition-all duration-300 focus:border-[#f1671a] focus:ring-2 focus:ring-[#f1671a]/20 focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="pb-2 text-sm font-medium text-[#f1671a]">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            className="w-full text-base text-[#f1671a]  px-4 py-3 rounded-xl border  bg-white border-[#58595b]  transition-all duration-300 focus:border-[#f1671a] focus:ring-2 focus:ring-[#f1671a]/20 focus:outline-none"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message row explicitly updated to grid-cols-1 to span the full width */}
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex flex-col w-full">
                                        <label className="pb-2 text-sm font-medium text-[#f1671a]">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full text-base text-[#f1671a]  px-4 py-3 rounded-xl border  bg-white border-[#58595b]  transition-all duration-300 focus:border-[#f1671a] focus:ring-2 focus:ring-[#f1671a]/20 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-8 py-3.5 bg-[#f1671a] text-white font-semibold rounded-xl tracking-wide shadow-md hover:bg-[#f1671a]/90 hover:shadow-lg transition-all duration-300 transform active:scale-[0.98]"
                                    >
                                        Make an appointment
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Image Column */}
                        <div className="col-span-12 md:col-span-6 order-1 md:order-2">
                            <div className="overflow-hidden transition-all duration-500 ">
                                <Image
                                    src="/images/contact-page/vector.png"
                                    alt="Contact"
                                    width={1300}
                                    height={860}
                                    quality={100}
                                    priority
                                    className="w-full  h-auto object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;