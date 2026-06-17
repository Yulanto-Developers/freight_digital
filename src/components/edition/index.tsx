import React from 'react';
import { Tag, Megaphone, IdCardLanyard, Users, Globe, CalendarDays, Newspaper } from 'lucide-react';

type Cardobj = {
    icon: React.ReactNode;
    title: string;
    desc: string;
    num: string;
};

function Edition() {
    const card: Cardobj[] = [
        {
            icon: <Megaphone className="w-5 h-5 text-white" />,
            title: 'Extended Industry Visibility',
            desc: 'Your company receives two weeks of featured promotional exposure across the platform after activation.',
            num: '01'
        },
        {
            icon: <IdCardLanyard className="w-5 h-5 text-white" />,
            title: 'Recruitment Promotion Access',
            desc: 'One recruitment advertisement placement included with your annual access.',
            num: '02'
        },
        {
            icon: <Users className="w-5 h-5 text-white" />,
            title: 'Dedicated Hiring Assistance',
            desc: 'Additional recruitment support and coordination available throughout the annual access period.',
            num: '03'
        },
        {
            icon: <Globe className="w-5 h-5 text-white" />,
            title: 'Industry Access',
            desc: 'Connect with freight forwarders, logistics companies, NVOCCs, airlines, and trade professionals worldwide.',
            num: '04'
        }
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 space-y-16">

           
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-6 text-center">
                <div className="space-y-2">
                    <h1 className="text-orange-600 tracking-widest font-black text-4xl sm:text-5xl uppercase">
                        LIMITED ANNUAL ACCESS
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-500 font-bold tracking-wide uppercase">
                        FOR FREIGHT PROFESSIONALS
                    </p>
                </div>

                <div className="w-24 border-b-2 border-slate-200 my-2"></div>

                <div>
                    <p className="text-slate-800 text-lg sm:text-xl font-medium tracking-wide">
                        Join The Platform Where Freight{' '}
                        <span className="text-orange-600 font-bold">Companies Connect</span>
                    </p>
                </div>

                <div className="pt-2">
                    <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-slate-600 font-semibold text-base sm:text-lg">
                        <li className="flex items-center gap-2">
                            <span className="text-orange-500">•</span> Industry Exposure
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-orange-500">•</span> Business Growth
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-orange-500">•</span> Global Reach
                        </li>
                    </ul>
                </div>
            </div>

            
            <div className="p-6 sm:p-8 bg-black rounded-xl max-w-5xl mx-auto shadow-xl text-stone-300">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 text-center sm:text-left">
                    <div className="flex items-center gap-3 text-amber-600 font-bold tracking-wide">
                        <Tag className="w-5 h-5" />
                        <span className="uppercase text-sm sm:text-base">Limited Enrollment Period</span>
                    </div>

                    <div className="hidden sm:block border-l border-stone-800 h-16"></div>

                    <div className="flex items-baseline gap-2 justify-center">
                        <span className="font-medium text-stone-400 text-lg">AED</span>
                        <span className="font-black text-white text-5xl sm:text-6xl tracking-tight">299</span>
                    </div>

                    <div className="hidden sm:block border-l border-stone-800 h-16"></div>

                    <div className="flex flex-col items-center sm:items-end gap-3">
                        <span className="text-stone-400 font-semibold tracking-wide uppercase text-sm sm:text-base">
                            Annual Subscription
                        </span>
                        <button className="text-white py-2 px-6 bg-amber-600 hover:bg-amber-700 font-bold text-sm rounded transition-colors duration-200 uppercase tracking-wider shadow-md">
                            Get Access
                        </button>
                    </div>
                </div>
                <p className="text-center text-sm text-stone-400 pt-6 mt-6 border-t border-stone-900 max-w-xl mx-auto">
                    Secure your annual access at a preferred rate for a limited enrollment period.
                </p>
            </div>

           
            <div className="max-w-6xl mx-auto flex items-center">
                <div className="flex-grow h-[1px] bg-stone-300"></div>
                <h2 className="px-4 sm:px-6 text-xl sm:text-2xl font-black tracking-wider text-stone-900 uppercase whitespace-nowrap">
                    Your Annual Access Includes
                </h2>
                <div className="flex-grow h-[1px] bg-stone-300"></div>
            </div>

         
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {card.map((item, index) => (
                        <div
                            key={index}
                            className="bg-stone-50/60 rounded-2xl p-6 border border-stone-200/80 shadow-sm flex flex-col items-center text-center group hover:border-orange-500/30 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <div className="flex flex-col flex-grow">
                                <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-tight min-h-[48px] flex items-center justify-center">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                                    {item.desc}
                                </p>
                                <span className="text-base font-bold tracking-widest text-amber-800 uppercase mt-5">
                                    {item.num}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

           
            <div className="p-6 sm:p-8 bg-black rounded-xl max-w-5xl mx-auto shadow-xl text-stone-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">

                    {/* Left Column: Schedule & Focus */}
                    <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                        <div className="p-3 bg-amber-600/10 rounded-lg text-amber-500">
                            <CalendarDays className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col text-center md:text-left">
                            <span className="text-amber-500 font-extrabold text-sm uppercase tracking-wider">
                                Monday - Friday
                            </span>
                            <span className="uppercase text-white font-black text-base sm:text-lg tracking-tight mt-0.5">
                                Access to Industry Insights
                            </span>
                        </div>
                    </div>

                    {/* Vertical Divider (Hidden on mobile) */}
                    <div className="hidden md:block border-l border-amber-600/30 h-16"></div>

                    {/* Right Column: Detailed Description with Newspaper icon */}
                    <div className="flex items-center justify-between gap-6 bg-stone-900/40 p-4 rounded-xl border border-stone-800/50 w-full md:max-w-xl">
                        <p className="text-sm text-stone-400 leading-relaxed text-center sm:text-left">
                            Stay informed with the latest logistics news, market trends, and industry updates—accessible Monday to Friday.
                        </p>
                        <div className="text-stone-300 shrink-0 hidden sm:block">
                            {/* Updated to Newspaper icon */}
                            <Newspaper className="w-7 h-7 stroke-[1.5]" />
                        </div>
                    </div>

                </div>
            </div>

         
            <div className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto space-y-6 pt-4">
                <div className="space-y-1">
                    <p className="text-slate-900 font-black text-xl sm:text-2xl tracking-widest uppercase">
                        Position Your Business
                    </p>
                    <p className="text-[#f1671a] font-black text-2xl sm:text-3xl tracking-tight uppercase">
                        In Front of the Freight Industry
                    </p>
                </div>

                <button className="bg-[#f1671a] hover:bg-[#d95610] text-white font-bold text-sm sm:text-base py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-widest active:scale-95">
                    Activate Access
                </button>
            </div>

        </div>
    );
}

export default Edition;