import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import TopEarnMonths from "@/app/(realApp)/profit/components/TopEarnMonths";
import ProfitGraph from "@/app/(realApp)/profit/components/ProfitGraph";
import SavingsTable from "@/app/(realApp)/profit/components/SavingsTable";

const Page = () => {
    return (
        <div className={'flex flex-col'}>
            <div className={'mb-12 pb-10 border-b border-[var(--lines-color)]'}>
                <div className={'flex items-center gap-20 text-nowrap py-4'}>
                    <div className={'flex flex-col'}>
                        <TitleAndSubtitle
                            title={'Top Earning Months'}
                            subTitle={'Best earnings months'}
                        />
                        <TopEarnMonths/>
                    </div>
                    <ProfitGraph
                        width={'906px'}
                        height={'260px'}
                    />
                </div>
            </div>

            <div>
                <TitleAndSubtitle
                    title={'Highest Savings'}
                    subTitle={'Your highest debt savings'}
                />
                <SavingsTable/>
            </div>
        </div>
    )
}

export default Page;