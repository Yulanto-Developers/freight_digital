import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
    page: string;
}

export default function Banner({ page }: BannerProps) {
    return (
        <section className="relative w-full h-[70vh]  overflow-hidden flex items-center justify-start">
           
            <Image
                src="/images/banner/b-450.jpg"
                alt="Banner Display"
                fill
                priority
                className=""
            />

          
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/80  to-transparent z-10" />

          
            <div className="container mx-auto relative z-20 px-6 md:px-12">
                <div className="max-w-max bg-white/15 backdrop-blur-md border border-white/30 p-8 md:p-10 rounded-2xl shadow-2xl">
                    
                    
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 mb-4 drop-shadow-sm">
                        {page}
                    </h1>

                   
                    <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                        <span className="text-[#03223f] hover:text-[#6e8296]">{page}</span>
                        <span className="text-slate-500">&gt;</span>
                        <Link href="/" className="text-white/80 hover:text-white transition-colors">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}