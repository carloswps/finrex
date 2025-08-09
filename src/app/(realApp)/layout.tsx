import { ReactNode } from "react";
import Header from "@/app/(realApp)/revenue/components/Header";

export default function RealAppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 overflow-auto">
                {children}
            </div>
        </div>
    )
}