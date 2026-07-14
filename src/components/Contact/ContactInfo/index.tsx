"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface CareerFormData {
    name: string;
    email: string;
    phone: string;
    resume: File | null;
    description: string;
}

const ContactInfo = () => {
    // 1. Manage Modal State
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

    // 2. Updated Handler to open pop-up
    function openPop() {
        setIsModalOpen(true);
    }

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


                    <div className="group relative flex flex-col justify-between p-8 lg:p-10 rounded-3xl bg-[#58595b] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
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
                                href="#consultation-section"
                                className="inline-flex items-center gap-2 font-semibold text-base border-b-2 border-transparent pb-1 text-[#f1671a] hover:border-[#f1671a] transition-all duration-200"
                            >
                                Leave a message
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>


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

                            <button
                                onClick={openPop}
                                className="inline-flex items-center gap-2 font-semibold text-base border-b-2 border-transparent pb-1 text-[#f1671a] hover:border-[#f1671a] transition-all duration-200"
                            >
                                Send an application
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>

                </div>



                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-slate-800 group/map">
                    <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover/map:opacity-0 opacity-5"
                        style={{ backgroundColor: "#58595b" }}
                    />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.2595178811607!2d55.4585985!3d25.3199091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f26195b7e6b%3A0xc0f6d4eb509bdf75!2sSPC%20Free%20Zone%20-%20Business%20Setup%20In%20Sharjah%2C%20UAE!5e1!3m2!1sen!2sin!4v1781013353774!5m2!1sen!2sin" width="100%"
                        height="480"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full filter grayscale-[10%] contrast-[102%] dark:invert-[90%] dark:hue-rotate-[180deg] transition-all duration-500 ease-in-out"></iframe>
                </div>
            </div>

            {/* 3. Injected Pop-up Component */}
            <CareerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="my-20">
                <div className="relative overflow-hidden rounded-3xl bg-[#58595b] px-8 py-12 lg:px-16 lg:py-16 shadow-2xl">

                    {/* Background Glow */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f1671a]/20 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* Left */}
                        <div className="max-w-2xl">
                            <span className="inline-block mb-4 rounded-full bg-[#f1671a]/20 px-4 py-2 text-sm font-semibold text-[#f1671a] uppercase tracking-widest">
                                Let's Work Together
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                Ready to Grow Your Business?
                            </h2>

                            <p className="mt-5 text-lg text-slate-300 leading-8">
                                Whether you're looking to expand your business, advertise your
                                services, or discover new logistics opportunities, our team is
                                here to help you get started.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">

                            <Link
                                href="/contact"
                                className="bg-[#f1671a] hover:bg-orange-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 text-center shadow-lg hover:scale-105"
                            >
                                Book a Free Consultation
                            </Link>

                            <Link
                                href="/contact"
                                className="bg-white text-[#58595b] hover:bg-slate-100 font-semibold px-6 py-4 rounded-xl transition-all duration-300 text-center shadow-lg hover:scale-105"
                            >
                                Schedule a Demo
                            </Link>

                            <Link
                                href="/contact#consultation-section"
                                className="border border-white/30 hover:border-[#f1671a] text-white hover:bg-[#f1671a] font-semibold px-6 py-4 rounded-xl transition-all duration-300 text-center"
                            >
                                Contact Us Today
                            </Link>

                            <Link
                                href="/edition"
                                className="border border-white/30 hover:border-[#f1671a] text-white hover:bg-[#f1671a] font-semibold px-6 py-4 rounded-xl transition-all duration-300 text-center"
                            >
                                Advertise With Us
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

/* --- POP-UP MODAL SUB-COMPONENT --- */
interface CareerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function CareerModal({ isOpen, onClose }: CareerModalProps) {
    const [formData, setFormData] = useState<CareerFormData>({
        name: "",
        email: "",
        phone: "",
        resume: null,
        description: "",
    });

    if (!isOpen) return null;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Form compilation check
        console.log("Submitting Career Information:", formData);

        // Clear configuration and close out modal view safely
        setFormData({ name: "", email: "", phone: "", resume: null, description: "" });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Smooth Tinted Overlay Background */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Box Container */}
            <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 lg:p-8 text-left align-middle shadow-2xl transition-all z-10 border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                        Career Information
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors text-xl font-medium"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 p-2.5 text-base focus:border-[#f1671a] focus:outline-none focus:ring-1 focus:ring-[#f1671a] text-black bg-white"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 p-2.5 text-base focus:border-[#f1671a] focus:outline-none focus:ring-1 focus:ring-[#f1671a] text-black bg-white"
                                placeholder="name@gmail.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 p-2.5 text-base focus:border-[#f1671a] focus:outline-none focus:ring-1 focus:ring-[#f1671a] text-black bg-white"
                                placeholder="Phone number"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Attach Resume</label>
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            onChange={handleFileChange}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-[#f1671a] hover:file:bg-orange-100 cursor-pointer"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Short Description</label>
                        <textarea
                            name="description"
                            rows={3}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 p-2.5 text-base focus:border-[#f1671a] focus:outline-none focus:ring-1 focus:ring-[#f1671a] resize-none text-black bg-white"
                            placeholder="Brief profile summary..."
                        />
                    </div>

                    <div className="mt-6 flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-xl bg-[#f1671a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#d65612] transition-colors shadow-md shadow-orange-500/10"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactInfo;