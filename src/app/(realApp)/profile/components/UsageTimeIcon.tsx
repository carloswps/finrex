type Props = {
    monthsUsed: number;
    positionY: number;
    positionX: number;
}

const UsageTimeIcon = ({ monthsUsed, positionY, positionX }: Props) => {
    return (
        <div
            className={'rounded-xl p-3 w-16 h-6 bg-[var(--green-theme)] text-[var(--purple-theme)] text-nowrap text-[12px] font-bold relative flex items-center justify-center'}
            style={{
                left: `${positionX}px`,
                top: `${positionY}px`
            }}
        >
           <p>{monthsUsed} months</p>
        </div>
    )
}

export default UsageTimeIcon;