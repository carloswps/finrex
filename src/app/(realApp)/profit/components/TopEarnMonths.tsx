import GrowthIndicator from "@/app/(realApp)/profit/components/GrowthIndicator";

type Props = {
    month: string;
    percentage: number;
    arrowIcon: string;
}

const TopEarnMonths = () => {
    return (
        <>
            <div className={'text-[var(--text-color)] flex flex-col justify-center mb-12 gap-3'}>
               <GrowthIndicator
                   month={'April'}
                   percentage={11}
               />
                <GrowthIndicator
                    month={'May'}
                    percentage={25}
                />
                <GrowthIndicator
                    month={'June'}
                    percentage={60}
                />
            </div>
        </>
    )
}

export default TopEarnMonths;