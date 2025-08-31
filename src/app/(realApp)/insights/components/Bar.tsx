type Props = {
    width: string
}
const Bar = ({ width }: Props) => {
    return (
        <div className={`${width} h-1 bg-[var(--red-theme)] mx-7`}></div>
    )
}

export default Bar;