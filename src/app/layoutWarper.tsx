"use client";

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import { usePathname } from 'next/navigation'

function LayoutWarper({ children }: { children: React.ReactNode }) {
    const path = usePathname();

    const hideLayout =
        path.includes('/admin/')
    // console.log(path);

    return (
        <>
            {!hideLayout && <Header />}

            {children}

            {!hideLayout && <Footer />}
        </>
    );
}

export default LayoutWarper;