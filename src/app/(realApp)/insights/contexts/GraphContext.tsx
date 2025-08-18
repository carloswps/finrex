'use client'
import {createContext, ReactNode, useState} from "react";

export type ChartStyle = 'bar' | 'doughnut' | 'line';

type GraphContextType = {
    style: ChartStyle,
    setStyle: (style: ChartStyle) => void;
}

export const GraphContext = createContext<GraphContextType | null>(null);

type GraphProviderProps = {
    children: ReactNode;
}
export const GraphProvider = ({ children }: GraphProviderProps) =>  {
    const [style, setStyle] = useState<ChartStyle>('line');

    return (
        <GraphContext.Provider value={{ style, setStyle }}>{children}</GraphContext.Provider>
    )
}