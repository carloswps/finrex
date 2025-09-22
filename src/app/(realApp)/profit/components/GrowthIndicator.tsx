import TripleUpArrow from "@/app/(realApp)/profit/components/icons/TripleUpArrow.svg";

type Props = {
    month: string;
    percentage: number;
}

const GrowthIndicator = ({ month, percentage }: Props) => {
    return (
        <div className={'flex items-center gap-2'}>
            <h2 className={'text-xl'}>{month}</h2>
            <h4 className={'font-bold text-2xl'}>+{percentage}%</h4>
            <TripleUpArrow className={'text-[var(--green-theme)] h-8 w-8'}/>
        </div>
    )
}

export default GrowthIndicator;