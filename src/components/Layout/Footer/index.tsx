// import React, { FC } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Footer: FC = () => {
//     return (
//         <footer className="bg-[#f1651ae1]">
//             <div className="container">
//                 <div className="flex items-center justify-between flex-wrap md:pt-44 pt-16 md:pb-20 pb-6 border-b border-solid border-[#f1671a]">
//                     <div>
//                         <Link href="/">
//                             <Image
//                                 src="/images/footer/Logo-white-1.png"
//                                 width={0}
//                                 height={0}
//                                 quality={100}
//                                 layout="responsive"
//                                 style={{ width: '100px', height: '100px' }}

//                                 alt="Footer-logo"
//                             />
//                         </Link>
//                         <div className="space-y-2">
//                             <h3 className="text-lg font-bold tracking-wider uppercase text-white">
//                                 Freight Digital FZC LLC
//                             </h3>
//                             <p className="text-white/70 text-sm font-light leading-relaxed max-w-sm">
//                                 Business Centre, Sharjah Publishing City Free Zone, <br />
//                                 Sharjah, United Arab Emirates
//                             </p>
//                         </div>
//                     </div>
//                     <div>
//                         <ul className="flex flex-col items-center justify-start flex-wrap md:gap-30 gap-3 md:py-0 py-5">
//                             <li className="hover:text-[#58595b] sm:text-lg text-md font-normal transition-all duration-0.4s text-white">
//                                 <Link href="/">Home</Link>
//                             </li>
//                             <li className="hover:text-[#58595b] sm:text-lg text-md font-normal transition-all duration-0.4s text-white">
//                                 <Link href="/about">About Us</Link>
//                             </li>
//                             <li className="hover:text-[#f1671a] sm:text-lg text-md font-normal transition-all duration-0.4s text-white">
//                                 <Link href="/services">Our Services</Link>
//                             </li>
//                             <li className="hover:text-[#58595b] sm:text-lg text-md font-normal transition-all duration-0.4s text-white">
//                                 <Link href="/adverise">Advertise With Us</Link>
//                             </li>
//                             <li className="hover:text-[#58595b] sm:text-lg text-md font-normal transition-all duration-0.4s text-white">
//                                 <Link href="/contact">Contact Us</Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <ul className="flex items-center gap-5">
//                             <li>
//                                 <Link href="/" className="group">
//                                     <svg
//                                         width="26"
//                                         height="27"
//                                         fill="#fff"
//                                         viewBox="0 0 26 27"
//                                         className="group-hover:fill-[#58595b]"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <g clipPath="url(#clip0_7_993)">
//                                             <path d="M23.8293 1.63855H2.14412C1.40159 1.639 0.799656 2.24123 0.799805 2.98405V24.6692C0.800251 25.4118 1.40248 26.0137 2.14531 26.0135H13.8204V16.5873H10.6545V12.8977H13.8204V10.1824C13.8204 7.03366 15.7427 5.31979 18.5516 5.31979C19.8969 5.31979 21.053 5.42007 21.39 5.46485V8.75586H19.4531C17.9249 8.75586 17.629 9.48202 17.629 10.5478V12.8977H21.2829L20.8068 16.5873H17.629V26.0135H23.8293C24.5723 26.0137 25.1747 25.4116 25.1748 24.6686C25.1748 24.6685 25.1748 24.6683 25.1748 24.668V2.98286C25.1745 2.24034 24.5721 1.6384 23.8293 1.63855Z" />
//                                         </g>
//                                         <defs>
//                                             <clipPath id="clip0_7_993">
//                                                 <rect
//                                                     width="26"
//                                                     height="26"
//                                                     fill="white"
//                                                     transform="translate(0 0.838745)"
//                                                 />
//                                             </clipPath>
//                                         </defs>
//                                     </svg>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/" className="group">
//                                     <svg
//                                         width="26"
//                                         height="27"
//                                         viewBox="0 0 26 27"
//                                         fill="#fff"
//                                         className="group-hover:fill-[#58595b]"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <g clipPath="url(#clip0_7_995)">
//                                             <path d="M24.1249 0.838745H1.87514C0.839478 0.838745 0 1.67822 0 2.71388V24.9636C0 25.9993 0.839478 26.8387 1.87514 26.8387H24.1249C25.1605 26.8387 26 25.9993 26 24.9636V2.71388C26 1.67822 25.1605 0.838745 24.1249 0.838745V0.838745ZM18.9357 10.9748C18.9414 11.1027 18.9442 11.2312 18.9442 11.3604C18.9442 15.3033 15.9429 19.85 10.4544 19.8502H10.4546H10.4544C8.76929 19.8502 7.20122 19.3562 5.88071 18.5098C6.11418 18.5374 6.35182 18.5511 6.59244 18.5511C7.99051 18.5511 9.2771 18.0742 10.2985 17.2738C8.99225 17.2496 7.89093 16.3869 7.51086 15.2013C7.69276 15.2362 7.87982 15.2553 8.07164 15.2553C8.34399 15.2553 8.60782 15.2186 8.85855 15.1501C7.49321 14.8768 6.46469 13.6701 6.46469 12.2253C6.46469 12.2118 6.46469 12.1997 6.46509 12.1872C6.86717 12.4107 7.32698 12.5452 7.81654 12.5603C7.01535 12.0257 6.48869 11.1118 6.48869 10.0766C6.48869 9.52988 6.63647 9.0177 6.89276 8.57674C8.36423 10.3822 10.5633 11.5697 13.0432 11.6944C12.9921 11.4758 12.9657 11.2481 12.9657 11.014C12.9657 9.36682 14.3021 8.03044 15.9499 8.03044C16.8082 8.03044 17.5834 8.39325 18.1279 8.97327C18.8077 8.83917 19.446 8.59082 20.0227 8.24904C19.7995 8.9455 19.3266 9.52988 18.7105 9.89943C19.3141 9.82722 19.8894 9.66714 20.424 9.4295C20.0247 10.028 19.5182 10.5536 18.9357 10.9748Z" />
//                                         </g>
//                                         <defs>
//                                             <clipPath id="clip0_7_995">
//                                                 <rect
//                                                     width="26"
//                                                     height="26"
//                                                     fill="white"
//                                                     transform="translate(0 0.838745)"
//                                                 />
//                                             </clipPath>
//                                         </defs>
//                                     </svg>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/" className="group">
//                                     <svg
//                                         width="26"
//                                         height="28"
//                                         viewBox="0 0 26 28"
//                                         fill="#fff"
//                                         className="group-hover:fill-[#58595b]"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <g clipPath="url(#clip0_7_997)">
//                                             <path d="M24.1249 0H1.87514C0.839478 0 0 0.893637 0 1.99611V25.6813C0 26.7838 0.839478 27.6774 1.87514 27.6774H24.1249C25.1605 27.6774 26 26.7838 26 25.6813V1.99611C26 0.893637 25.1605 0 24.1249 0ZM9.22235 20.9202H6.05626V10.7805H9.22235V20.9202ZM7.6394 9.39586H7.61877C6.55634 9.39586 5.8692 8.61731 5.8692 7.64427C5.8692 6.64928 6.57736 5.89226 7.66043 5.89226C8.7435 5.89226 9.41 6.64928 9.43063 7.64427C9.43063 8.61731 8.7435 9.39586 7.6394 9.39586ZM20.6386 20.9202H17.4729V15.4957C17.4729 14.1324 17.0145 13.2027 15.8689 13.2027C14.9944 13.2027 14.4734 13.8298 14.2445 14.4352C14.1608 14.6519 14.1404 14.9547 14.1404 15.2577V20.9202H10.9745C10.9745 20.9202 11.016 11.7317 10.9745 10.7805H14.1404V12.2161C14.5611 11.5252 15.3139 10.5425 16.9937 10.5425C19.0767 10.5425 20.6386 11.9917 20.6386 15.1061V20.9202Z" />
//                                         </g>
//                                         <defs>
//                                             <clipPath id="clip0_7_997">
//                                                 <rect width="26" height="27.6774" fill="white" />
//                                             </clipPath>
//                                         </defs>
//                                     </svg>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="flex justify-between items-center py-8">
//                     <div className="">
//                         <p className="text-base font-normal text-white">
//                             © All Rights Reserved by {' '}
//                             <Link href='/'>
//                                 Feright Digital
//                             </Link>
//                         </p>

