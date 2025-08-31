type Props = {
    title: string,
    subTitle: string,
    hasLine?: boolean,
    textSize?: string
}

const TitleAndSubtitle = ({ title, subTitle, hasLine, textSize }: Props) => {
    return (
        <>
            <h2 className={`text-[var(--text-color)] text-3xl font-semibold`}>{title}</h2>
            <h5 className={`text-[var(--green-theme)] text-sm  -mt-1 mb-5 ${hasLine && 'border-b-1 border-[var(--green-theme)] pb-5'}`}>{subTitle}</h5>
        </>
    )
}

export default TitleAndSubtitle;