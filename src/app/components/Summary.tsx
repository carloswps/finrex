import EvenArrow from "@/app/(realApp)/insights/components/icons/EvenArrow.svg";
type Props = {
    title?: string;
}
const Summary = ({ title }: Props)  => {
    return (
        <div className={'text-[var(--text-color)] my-4'}>
            <h3 className={'text-[var(--purple-theme)] bold mb-3'}>{title}</h3>
            <div className={'flex gap-1 text-sm'}>
                <div className={'w-5 w-5 bg-blue-400 rounded-[2px]'}></div>
                <h4>Transportation:</h4>
                <p className={'font-bold'}>$80</p>
                <EvenArrow/>
                <p className={'font-bold'}>$80</p>
                <p>(No change)</p>
            </div>
        </div>
    )
}

export default Summary;