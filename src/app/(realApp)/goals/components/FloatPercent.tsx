type Props = {
    color?: string;
    percent?: number;
    barRotation?: number;
    orientationX: number;
    orientationY: number;
}
const FloatPercent = ({ color, percent, barRotation, orientationX, orientationY }: Props) => {
    const dinamycStyle: React.CSSProperties = {
        top: orientationY,
        left: orientationX,
        position: 'absolute',
        color: color ?? 'var(--lines-color)'
    }
    return (
        <div
            className="text-sm absolute flex flex-col items-center justify-center"
            style={dinamycStyle}
        >
            <p className="mb-1">{percent}%</p>
            <div
                className="w-4 h-[1px]"
                style={{
                    background: color ?? 'var(--lines-color)',
                    transform: `rotate(${barRotation ?? 0}deg)`
                }}
            ></div>
        </div>
    )
}

export default FloatPercent;