import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import FromDataGraph from "@/app/(realApp)/insights/components/FormDataContainer";

const Page = () => {
  return (
    <div className={'grid grid-cols-2 gap-4 items-start'}>
        <div className={'row-start-1'}>
            <div>
                <TitleAndSubtitle
                    title="Your Profit"
                    subTitle="From savings to success"
                />
            </div>
            <div className={'row-span-2'}>
                <FromDataGraph
                    data={'From April 1 to June 30'}
                    showData={true}
                    graphSelection={true}
                />
            </div>
        </div>
        <div>
            <TitleAndSubtitle
                title={'In Money'}
                subTitle={'Real Spending'}
                hasLine={true}
            />
            <FromDataGraph
                data={'From April 1 to June 30'}
                showData={false}
                graphSelection={false}
            />
        </div>
        <div className={'col-start-2'}>
            <TitleAndSubtitle
                title={'In Money'}
                subTitle={'Real Spending'}
                hasLine={true}
            />
            <FromDataGraph
                data={'From April 1 to June 30'}
                showData={false}
                graphSelection={false}
            />
        </div>
    </div>
  )
};

export default Page;
