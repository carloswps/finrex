import TitleAndSubtitle from '@/app/components/TitleAndSubtitle';
import FromDataGraph from '@/app/(realApp)/insights/components/FormDataContainer';
import LastMonth from '@/app/(realApp)/insights/components/LastMonth';
import Summary from '@/app/components/Summary';
import RealSpendingGraph from '@/app/(realApp)/insights/components/RealSpendingGraph';

const Page = () => {
  return (
    <div className="grid grid-cols-3 items-start gap-4">
      <div className="col-span-2 row-start-1">
        <div>
          <TitleAndSubtitle title="Your Profit" subTitle="From savings to success" />
        </div>
        <div className="row-span-2">
          <FromDataGraph graphSelection={true} showCalendar={true} />
        </div>
      </div>

      <aside className="mb-5 border-l border-[var(--lines-color)] px-16">
        <div>
          <TitleAndSubtitle title="In Money" subTitle="Real Spending" hasLine={true} />
            <RealSpendingGraph title={'Transportation'} subTitle={'Bus, car, boat'} value={300} barColor={'blue-graph'} />
            <RealSpendingGraph title={'Rent'} subTitle={'Apartment, house'} value={1700} barColor={'pink-graph'} />
            <RealSpendingGraph title={'Groceries'} subTitle={'Food, drinks'} value={400} barColor={'orange-graph'} />
            <RealSpendingGraph title={'Entertainment'} subTitle={'Movies, concerts'} value={220} barColor={'green-graph'} />
        </div>
        <div className="mt-8">
          <TitleAndSubtitle title="Vs Last Month" subTitle="Monthly Comparison" hasLine={true} />
          <LastMonth />
          <Summary
              title={'Summary'}
              cubeSize={'23px'}
              fontSize={'16px'}
              titleFontSize={'16px'}
              backgroundColor={'var(--blue-graph)'}
              arrowDirection={'up'}
              pastValue={80}
              currentValue={200}
              summaryName={'Transport:'}
          />
          <Summary
            arrowDirection={'down'}
            backgroundColor={'var(--pink-graph)'}
            cubeSize={'23px'}
            fontSize={'16px'}
            titleFontSize={'16px'}
            pastValue={300}
            currentValue={450}
            summaryName={'Rent:'}
          />
            <Summary
                arrowDirection={'even'}
                backgroundColor={'var(--yellow-theme)'}
                cubeSize={'23px'}
                fontSize={'16px'}
                titleFontSize={'16px'}
                pastValue={300}
                currentValue={300}
                summaryName={'Groceries:'}
            />
        </div>
      </aside>
    </div>
  );
};

export default Page;
