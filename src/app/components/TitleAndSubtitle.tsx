type Props = {
    title: string,
    subTitle: string,
    hasLine?: boolean
}

const TitleAndSubtitle = ({ title, subTitle, hasLine }: Props) => {
    return (
        <>
            <h2 className={'text-[var(--text-color)] text-3xl font-semibold'}>{title}</h2>
            <h5 className={`text-[var(--green-theme)] text-sm mb-6 ${hasLine && 'border-b-1 border-[var(--green-theme)] pb-10'}`}>{subTitle}</h5>
        </>
    )
}

export default TitleAndSubtitle;