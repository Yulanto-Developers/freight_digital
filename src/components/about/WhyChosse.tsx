import React from 'react';
import { ShieldCheck, Target, Layers, Users, Lightbulb, Compass } from 'lucide-react';

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// 1. Why Choose Us Sub-Component
function WhyChooseUs() {
    const features: FeatureProps[] = [
        {
            icon: <Target className="w-6 h-6 text-[#f1671a] group-hover:text-white" />,
            title: "Results-Driven Approach",
            description: "Focused on generating qualified leads and measurable business growth."
        },
        {
            icon: <Layers className="w-6 h-6 text-[#f1671a] group-hover:text-white" />,
            title: "Industry Specialized",
            description: "Dedicated exclusively to the freight forwarder and logistics sector."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-[#f1671a] group-hover:text-white" />,
            title: "Innovative Marketing Solutions",
            description: "Modern digital strategies tailored to logistics businesses."
        },
        {
            icon: <Users className="w-6 h-6 text-[#f1671a] group-hover:text-white" />,
            title: "Client-Focused Service",
            description: "Customized solutions aligned with your business objectives."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-[#f1671a] group-hover:text-white" />,
            title: "Logistics Industry Expertise",
            description: "Deep understanding of freight forwarding, shipping, and supply chain operations."
        }
    ];

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#fff] uppercase bg-[#58595b] border-l-4 border-[#f1671a]">
                   Our Values
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#58595b] tracking-tight">
                    Why Choose Freight Digital
                </h3>
                <div className="w-16 h-1 bg-[#f1671a] mx-auto mt-4 rounded"></div>
            </div>

            {/* Grid Layout - Scales smoothly from mobile to desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                    >
                        {/* Icon Wrapper with faint primary color background tint */}
                        <div className="w-12 h-12 rounded-xl bg-[#f1671a]/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#f1671a]">
                            <div className="transition-colors duration-300 flex items-center justify-center">
                                {feature.icon}
                            </div>
                        </div>

                        {/* Title using the secondary brand color */}
                        <h4 className="text-xl font-bold text-[#58595b] mb-3 group-hover:text-[#f1671a] transition-colors duration-200">
                            {feature.title}
                        </h4>

                        {/* Description text */}
                        <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                            {feature.description}
                        </p>

                        {/* Subtle bottom border accent that triggers on card hover */}
                        <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#f1671a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" />
                    </div>
                ))}
            </div>
        </section>
    );
}

// 2. Our Commitment Sub-Component
function OurCommitment() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto bg-white ">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-sm">

                {/* Subtle Decorative Background Element using your primary color */}
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#f1671a]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                    {/* Left Column: Heading Block (5 Cols) */}
                    <div className="lg:col-span-5 space-y-3">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#fff] uppercase bg-[#58595b] border-l-4 border-[#f1671a]">
                            Our Commitment
                        </span>

                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#58595b] tracking-tight leading-tight">
                            100% Logistics <br />
                            <span className="text-[#f1671a]">Focused.</span>
                        </h3>
                        <div className="w-12 h-1 bg-[#f1671a] rounded mt-4" />
                    </div>

                    {/* Right Column: Icon & Content (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col sm:flex-row gap-5 items-start bg-white p-6 md:p-8 rounded-2xl border border-gray-100/80 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-[#f1671a]/10 flex items-center justify-center shrink-0">
                            <Compass className="w-6 h-6 text-[#f1671a]" />
                        </div>

                        <div className="space-y-4">
                            <p className="text-[#58595b] text-lg font-medium leading-relaxed">
                                At Freight Digital, logistics is not just another industry we serve—it's our sole focus.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base">
                                We combine industry knowledge with digital marketing expertise to help logistics companies build stronger brands, increase visibility, and generate sustainable growth.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Main component combining both into a single page stack
export default function FreightDigitalInfo() {
    return (
        <div className="space-y-4 bg-white">
            <WhyChooseUs />
            <OurCommitment />
        </div>
    );
}