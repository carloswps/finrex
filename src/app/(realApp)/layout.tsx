import { ReactNode } from "react";
import Header from "@/app/(realApp)/Header";

export default function RealAppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 overflow-auto pt-6 px-15">
                {children}
            </div>
        </div>
    )
}