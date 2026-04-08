import React from 'react';
import Link from 'next/link';
import { Globe, Megaphone, BarChart3, ListTree, Mail, Target } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            title: "Global Logistics Advertising",
            desc: "Promote your company to thousands of freight forwarders and logistics companies worldwide through our high-traffic portals.",
            icon: <Globe className="w-6 h-6 text-blue-400" />,

        },
        {
            title: "Digital Marketing Campaigns",
            desc: "Targeted marketing strategies designed specifically for the logistics and shipping industry to drive qualified leads.",
            icon: <Target className="w-6 h-6 text-purple-400" />,

        },
        {
            title: "Online Business Promotion",
            desc: "Increase your company's brand visibility across global freight networks and establish industry authority.",
            icon: <Megaphone className="w-6 h-6 text-pink-400" />,

        },
        {
            title: "Logistics Industry Listings",
            desc: "Get your company listed and promoted to international agents and partners in our premium global directory.",
            icon: <ListTree className="w-6 h-6 text-emerald-400" />,

        },
        {
            title: "Newsletter Advertising",
            desc: "Promote your services through logistics-focused digital newsletters reaching thousands of industry professionals.",
            icon: <Mail className="w-6 h-6 text-orange-400" />,

        },
        {
            title: "Analytics & Reporting",
            desc: "Track your campaign performance with real-time data and detailed insights into your marketing ROI.",
            icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,

        }
    ];

    return (
        <div className="min-h-screen dark:bg-darklight text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <span className="uppercase text-[11px] font-black italic px-2 py-1 bg-white rounded-xl tracking-wider text-[#0D1A2C] text-center">Our Services</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
                        Global Logistics Services
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Elevate your logistics brand with data-driven marketing and global networking solutions designed for the modern shipping industry.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  font-sans">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm hover:translate-y-[-8px] flex flex-col h-full"
                        >

                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0" />


                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-black/40 border border-white/5 shadow-inner w-fit">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
                                    {service.desc}
                                </p>

                                <div className="flex items-center text-xs font-bold text-blue-500 uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                                    <Link href='/services' className="flex items-center group/link">

                                        <span className="absolute inset-0 z-20" aria-hidden="true" />
                                        Learn More
                                        <span className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="mt-20 p-[1px] bg-gradient-to-b from-blue-400/20 to-transparent rounded-3xl shadow-2xl border border-white/100 border-b-0 border-l-0  border-r-0 ">

                    <div className="relative overflow-hidden rounded-[23px] p-12 text-center bg-[#0d1a2c]/40 backdrop-blur-2xl border border-blue-100/10 shadow-[inset_0_0_30px_rgba(59,130,246,0.05)]">


                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/15 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent tracking-tight">
                                Ready to expand your global reach?
                            </h3>

                            <p className="text-blue-100/60 mb-10 max-w-xl mx-auto leading-relaxed text-lg">
                                Join the world's leading freight network and start promoting your services today.
                            </p>

                            <Link href='/contact' className="px-12 py-4 bg-[#03203b] hover:bg-[rgb(0 58 113)] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] active:scale-95 border border-blue-100/30">
                                Contact now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;