import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { Header } from "./AdminHeader";

export default async function LoginWrapper({
    children,
}: {
    children: ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
        redirect("/signin");
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col antialiased">
            <Header />

            <div className="flex flex-1 pt-16">
                <Sidebar />

                <main className="flex-1 md:ml-64 p-6 bg-gray-50 min-h-[calc(100vh-4rem)] overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}