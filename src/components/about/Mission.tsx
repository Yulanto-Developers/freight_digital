"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Rotate3d, ArrowRightLeft, ShieldCheck, Globe } from 'lucide-react';

type MissionData = {
    title: string;
    description1: string;
    description2: string;
    description3: string;
};

export default function MissionVision() {
    const [isFlipped, setIsFlipped] = useState(false);

    const data: MissionData[] = [
        {
            title: 'Our Mission',
            description1: 'At Freight Digital, our mission is to help freight forwarding and logistics companies grow their business through powerful and effective digital marketing strategies.',
            description2: 'We aim to improve the online presence of logistics companies by providing specialized services such as SEO and professional networking strategies.',
            description3: 'Our focus is to deliver marketing solutions that create real business opportunities for freight forwarders and logistics service providers.',
        },
        {
            title: 'Our Vision',
            description1: 'Our vision is to become a trusted digital marketing partner for freight forwarding and logistics companies worldwide.',
            description2: 'We strive to support logistics businesses in adapting to the digital era by helping them build strong online visibility and connect with global trade partners.',
            description3: 'Freight Digital aims to be recognized as a specialized marketing agency that helps companies achieve long-term growth through digital innovation.',
        }
    ];

    return (
        <section className="py-20  flex flex-col items-center justify-center overflow-hidden relative min-h-screen">

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2C5378]/10 rounded-full blur-[120px] pointer-events-none" />
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
                                    className="absolute inset-0 bg-[#2C5378] rounded-lg -z-10 shadow-lg"
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
                                    className="absolute inset-0 bg-[#2C5378] rounded-lg -z-10 shadow-lg"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase">
                        Our <span className="text-[#2C5378]">Goals</span>
                    </h2>
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
                            className="absolute inset-0 w-full h-full bg-[#0f172a] border-2 border-slate-800 rounded-[3rem] p-8 md:p-14 flex flex-col justify-between shadow-2xl overflow-hidden"
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
                            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1e293b] to-[#080d17] border-2 border-[#2C5378]/50 rounded-[3rem] p-8 md:p-14 flex flex-col justify-between shadow-2xl overflow-hidden"
                            style={{
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                            }}
                        >

                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235ba3e3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}
                            />
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#2C5378]/20 rounded-full blur-[80px]" />

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
                                        <div className="w-2 h-2 rounded-full bg-[#2C5378]" />
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
    );
}



const CardHeader = ({ icon, number, title }: { icon: React.ReactNode, number: string, title: string }) => (
    <div className="flex justify-between items-start mb-6 md:mb-8">
        <div className="p-4 bg-[#2C5378]/20 rounded-2xl border border-[#2C5378]/50 text-[#5ba3e3]">
            {icon}
        </div>
        <span className="text-white/10 font-black text-6xl uppercase italic select-none">{number}</span>
    </div>
);

const DescriptionOne = ({ text }: { text: string }) => (
    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 md:mb-6">
        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-[#2C5378] pl-5 mt-4 normal-case tracking-normal">
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

                <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#5ba3e3] shadow-[0_0_10px_rgba(91,163,227,0.5)]" />


                <p className="text-slate-300 text-base md:text-[14px] leading-relaxed font-medium">
                    {text}
                </p>
            </div>
        ))}
    </div>
);

const CardFooter = ({ leftIcon, leftText, rightIcon }: { leftIcon: React.ReactNode, leftText: string, rightIcon: React.ReactNode }) => (
    <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-slate-500 text-[12px] font-bold uppercase tracking-widest">
            {leftIcon} {leftText}
        </div>
        <div className="text-slate-700">{rightIcon}</div>
    </div>
);