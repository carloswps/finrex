import Bar from "@/app/(realApp)/insights/components/Bar";

type Props = {
    title: string,
    subTitle: string,
    value: number
}
const RealSpendingGraph = ({ title, subTitle, value } : Props) => {
    return (
        <div className={'flex items-center my-4 text-[var(--text-color)]'}>
            <div>
                <h4 className={'font-semibold text-sm'}>{title}</h4>
                <h6 className={'text-[var(--lines-color)] -mt-1.5 text-sm'}>{subTitle}</h6>
            </div>
            <Bar width={'w-full'}/>
            <p className={'font-bold'}>${value}</p>
        </div>
    )
}

export default RealSpendingGraph;