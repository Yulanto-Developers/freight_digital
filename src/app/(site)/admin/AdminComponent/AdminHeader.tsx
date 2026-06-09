'use client'

import React from 'react';
import Image from 'next/image';
import logo from '../../../../../public/images/logo/Logo-1.png'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface HeaderProps {
    onMenuToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {

    const navigate = useRouter();
    async function logout() {
        console.log('working');

        const logoutApi: any = await fetch('/api/logout', {
            method: 'POST',
            credentials: 'include'
        });
        console.log(logoutApi);

        const resposne = await logoutApi.json();

        if (resposne.status) {
            toast.success(resposne.message);
            navigate.push('/signin')

        } else {
            toast.error(resposne.message)
        }

    }

    return (
        <header className="bg-white border-b border-gray-200 fixed top-0 z-30 w-full h-16 flex items-center justify-between px-6">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
                {/* <div className="bg-indigo-600 p-2 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>*/}
                <Image src={logo} alt='logo' width={100} height={90} />
                {/* <span className="text-xl font-bold bg-[#f1671a] bg-clip-text text-transparent hidden sm:block">
                    AdminConsole
                </span> */}
            </div>


            <div className="flex items-center gap-4">

                <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors group text-left" onClick={()=>{navigate.push('/admin/profile')}}>
                    <div className="relative h-9 w-9">
                        <Image
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                            alt="Admin Profile"
                            fill
                            className="rounded-full object-cover ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition-all"
                        />
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-semibold text-gray-700 leading-none">Alex Morgan</p>
                        <span className="text-xs text-gray-500">Super Admin</span>
                    </div>
                </button>


                <div className="h-6 w-px bg-gray-200"></div>


                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors" onClick={logout}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="hidden sm:inline">Logout</span>
                </button>
            </div>
        </header>
    );
};