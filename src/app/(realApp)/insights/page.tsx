import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import FromDataGraph from "@/app/(realApp)/insights/components/FormDataContainer";
import LastMonth from "@/app/(realApp)/insights/components/LastMonth";
import Summary from "@/app/components/Summary";
import RealSpendingGraph from "@/app/(realApp)/insights/components/RealSpendingGraph";

const Page = () => {
    return (
        <div className="grid grid-cols-3 gap-4 items-start">
            <div className="col-span-2 row-start-1">
                <div>
                    <TitleAndSubtitle
                        title="Your Profit"
                        subTitle="From savings to success"
                    />
                </div>
                <div className="row-span-2">
                    <FromDataGraph
                        graphSelection={true}
                        showCalendar={true}
                    />
                </div>
            </div>

            <aside className="border-l border-[var(--lines-color)] px-16 mb-5">
                <div>
                    <TitleAndSubtitle
                        title="In Money"
                        subTitle="Real Spending"
                        hasLine={true}
                    />
                    <RealSpendingGraph
                        title={'Transportation'}
                        subTitle={'Bus, car, boat'}
                        value={1000}
                    />
                    <RealSpendingGraph
                        title={'Transportation'}
                        subTitle={'Bus, car, boat'}
                        value={1000}
                    />
                    <RealSpendingGraph
                        title={'Transportation'}
                        subTitle={'Bus, car, boat'}
                        value={1000}
                    />
                    <RealSpendingGraph
                        title={'Transportation'}
                        subTitle={'Bus, car, boat'}
                        value={1000}
                    />
                </div>
                <div className="mt-8">
                    <TitleAndSubtitle
                        title="Vs Last Month"
                        subTitle="Monthly Comparison"
                        hasLine={true}
                    />
                    <LastMonth />
                    <Summary/>
                    <Summary/>
                </div>
            </aside>
        </div>
    );
};

export default Page;
