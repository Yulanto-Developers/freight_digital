"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe2, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GrowthSection() {
    return (
        <section className="relative py-24 bg-[#080d17] overflow-hidden">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2C5378]/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                  
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-[#5ba3e3] mb-6 uppercase tracking-widest text-xs font-bold">
                            <Zap size={16} fill="currentColor" /> Scale Your Operations
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 uppercase italic ">
                            Let’s <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-[#2C5378]">
                                Grow Your
                            </span> <br />
                            Logistics Business
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                            At <span className="text-white font-bold">Freight Digital</span>, we believe every logistics company deserves strong online visibility and access to new business opportunities.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href='/contact'>
                                <button className="px-8 py-4 bg-[#2C5378] hover:bg-blue-600 text-white font-black uppercase tracking-widest rounded-full transition-all flex items-center gap-3 group">
                                    Start Growing <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </Link>
                            <Link href='/service'>
                                <button className="px-8 py-4 border border-slate-700 text-white font-black uppercase tracking-widest rounded-full hover:bg-white/5 transition-all">
                                    Our Strategies
                                </button>
                            </Link>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                           
                            <div className="mt-12 p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] hover:border-[#2C5378]/50 transition-colors group">
                                <Globe2 className="text-[#5ba3e3] mb-4 group-hover:scale-110 transition-transform" size={40} />
                                <h4 className="text-white font-bold uppercase mb-2">Global Access</h4>
                                <p className="text-slate-500 text-sm">Connect with global trade partners instantly.</p>
                            </div>

                           
                            <div className="p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] hover:border-[#2C5378]/50 transition-colors group">
                                <TrendingUp className="text-[#5ba3e3] mb-4 group-hover:scale-110 transition-transform" size={40} />
                                <h4 className="text-white font-bold uppercase mb-2">High Visibility</h4>
                                <p className="text-slate-500 text-sm">Be the first choice for freight forwarders.</p>
                            </div>
                        </div>

                       
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2C5378] rounded-full flex items-center justify-center border-4 border-[#080d17] z-20 shadow-2xl animate-bounce">
                            <span className="text-white text-[13px] font-black uppercase tracking-tighter text-center leading-none">
                                10x <br /> Digital <br /> Impact
                            </span>
                        </div>
                    </motion.div>
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 p-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                >
                    <p className="text-slate-400 max-w-2xl text-md italic">
                        "Our team is committed to helping freight and logistics companies build a powerful digital presence and grow their business in an increasingly connected global marketplace."
                    </p>
                    <div className="flex gap-8">
                        <div>
                            <div className="text-3xl font-black text-white">99%</div>
                            <div className="text-[10px] uppercase text-[#5ba3e3] font-bold tracking-widest">Client Success</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-white">24/7</div>
                            <div className="text-[10px] uppercase text-[#5ba3e3] font-bold tracking-widest">Global Reach</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}