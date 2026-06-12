import React from 'react';
import { Globe, Megaphone, TrendingUp, ListPlus, Mail } from 'lucide-react';
import Image from 'next/image';

// Define the service item interface
interface Category {
    name: string;
    link: string;
}

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    cate: Category[]
}

export default function ServicesSection() {
    const services: ServiceItem[] = [
        {
            id: 1,
            title: "Global Logistics Advertising",
            description: "Reach thousands of freight forwarders, logistics companies, shipping lines, and international trade professionals through targeted industry-focused advertising.",
            icon: <Globe className="w-6 h-6 " />,
            cate: [

            ]
        },
        {
            id: 2,
            title: "Digital Marketing Campaigns",
            description: "Strategic digital marketing solutions crafted for the logistics industry, helping companies build brand awareness, attract potential customers, and achieve sustainable growth.",
            icon: <Megaphone className="w-6 h-6 " />,
            cate: [

            ]
        },
        {
            id: 3,
            title: "Online Business Promotion",
            description: "Enhance your online presence and connect with international freight forwarders, logistics providers, and potential business partners worldwide.",
            icon: <TrendingUp className="w-6 h-6 " />,
            cate: [

            ]
        },
        {
            id: 4,
            title: "Logistics Industry Listings",
            description: "Expand your global network through a professional company listing designed to enhance visibility, credibility, and business opportunities within the logistics industry.",
            icon: <ListPlus className="w-6 h-6" />,
            cate: [
                { name: 'List Your Company', link: '/' },
                { name: 'Get Listed Today', link: '/' },
                { name: 'Join Our Logistics Directory', link: '/' },
                { name: 'Promote Your Business', link: '/' },
                { name: 'Become a Featured Member', link: '/' },
            ]
        },
        {
            id: 5,
            title: "Newsletter Advertising",
            description: "Increase brand awareness and generate business opportunities through strategic placement in industry-focused newsletters distributed to logistics and freight professionals.",
            icon: <Mail className="w-6 h-6 " />,
            cate: [

            ]
        },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className='py-5'>
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#fff] uppercase bg-[#58595b] border-l-4 border-[#f1671a]">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#58595b] leading-tight">
                        Our  <span className="text-[#f1671a]">Services</span>
                    </h2>
                    {/* <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        Freight Digital works with businesses across the entire logistics sector, delivering tailored growth solutions to specific niches.
                    </p> */}
                </div>
                {/* <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-[#f1671a] uppercase tracking-wide">
                        What We Offer
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold text-[#58595b] sm:text-4xl tracking-tight">
                        Our Services
                    </p>
                    <div className="mt-4 h-1 w-12 bg-[#f1671a] mx-auto rounded-full"></div>
                </div> */}

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">


                    <div className="lg:col-span-5 space-y-6">
                        <div className="relative group overflow-hidden rounded-2xl bg-slate-200 border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl">
                            <Image src="/images/service/service-title.jpg" alt="Service" width={600} height={400} className="w-full h-auto" />
                        </div>
                        <div className="p-4 bg-[#58595b]/20 border-l-4 border-[#f1671a] rounded-r-xl">
                            <p className="text-sm text-[#f1671a] font-medium leading-relaxed">
                                Empowering freight forwarders with precision digital reach across global supply chains.
                            </p>
                        </div>
                    </div>


                    <div className="lg:col-span-7 space-y-4">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group flex gap-5 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
                            >
                                {/* Icon Container */}
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-[#f1671a] group-hover:text-white transition-colors duration-200">
                                    <div className="group-hover:scale-110 transition-transform duration-200 text-[#f1671a] group-hover:text-white">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="space-y-3 flex-1">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-bold text-[#58595b] group-hover:text-[#f1671a] transition-colors duration-200">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Clickable Tags Layout */}
                                    {service.cate && service.cate.length > 0 && (
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {service.cate.map((category, index) => (
                                                <a
                                                    key={index}
                                                    href={category.link || "#"}
                                                    className="inline-flex items-center px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-[#f1671a] hover:text-white rounded-full transition-colors duration-150 border border-slate-200 hover:border-[#f1671a]"
                                                >
                                                    {category.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}