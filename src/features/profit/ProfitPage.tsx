import TitleAndSubtitle from '@/shared/components/TitleAndSubtitle';
import ProfitGraph from '@/features/profit/components/ProfitGraph';
import SavingsTable from '@/features/profit/components/SavingsTable';
import TopEarnMonths from '@/features/profit/components/TopEarnMonths';

const Page = () => {
	return (
		<div className={'flex flex-col'}>
			<div className={'mb-12 border-b border-[var(--lines-color)] pb-10'}>
				<div className={'flex items-center gap-20 py-4 text-nowrap'}>
					<div className={'flex flex-col'}>
						<TitleAndSubtitle
							title={'Top Earning Months'}
							subTitle={'Best earnings months'}
						/>
						<TopEarnMonths />
					</div>
					<ProfitGraph width={'906px'} height={'260px'} />
				</div>
			</div>

			<div>
				<TitleAndSubtitle
					title={'Highest Savings'}
					subTitle={'Your highest debt savings'}
				/>
				<SavingsTable />
			</div>
		</div>
	);
};

export default Page;
