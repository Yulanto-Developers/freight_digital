"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Rotate3d, ArrowRightLeft, BarChart3, Globe } from 'lucide-react';
import { Rocket, Handshake, TrendingUp, Lightbulb, LucideProps } from "lucide-react";
import Link from 'next/link';

type MissionData = {
    title: string;
    description1: string;
    description2: string;
    description3: string;
};
interface GoalItem {
    title: string;
    description: string;
    // Dynamic reference to a component class definition type
    icon: React.ComponentType<LucideProps>;
}

export default function MissionVision() {
    const [isFlipped, setIsFlipped] = useState(false);

    const data: MissionData[] = [
        {
            title: 'Our Mission',
            description1: 'At Freight Digital, our mission is to empower freight forwarding and logistics companies to achieve sustainable business growth through strategic and results-driven digital marketing solutions.',
            description2: 'We are committed to enhancing the online presence of logistics businesses by delivering specialized services, including Search Engine Optimization (SEO) and professional networking strategies.',
            description3: 'Our focus is to create measurable business opportunities for freight forwarders, logistics providers, carriers, NVOCCs, customs brokers, and supply chain companies by increasing visibility, generating qualified leads, and strengthening their market presence.',
        },
        {
            title: 'Our Vision',
            description1: 'Our vision is to become the most trusted digital marketing partner for freight forwarder and logistics companies worldwide.',
            description2: 'We strive to help logistics businesses thrive in the digital era by building strong online visibility, enhancing brand recognition, and creating meaningful connections with customers and global trade partners.',
            description3: 'Freight Digital aims to be recognized as a leading specialized marketing partner for the logistics industry, delivering innovative digital solutions that drive sustainable growth, business development, and long-term success.',
        }
    ];



    const keyGoals: GoalItem[] = [
        {
            title: "Increase Online Visibility",
            description: "Help logistics companies improve their search engine rankings and digital presence across global supply chain networks.",
            icon: Rocket,
        },
        {
            title: "Generate Qualified Leads",
            description: "Attract potential enterprise customers, overseas shipping agents, and long-term business partners through targeted marketing strategies.",
            icon: Target,
        },
        {
            title: "Strengthen Brand Recognition",
            description: "Build a highly professional, authoritative, and trustworthy brand image within the logistics and supply chain industry.",
            icon: Globe,
        },
        {
            title: "Expand Global Networking",
            description: "Support freight forwarders and logistics providers in connecting seamlessly with international partners and trade networks.",
            icon: Handshake,
        },
        {
            title: "Drive Business Growth",
            description: "Deliver marketing solutions that directly contribute to increased RFQs, inquiries, customer acquisition, and consistent revenue growth.",
            icon: TrendingUp,
        },
        {
            title: "Promote Digital Transformation",
            description: "Help traditional logistics businesses seamlessly adapt to evolving modern digital trends, technologies, and data streams.",
            icon: Lightbulb,
        },
    ];



    return (
        <>
            <section className="bg-slate-50 py-20 font-sans">
                <div className="container mx-auto px-4 lg:max-w-screen-xl">

                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-5xl  pb-4 font-bold text-[#58595b] leading-tight">
                            Our Goals at<span className="text-[#f1671a]"> Freight Digital</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            We help freight forwarding and logistics companies leverage tailored, cutting-edge digital marketing solutions to achieve sustainable growth and stronger market visibility worldwide.
                        </p>
                    </div>

                    {/* 3-Column Grid Base Structure */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyGoals.map((goal, index) => {
                            // Destructure and capitalize the icon component reference
                            const IconComponent = goal.icon;

                            return (
                                <div
                                    key={index}
                                    className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Responsive, animated Lucide Icon Wrapper Container */}
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-50">
                                        <IconComponent
                                            size={24}
                                            className="w-6 h-6 text-[#f1671a] group-hover:text-[#f1671a] transition-colors duration-300"
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-[#58595b] mb-3">{goal.title}</h3>
                                    <p className="text-gray-500 text-base leading-relaxed">{goal.description}</p>
                                </div>
                            );
                        })}
                    </div>


                    <div className="relative rounded-3xl overflow-hidden p-8 mt-10 bg-[#58595b] border border-slate-800 shadow-xl max-w-4xl mx-auto group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f1671a]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                            <div className="flex gap-4 items-start">
                                <BarChart3
                                    size={28}
                                    className="text-white transition-colors duration-300 group-hover:text-[#f1671a]"
                                    strokeWidth={2.2}
                                />
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        Deliver Measurable Results
                                    </h4>
                                    <p className="text-slate-300 max-w-xl text-sm lg:text-base leading-relaxed">
                                        We stand by data-driven marketing strategies built with clear performance tracking, customized dashboards, and continuous optimization metrics to keep your pipelines growing.
                                    </p>
                                </div>
                            </div>
                            <div className="shrink-0 w-full md:w-auto">
                                <Link href='/contact' >
                                    <span className="inline-block text-center w-full md:w-auto px-6 py-3 bg-[#f1671a] text-white font-semibold rounded-xl tracking-wide shadow-md hover:bg-[#d65612] transition-colors cursor-pointer">
                                        Learn Our Methodology
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="pt-14 pb-12  flex flex-col items-center justify-center overflow-hidden relative min-h-screen">

                {/* <div className='text-center my-14'>
                <h2 className="text-5xl md:text-6xl font-black text-[#58595b] tracking-tighter uppercase">
                    Our <span className="text-[#f1671a]">Goals</span>
                </h2>

                <p className='text-md tracking-normal text-[#58595b] text-center mt-2'>Our goal is to help logistics companies increase global visibility, build strong agent networks, and generate new business opportunities through targeted digital marketing.</p>


                <div>

                </div>
            </div> */}

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#58595b]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">


                    <div className="text-center mb-12">

                        <div className="flex p-1 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-800 shadow-2xl mb-8 w-fit mx-auto">
                            <button
                                onClick={() => setIsFlipped(false)}
                                className={`relative flex items-center justify-center gap-2 px-5 py-2.5 min-w-[120px] rounded-lg text-[13px] font-black uppercase tracking-widest transition-all duration-500 z-10 ${!isFlipped ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                                    }`}
                            >
                                <Target size={14} /> Mission
                                {!isFlipped && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-[#f1671a] rounded-lg -z-10 shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                            <button
                                onClick={() => setIsFlipped(true)}
                                className={`relative flex items-center justify-center gap-2 px-5 py-2.5 min-w-[120px] rounded-lg text-[13px] font-black uppercase tracking-widest transition-all duration-500 z-10 ${isFlipped ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                                    }`}
                            >
                                <Eye size={14} /> Vision
                                {isFlipped && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-[#f1671a] rounded-lg -z-10 shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        </div>


                    </div>


                    <div className="relative group perspective-2000 w-full max-w-[650px] h-[600px] md:h-[550px]">
                        <motion.div
                            className="w-full h-full relative cursor-pointer"
                            initial={false}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                            style={{ transformStyle: 'preserve-3d' }}
                            onClick={() => setIsFlipped(!isFlipped)}
                        >


                            <div
                                className="absolute inset-0 w-full h-full bg-[#58595b] border-2 border-slate-800 rounded-[3rem] p-8 md:p-14 flex flex-col justify-between shadow-2xl overflow-hidden"
                                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                            >

                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff'/%3E%3C/svg%3E")` }}
                                />

                                <div className="relative z-10">
                                    <CardHeader icon={<Target size={32} strokeWidth={2.5} />} number="01" title={data[0].title} />
                                    <DescriptionOne text={data[0].description1} />
                                    <DescriptionList desc2={data[0].description2} desc3={data[0].description3} />
                                </div>

                                <CardFooter leftIcon={<Rotate3d size={14} className="animate-pulse" />} leftText="Tap to Flip" rightIcon={<Globe size={20} />} />
                            </div>


                            <div
                                className="absolute inset-0 w-full h-full bg-[#58595b] border-2 border-[#2C5378]/50 rounded-[3rem] p-8 md:p-14 flex flex-col justify-between shadow-2xl overflow-hidden"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)'
                                }}
                            >

                                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='#f1671a' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}
                                />
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#f1651a00] rounded-full blur-[80px]" />

                                <div className="relative z-10">
                                    <CardHeader icon={<Eye size={32} strokeWidth={2.5} />} number="02" title={data[1].title} />
                                    <DescriptionOne text={data[1].description1} />
                                    <DescriptionList desc2={data[1].description2} desc3={data[1].description3} />
                                </div>

                                <CardFooter
                                    leftIcon={<ArrowRightLeft size={14} />}
                                    leftText="Back to Mission"
                                    rightIcon={
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-[#f1671a]" />
                                            <div className="w-8 h-2 rounded-full bg-[#2C5378]" />
                                        </div>
                                    }
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                <style jsx>{`
                .perspective-2000 { perspective: 2000px; }
            `}</style>
            </section>
        </>
    );
}



const CardHeader = ({ icon, number, title }: { icon: React.ReactNode, number: string, title: string }) => (
    <div className="flex justify-between items-start mb-6 md:mb-8">
        <div className="p-4 bg-[#fff]/20 rounded-2xl border border-[#fff] text-[#5ba3e3]">
            {icon}
        </div>
        <span className="text-white/10 font-black text-6xl uppercase italic select-none">{number}</span>
    </div>
);

const DescriptionOne = ({ text }: { text: string }) => (
    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 md:mb-6">
        <p className="text-white text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-[#f1671a] pl-5 mt-4 normal-case tracking-normal">
            "{text}"
        </p>
    </h3>
);

const DescriptionList = ({ desc2, desc3 }: { desc2: string, desc3: string }) => (
    <div className="grid gap-4">
        {[desc2, desc3].map((text, i) => (
            <div
                key={i}
                className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-[#2C5378]/40 transition-all"
            >

                <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#f1671a] shadow-[0_0_10px_rgba(91,163,227,0.5)]" />


                <p className="text-white text-base md:text-[14px] leading-relaxed font-medium">
                    {text}
                </p>
            </div>
        ))}
    </div>
);

const CardFooter = ({ leftIcon, leftText, rightIcon }: { leftIcon: React.ReactNode, leftText: string, rightIcon: React.ReactNode }) => (
    <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-[#f1671a] text-[12px] font-bold uppercase tracking-widest">
            {leftIcon} {leftText}
        </div>
        <div className="text-[#f1671a]">{rightIcon}</div>
    </div>
);