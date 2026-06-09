import React from "react";
import LoginWrapper from "./AdminComponent/LoginWrapper";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LoginWrapper>
            {children}
        </LoginWrapper>
    );
}