//                     </div>
//                     <div className=" items-center gap-6">
//                         <p className="text-base font-normal text-white">
//                             Designed by <a href="https://yulanto.com" target="blank"><span className="text-[#58595b]">Yulanto Web Creations</span></a>
//                         </p>

//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;





import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer: FC = () => {
    return (
        <footer className="bg-[#f1671a] text-white antialiased">
            <div className="container pt-10 mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:pt-24 pt-16 md:pb-5  border-b border-white/20">

                    <div className="flex flex-col gap-4 ">
                        <Link href="/" className="inline-block self-start transition-opacity hover:opacity-90">
                            <Image
                                src="/images/footer/Logo-white-1.png"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                style={{ width: '80px', height: '80px' }}

                                alt="Footer-logo"
                            />
                        </Link>
                        <div className="space-y-2">

                            <p className="text-white/70 text-md text-justify font-light leading-relaxed max-w-sm">
                                Freight Digital is a specialized digital marketing agency dedicated exclusively to helping logistics companies build strong brands, increase visibility, and drive sustainable growth.
                            </p>
                        </div>
                        <div className="pt-2">
                            <ul className="flex items-center gap-4">

                                <li>
                                    <Link href="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#f1651a] transition-all duration-300 group" aria-label="Facebook">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 26 27"
                                            className="text-white group-hover:text-[#f1651a] transition-colors"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_7_993)">
                                                <path d="M23.8293 1.63855H2.14412C1.40159 1.639 0.799656 2.24123 0.799805 2.98405V24.6692C0.800251 25.4118 1.40248 26.0137 2.14531 26.0135H13.8204V16.5873H10.6545V12.8977H13.8204V10.1824C13.8204 7.03366 15.7427 5.31979 18.5516 5.31979C19.8969 5.31979 21.053 5.42007 21.39 5.46485V8.75586H19.4531C17.9249 8.75586 17.629 9.48202 17.629 10.5478V12.8977H21.2829L20.8068 16.5873H17.629V26.0135H23.8293C24.5723 26.0137 25.1747 25.4116 25.1748 24.6686C25.1748 24.6685 25.1748 24.6683 25.1748 24.668V2.98286C25.1745 2.24034 24.5721 1.6384 23.8293 1.63855Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7_993">
                                                    <rect width="26" height="26" fill="white" transform="translate(0 0.838745)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#f1651a] transition-all duration-300 group" aria-label="Twitter">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 26 27"
                                            fill="currentColor"
                                            className="text-white group-hover:text-[#f1651a] transition-colors"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_7_995)">
                                                <path d="M24.1249 0.838745H1.87514C0.839478 0.838745 0 1.67822 0 2.71388V24.9636C0 25.9993 0.839478 26.8387 1.87514 26.8387H24.1249C25.1605 26.8387 26 25.9993 26 24.9636V2.71388C26 1.67822 25.1605 0.838745 24.1249 0.838745V0.838745ZM18.9357 10.9748C18.9414 11.1027 18.9442 11.2312 18.9442 11.3604C18.9442 15.3033 15.9429 19.85 10.4544 19.8502H10.4546H10.4544C8.76929 19.8502 7.20122 19.3562 5.88071 18.5098C6.11418 18.5374 6.35182 18.5511 6.59244 18.5511C7.99051 18.5511 9.2771 18.0742 10.2985 17.2738C8.99225 17.2496 7.89093 16.3869 7.51086 15.2013C7.69276 15.2362 7.87982 15.2553 8.07164 15.2553C8.34399 15.2553 8.60782 15.2186 8.85855 15.1501C7.49321 14.8768 6.46469 13.6701 6.46469 12.2253C6.46469 12.2118 6.46469 12.1997 6.46509 12.1872C6.86717 12.4107 7.32698 12.5452 7.81654 12.5603C7.01535 12.0257 6.48869 11.1118 6.48869 10.0766C6.48869 9.52988 6.63647 9.0177 6.89276 8.57674C8.36423 10.3822 10.5633 11.5697 13.0432 11.6944C12.9921 11.4758 12.9657 11.2481 12.9657 11.014C12.9657 9.36682 14.3021 8.03044 15.9499 8.03044C16.8082 8.03044 17.5834 8.39325 18.1279 8.97327C18.8077 8.83917 19.446 8.59082 20.0227 8.24904C19.7995 8.9455 19.3266 9.52988 18.7105 9.89943C19.3141 9.82722 19.8894 9.66714 20.424 9.4295C20.0247 10.028 19.5182 10.5536 18.9357 10.9748Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7_995">
                                                    <rect width="26" height="26" fill="white" transform="translate(0 0.838745)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#f1651a] transition-all duration-300 group" aria-label="LinkedIn">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 26 28"
                                            fill="currentColor"
                                            className="text-white group-hover:text-[#f1651a] transition-colors"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_7_997)">
                                                <path d="M24.1249 0H1.87514C0.839478 0 0 0.893637 0 1.99611V25.6813C0 26.7838 0.839478 27.6774 1.87514 27.6774H24.1249C25.1605 27.6774 26 26.7838 26 25.6813V1.99611C26 0.893637 25.1605 0 24.1249 0ZM9.22235 20.9202H6.05626V10.7805H9.22235V20.9202ZM7.6394 9.39586H7.61877C6.55634 9.39586 5.8692 8.61731 5.8692 7.64427C5.8692 6.64928 6.57736 5.89226 7.66043 5.89226C8.7435 5.89226 9.41 6.64928 9.43063 7.64427C9.43063 8.61731 8.7435 9.39586 7.6394 9.39586ZM20.6386 20.9202H17.4729V15.4957C17.4729 14.1324 17.0145 13.2027 15.8689 13.2027C14.9944 13.2027 14.4734 13.8298 14.2445 14.4352C14.1608 14.6519 14.1404 14.9547 14.1404 15.2577V20.9202H10.9745C10.9745 20.9202 11.016 11.7317 10.9745 10.7805H14.1404V12.2161C14.5611 11.5252 15.3139 10.5425 16.9937 10.5425C19.0767 10.5425 20.6386 11.9917 20.6386 15.1061V20.9202Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7_997">
                                                    <rect width="26" height="27.6774" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="lg:border-l lg:border-white/10 lg:pl-12 flex flex-col justify-start">
                        <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-5">
                            {["Home", "About Us", "Our Services", "Advertise With Us", "Contact Us"].map((item) => {
                                const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`;
                                return (
                                    <li key={item} className="transform transition-transform duration-200 hover:translate-x-1">
                                        <Link href={path} className="text-white/80 hover:text-white text-base font-normal tracking-wide transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Column 3: Contact details & Social Connect */}
                    <div className="lg:border-l lg:border-white/10 lg:pl-12 flex flex-col justify-between gap-6">
                        <div className="space-y-4">
                            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
                                Direct Contact
                            </h4>

                            {/* Phone Section */}
                            <div className="flex gap-3 items-start text-base text-white/90">
                                <Phone className="w-4 h-4 text-white/50 mt-1 shrink-0" />
                                <div>
                                    <span className="text-white/90 text-sm block font-medium uppercase tracking-wider mb-0.5">
                                        Phone
                                    </span>
                                    <a href="tel:+971561473934" className="hover:underline font-medium tracking-wide block">
                                        +971 56 1473934
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start text-base text-white/90">
                                <Mail className="w-4 h-4 text-white/50 mt-1 shrink-0" />
                                <div>
                                    <span className="text-white/90 text-sm block font-medium uppercase tracking-wider mb-0.5">
                                        Mail
                                    </span>
                                    <a href="mailto:overseas@freightdigitalfzc.com" className="hover:underline font-medium tracking-wide block">
                                        overseas@freightdigitalfzc.com
                                    </a>
                                    <a href="mailto:global@freightdigitalfzc.com" className="hover:underline font-medium tracking-wide block">
                                        global@freightdigitalfzc.com
                                    </a>
                                    <a href="mailto:overseas@freightdigitalfzc.com" className="hover:underline font-medium tracking-wide block">
                                        overseas@freightdigitalfzc.com
                                    </a>
                                </div>
                            </div>

                            {/* Address Section */}
                            <div className="flex gap-3 items-start text-base text-white/90">
                                <MapPin className="w-4 h-4 text-white/50 mt-1 shrink-0" />
                                <div>
                                    <span className="text-white/90 text-sm block font-medium uppercase tracking-wider mb-0.5">
                                        Address
                                    </span>
                                    <div className="leading-relaxed font-light">
                                        <p className="font-medium text-white/80">FREIGHT DIGITAL FZC LLC,</p>
                                        <p className="text-md text-white/80 mt-0.5">
                                            Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="lg:border-l lg:border-white/10 lg:pl-12 flex flex-col justify-start ">

                        <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
                            Follow Us
                        </h4>
                        <div className="pt-2">
                            <ul className="flex items-center gap-4">

                                <li>
                                    <Link href="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#f1651a] transition-all duration-300 group" aria-label="Facebook">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 26 27"
                                            className="text-white group-hover:text-[#f1651a] transition-colors"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_7_993)">
                                                <path d="M23.8293 1.63855H2.14412C1.40159 1.639 0.799656 2.24123 0.799805 2.98405V24.6692C0.800251 25.4118 1.40248 26.0137 2.14531 26.0135H13.8204V16.5873H10.6545V12.8977H13.8204V10.1824C13.8204 7.03366 15.7427 5.31979 18.5516 5.31979C19.8969 5.31979 21.053 5.42007 21.39 5.46485V8.75586H19.4531C17.9249 8.75586 17.629 9.48202 17.629 10.5478V12.8977H21.2829L20.8068 16.5873H17.629V26.0135H23.8293C24.5723 26.0137 25.1747 25.4116 25.1748 24.6686C25.1748 24.6685 25.1748 24.6683 25.1748 24.668V2.98286C25.1745 2.24034 24.5721 1.6384 23.8293 1.63855Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7_993">
                                                    <rect width="26" height="26" fill="white" transform="translate(0 0.838745)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#f1651a] transition-all duration-300 group" aria-label="Twitter">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 26 27"
                                            fill="currentColor"
                                            className="text-white group-hover:text-[#f1651a] transition-colors"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_7_995)">
                                                <path d="M24.1249 0.838745H1.87514C0.839478 0.838745 0 1.67822 0 2.71388V24.9636C0 25.9993 0.839478 26.8387 1.87514 26.8387H24.1249C25.1605 26.8387 26 25.9993 26 24.9636V2.71388C26 1.67822 25.1605 0.838745 24.1249 0.838745V0.838745ZM18.9357 10.9748C18.9414 11.1027 18.9442 11.2312 18.9442 11.3604C18.9442 15.3033 15.9429 19.85 10.4544 19.8502H10.4546H10.4544C8.76929 19.8502 7.20122 19.3562 5.88071 18.5098C6.11418 18.5374 6.35182 18.5511 6.59244 18.5511C7.99051 18.5511 9.2771 18.0742 10.2985 17.2738C8.99225 17.2496 7.89093 16.3869 7.51086 15.2013C7.69276 15.2362 7.87982 15.2553 8.07164 15.2553C8.34399 15.2553 8.60782 15.2186 8.85855 15.1501C7.49321 14.8768 6.46469 13.6701 6.46469 12.2253C6.46469 12.2118 6.46469 12.1997 6.46509 12.1872C6.86717 12.4107 7.32698 12.5452 7.81654 12.5603C7.01535 12.0257 6.48869 11.1118 6.48869 10.0766C6.48869 9.52988 6.63647 9.0177 6.89276 8.57674C8.36423 10.3822 10.5633 11.5697 13.0432 11.6944C12.9921 11.4758 12.9657 11.2481 12.9657 11.014C12.9657 9.36682 14.3021 8.03044 15.9499 8.03044C16.8082 8.03044 17.5834 8.39325 18.1279 8.97327C18.8077 8.83917 19.446 8.59082 20.0227 8.24904C19.7995 8.9455 19.3266 9.52988 18.7105 9.89943C19.3141 9.82722 19.8894 9.66714 20.424 9.4295C20.0247 10.028 19.5182 10.5536 18.9357 10.9748Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7_995">
                                                    <rect width="26" height="26" fill="white" transform="translate(0 0.838745)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#f1651a] transition-all duration-300 group" aria-label="LinkedIn">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 26 28"
                                            fill="currentColor"
                                            className="text-white group-hover:text-[#f1651a] transition-colors"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_7_997)">
                                                <path d="M24.1249 0H1.87514C0.839478 0 0 0.893637 0 1.99611V25.6813C0 26.7838 0.839478 27.6774 1.87514 27.6774H24.1249C25.1605 27.6774 26 26.7838 26 25.6813V1.99611C26 0.893637 25.1605 0 24.1249 0ZM9.22235 20.9202H6.05626V10.7805H9.22235V20.9202ZM7.6394 9.39586H7.61877C6.55634 9.39586 5.8692 8.61731 5.8692 7.64427C5.8692 6.64928 6.57736 5.89226 7.66043 5.89226C8.7435 5.89226 9.41 6.64928 9.43063 7.64427C9.43063 8.61731 8.7435 9.39586 7.6394 9.39586ZM20.6386 20.9202H17.4729V15.4957C17.4729 14.1324 17.0145 13.2027 15.8689 13.2027C14.9944 13.2027 14.4734 13.8298 14.2445 14.4352C14.1608 14.6519 14.1404 14.9547 14.1404 15.2577V20.9202H10.9745C10.9745 20.9202 11.016 11.7317 10.9745 10.7805H14.1404V12.2161C14.5611 11.5252 15.3139 10.5425 16.9937 10.5425C19.0767 10.5425 20.6386 11.9917 20.6386 15.1061V20.9202Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7_997">
                                                    <rect width="26" height="27.6774" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div> */}

                </div>

                {/* Bottom Copyright Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4 text-center sm:text-left text-white/80">
                    <div>
                        <p className="text-xs font-normal tracking-wide">
                            © {new Date().getFullYear()} All Rights Reserved by{" "}
                            <Link href="/" className="hover:text-white font-semibold underline underline-offset-4">
                                Freight Digital
                            </Link>
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-normal">
                            Designed by{" "}
                            <a
                                href="https://yulanto.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold underline underline-offset-4 hover:text-white transition-colors"
                            >
                                Yulanto Web Creations
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;