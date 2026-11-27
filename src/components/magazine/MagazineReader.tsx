
"use client";

import dynamic from "next/dynamic";

const FlipbookLoader = dynamic(
    () => import("@/components/magazine/FlipBookLoader"),
    {
        ssr: false,
        loading: () => (
            <div className="h-[500px] flex items-center justify-center">
                Loading newspaper...
            </div>
        ),
    }
);

export default function MagazineReader() {
    return <FlipbookLoader />;
}
