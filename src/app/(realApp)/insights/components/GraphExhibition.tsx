'use client'
import BarGraph from "./icons/BarGraph.svg";
import ColumnGraph from "./icons/ColumnGraph.svg";
import LinegGraph from "./icons/LineGraph.svg";
import PizzaGraph from "./icons/PizzaGraph.svg";
import {useContext} from "react";
import {ChartStyle, GraphContext} from "@/app/(realApp)/insights/contexts/GraphContext";

const GraphExhibition = () => {
    const ctx = useContext(GraphContext);

    const selectStyle = (style: ChartStyle) => {
        ctx?.setStyle(style);
    }
    return (
        <div className={'flex gap-10'}>
            <LinegGraph onClick={() => selectStyle('line')} className={'text-[var(--desactive-color)]] w-11 h-11 hover:text-[var(--yellow-theme)]'}/>
            <BarGraph onClick={() => selectStyle('bar')} className={'text-[var(--desactive-color)]] w-11 h-11 hover:text-[var(--green-theme)]'}/>
            <PizzaGraph onClick={() => selectStyle('doughnut')} className={'text-[var(--desactive-color)]] w-11 h-11 hover:text-[var(--purple-theme)]'}/>
            <ColumnGraph onClick={() => selectStyle('bar')} className={'text-[var(--desactive-color)]] w-11 h-11 hover:text-[var(--orange-theme)]'}/>
        </div>
    )
}

export default GraphExhibition;