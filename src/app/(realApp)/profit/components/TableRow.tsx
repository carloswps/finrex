import ProfitGraph from "@/app/(realApp)/profit/components/ProfitGraph";

type Props = {
    month: string,
    savedValue: number,
    savedPercentage: number,
    previousSpending: number,
    currentSpending: number
}

const tableRow = ({ month, savedValue, savedPercentage, previousSpending, currentSpending } : Props) => {
    return (
        <tr className={'text-[var(--text-color)] font-semibold'}>
            <td className={'p-3 border-b border-l border-[var(--green-theme)]'}>{month}</td>
            <td className={'p-3 border-b border-[var(--green-theme)]'}>{savedValue} $</td>
            <td className={'p-3 border-b border-[var(--green-theme)]'}>{savedPercentage} %</td>
            <td className={'p-3 border-b border-[var(--green-theme)]'}>{previousSpending} $</td>
            <td className={'p-3 border-b border-[var(--green-theme)]'}>{currentSpending} $</td>
            <td className={'p-3 border-b border-r border-[var(--green-theme)]'}>
                <ProfitGraph
                    width={'250px'}
                    height={'10px'}
                    color={'#F2D77D'}
                    fill={false}
                    minimal={true}
                />
            </td>
        </tr>
    )
}

export default tableRow;