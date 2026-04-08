import React from "react";
import Link from "next/link";
// Make sure you have your train icon svg or image imported.
// If you don't have one, I will provide a simplified inline SVG below for demonstration.
// Assuming your train icon is at /images/vintage-train.svg
// import VintageTrain from "/images/vintage-train.svg";

const VintageTrainSVG = () => (
    <svg viewBox="0 0 100 60" fill="currentColor" className="w-full h-auto text-[#0d1a2c] opacity-90">
        <path d="M10,40 L15,40 L15,35 L20,35 L20,30 L25,30 L25,25 L30,25 L30,20 L40,20 L40,25 L50,25 L50,30 L55,30 L55,35 L60,35 L60,40 L90,40 L90,45 L10,45 Z" />
        <circle cx="20" cy="50" r="5" fill="currentColor" />
        <circle cx="35" cy="50" r="5" fill="currentColor" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        <circle cx="65" cy="50" r="5" fill="currentColor" />
        <rect x="70" y="20" width="10" height="20" rx="2" fill="currentColor" />
        <path d="M75,15 L75,10 L80,10 L80,15 Z" />
    </svg>
);
// bg-[#ffffffa8]

const TicketSection = () => {
    return (
        <section className="dark:bg-darkmode pt-0 font-sans">
            <div className="container px-4">

                <div className="relative md:mx-auto mx-0 mt-10 md:mt-20 overflow-hidden lg:-mb-48 bg-[#ffffffa8]  border-1 border-[#fff] rounded-xl shadow-lg
                                [clip-path:polygon(30px_0%,calc(100%_-_30px)_0%,100%_30px,100%_calc(100%_-_30px),calc(100%_-_30px)_100%,30px_100%,0%_calc(100%_-_30px),0%_30px)]
                                before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/paper-texture.png')] before:opacity-20">


                    <div className="absolute top-0 left-0 h-full w-8 flex flex-col justify-between p-1 z-10">
                        <div className="w-6 h-6 bg-[#0d1a2c] rounded-full -ml-3"></div>
                        <div className="w-3 h-3 bg-[#0d1a2c] rounded-full -ml-1.5 opacity-50"></div>
                        <div className="w-6 h-6 bg-[#0d1a2c] rounded-full -ml-3"></div>
                        <div className="w-3 h-3 bg-[#0d1a2c] rounded-full -ml-1.5 opacity-50"></div>
                        <div className="w-6 h-6 bg-[#0d1a2c] rounded-full -ml-3"></div>
                        <div className="w-3 h-3 bg-[#0d1a2c] rounded-full -ml-1.5 opacity-50"></div>
                        <div className="w-6 h-6 bg-[#0d1a2c] rounded-full -ml-3"></div>
                    </div>


                    <div className="absolute top-0 -right-3 h-full w-8 flex flex-col justify-between p-1 z-10">
                        <div className="w-6 h-6 bg-[#0d1a2c] rounded-full -mr-3"></div>
                        <div className="w-3 h-3 bg-[#0d1a2c] rounded-full -mr-1.5 opacity-50"></div>
                        <div className="w-6 h-6 bg-[#0d1a2c] rounded-full -mr-3"></div>
                        <div className="w-3 h-3 bg-[#0d1a2c] rounded-full -mr-1.5 opacity-50"></div>
                        <div className="w-6 h-6 bg-[#0d1a2c] rounded-full -mr-3"></div>
                        <div className="w-3 h-3 bg-[#0d1a2c] rounded-full -mr-1.5 opacity-50"></div>
                        <div className="w-6 h-6 bg-[#0d1a2c] rounded-full -mr-3"></div>
                    </div>



                    <div className="flex md:flex-row flex-col">


                        <div className="md:w-3/4 w-full md:p-12 p-8 md:pr-4 relative border-r-2 border-dashed ">


                            <div className="absolute top-4 left-10 right-10 border-t border-black/10 dark:border-black/10 h-1"></div>

                            <div className="flex flex-col items-center text-center">

                                <span className="uppercase font-serif font-bold tracking-widest text-[12px] mb-4 border-b-2 border-[#0d1a2c] pb-1 text-[#0d1a2c]">
                                    Special Edition • 2026
                                </span>


                                <h2 className="sm:text-5xl text-2xl leading-tight font-black uppercase italic tracking-tighter text-[#0d1a2c] max-w-2xl mb-8">
                                    Become a Part of the <br />
                                    <span className="bg-[#0d1a2c] text-[#fff] px-2">Digital Evolution!</span>
                                </h2>


                                <Link
                                    href="/"
                                    className="group relative inline-block border-2 border-[#0d1a2c] bg-transparent p-1 transition-transform hover:scale-105"
                                >
                                    <span className="block border border-[#0d1a2c] py-3 px-10 uppercase font-bold text-[#0d1a2c] group-hover:bg-[#0d1a2c] group-hover:text-[#fff] transition-colors">
                                        subscription start @999
                                    </span>
                                </Link>


                                <p className="mt-8 text-xs uppercase font-medium tracking-widest opacity-80 text-[#0d1a2c]">
                                    - Limited Deal • Grab soon -
                                </p>
                            </div>


                            <div className="absolute bottom-4 left-10 right-10 border-b border-black/10 dark:border-black/10 h-1"></div>


                            <div className="absolute left-8 bottom-8 w-24 md:w-32 opacity-80">
                                <VintageTrainSVG />
                            </div>
                        </div>



                        <div className="md:w-1/4 w-full md:p-12 p-8 md:pl-4 bg-[#CC9A78] text-[#0d1a2c]">
                            <div className="flex flex-col items-center h-full justify-between">

                                {/* Top Section: Subscription ID / Control */}
                                <div className="text-center w-full">
                                    <div className="border-b-2 border-[#0d1a2c] pb-1 mb-2">
                                        <p className="uppercase text-[10px] font-bold tracking-[0.2em]">Press Pass</p>
                                    </div>
                                    <p className="uppercase text-[11px] font-black tracking-widest">ID: #2026-SUB</p>
                                </div>


                                <div className="flex items-center gap-6 my-8 md:my-0">
                                    <div className="text-center border-r border-[#432C1F]/30 pr-4">
                                        <p className="text-[9px] uppercase font-bold opacity-70 leading-none mb-1">Type</p>
                                        <p className="text-xl font-black leading-none">VIP</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[9px] uppercase font-bold opacity-70 leading-none mb-1">Access</p>
                                        <p className="text-sm font-black leading-none">DAILY NEWS</p>
                                    </div>
                                </div>


                                <div className="mt-auto text-center w-full">
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[12px]  font-bold ">Buy for just</p>
                                        <p className="text-3xl font-black leading-none italic">@999.00</p>
                                    </div>

                                    <p className="text-[10px] uppercase font-bold tracking-widest mt-2 border-t border-[#0d1a2c] pt-1">
                                        Annual Subscription
                                    </p>
                                    <p className="text-[8px] uppercase mt-1 opacity-60">Non-Transferable</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TicketSection;