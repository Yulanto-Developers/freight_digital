import React from 'react';
import { Ship, Truck, HardHat, ShieldCheck, Factory } from 'lucide-react';

interface SectorCategory {
    title: string;
    icon: React.ReactNode;
    subSectors: string[];
    gradient: string;
}

export default function IndustriesServed() {
    const sectors: SectorCategory[] = [
        {
            title: "Freight & Transport",
            icon: <Truck className="w-6 h-6" />,
            gradient: "from-blue-600 to-cyan-500",
            subSectors: [
                "Freight Forwarders",
                "NVOCC operators",
                "Trucking companies",
                "Air cargo agents",
                "Project cargo specialists"
            ]
        },
        {
            title: "Shipping Sector",
            icon: <Ship className="w-6 h-6" />,
            gradient: "from-indigo-600 to-blue-500",
            subSectors: [
                "Shipping lines",
                "Ship agents",
                "Chartering companies"
            ]
        },
        {
            title: "Logistics Services",
            icon: <Factory className="w-6 h-6" />,
            gradient: "from-teal-600 to-emerald-500",
            subSectors: [
                "Warehousing companies",
                "3PL / 4PL logistics providers",
                "Distribution companies"
            ]
        },
        {
            title: "Cargo Support Services",
            icon: <HardHat className="w-6 h-6" />,
            gradient: "from-sky-600 to-blue-400",
            subSectors: [
                "Packing companies",
                "Fumigation services",
                "Surveyors",
                "Marine inspection companies"
            ]
        },
        {
            title: "Risk & Compliance",
            icon: <ShieldCheck className="w-6 h-6" />,
            gradient: "from-slate-700 to-slate-900",
            subSectors: [
                "Marine insurance companies",
                "Customs brokers",
                "Trade consultants"
            ]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className='py-5'>
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#fff] uppercase bg-[#58595b] border-l-4 border-[#f1671a]">
                        Target Audience
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#58595b] leading-tight">
                        Industries <span className="text-[#f1671a]">We Serve</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                      From freight forwarding to warehousing and supply chain management, Freight Digital provides industry-specific marketing solutions that help logistics companies grow in a competitive global market.
                    </p>
                </div>

                {/* Dynamic Masonry/Flex Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-between bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white"
                        >
                            <div>
                                {/* Header Block with Icon and Accent Line */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${sector.gradient} text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                        {sector.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                                        {sector.title}
                                    </h3>
                                </div>

                                {/* Subsectors List */}
                                <ul className="space-y-3">
                                    {sector.subSectors.map((item, subIndex) => (
                                        <li key={subIndex} className="flex items-center gap-3 text-slate-600">
                                            {/* Custom minimal bullet point */}
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0" />
                                            <span className="text-sm font-medium tracking-wide group-hover:text-slate-800 transition-colors duration-200">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Subtle top decorative bar that expands on hover */}
                            <div className={`absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r ${sector.gradient} opacity-40 group-hover:opacity-100 rounded-b-full transition-opacity duration-300`} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}