type Props = {
    title: string,
    subTitle: string
}

const TitleAndSubtitle = ({ title, subTitle }: Props) => {
    return (
        <>
            <h2 className={'text-[var(--text-color)] text-3xl font-semibold'}>{title}</h2>
            <h5 className={'text-[var(--green-theme)] text-sm mb-6'}>{subTitle}</h5>
        </>
    )
}

export default TitleAndSubtitle;