"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MissionVision from './Mission';

function AboutSec() {
    return (
        <section className="py-24 bg-[#0f172a] overflow-hidden relative">
          
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2C5378]/5 -skew-x-12 translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    
                    {/* Left Content Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:w-[55%] space-y-8"
                    >
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#000] uppercase bg-[#fff]/50 border-l-4 border-[#2C5378]">
                                About Us – Freight Digital
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Who We <span className="text-[#2C5378] italic">Are</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-6">
                            <p className="text-xl text-slate-300 leading-relaxed font-light border-l border-slate-700 pl-6">
                                Freight Digital is a specialized digital marketing agency dedicated <span className="text-white font-medium">exclusively</span> to the freight forwarding and logistics industry.
                            </p>
                            
                            <div className="text-slate-400 leading-relaxed space-y-4 text-lg">
                                <p>
                                    We help logistics companies strengthen their digital presence, attract new clients, and grow their business through targeted online marketing strategies.
                                </p>
                                <p>
                                    Unlike general marketing agencies, we understand the nuances of <span className="text-slate-200 uppercase tracking-wide text-sm font-bold">Carriers, Airlines, and NVOCCs.</span>
                                </p>
                            </div>
                        </div>


                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2C5378]" />
                                <span className="text-sm text-slate-300 font-semibold uppercase tracking-wider">Specialized</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2C5378]" />
                                <span className="text-sm text-slate-300 font-semibold uppercase tracking-wider">Results Driven</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2C5378]" />
                                <span className="text-sm text-slate-300 font-semibold uppercase tracking-wider">Specialized</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2C5378]" />
                                <span className="text-sm text-slate-300 font-semibold uppercase tracking-wider">Results Driven</span>
                            </div>
                        </div>
                    </motion.div>

                   
                    <motion.div 
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-[40%] relative"
                    >
                       
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700"
                        >
                            <Image 
                                src="/images/about/about-1.jpg" 
                                alt="Logistics Professionals"
                                width={500}
                                height={600}
                                className="object-contain hover:scale-105 transition-transform duration-700"
                            />
                            
                           
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-slate-900/60 backdrop-blur-md border-t border-white/10">
                                <p className="text-white font-bold text-center uppercase tracking-widest text-xs">
                                    Global Supply Chain Experts
                                </p>
                            </div>
                        </motion.div>

                      
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-2 -left-6 md:-left-12 z-20 bg-gradient-to-br from-[#2C5378] to-[#1a3a57] text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center min-w-[140px]"
                        >
                            <span className="text-4xl font-black">100%</span>
                            <span className="text-[10px] text-center uppercase font-bold tracking-[0.2em] text-blue-200 mt-1">
                                Logistics<br/>Focused
                            </span>
                        </motion.div>

                       
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20" 
                             style={{ backgroundImage: 'radial-gradient(#2C5378 2px, transparent 2px)', backgroundSize: '15px 15px' }} 
                        />
                    </motion.div>

                </div>
            </div>

            <div>
                <MissionVision/>
            </div>
        </section>
    );
}

export default AboutSec;