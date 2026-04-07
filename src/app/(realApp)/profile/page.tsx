import PersonalForm from '@/app/(realApp)/profile/components/PersonalForm';
import UsageGraph from '@/app/(realApp)/profile/components/UsageGraph';
import Summary from '@/app/components/Summary';
import TitleAndSubtitle from '@/app/components/TitleAndSubtitle';

const Page = () => {
	return (
		<div className={'flex'}>
			<div className={'w-1/3'}>
				<PersonalForm />
			</div>
			<div className={'mt-8 -ml-12 w-2/3'}>
				<TitleAndSubtitle
					title={'Usage Over Time'}
					subTitle={'Track your progress and engagement with the platform'}
				/>
				<UsageGraph />
				<div className={'ml-2'}>
					<Summary
						pastValue={400}
						currentValue={400}
						summaryName={'Net Profit:'}
						growthPercentage={0}
						bottom={'20px'}
						fontSize={'18px'}
						titleFontSize={'20px'}
						backgroundColor={'var(--blue-graph)'}
						cubeSize={'24px'}
						arrowDirection={'even'}
						arrowSize={'28px'}
					/>
					<Summary
						pastValue={100}
						currentValue={300}
						summaryName={'Money Saved:'}
						growthPercentage={200}
						bottom={'20px'}
						fontSize={'18px'}
						titleFontSize={'20px'}
						backgroundColor={'var(--pink-graph)'}
						cubeSize={'24px'}
						arrowDirection={'up'}
						arrowSize={'28px'}
					/>
					<Summary
						pastValue={1000}
						currentValue={130}
						summaryName={'Savings Growth:'}
						growthPercentage={87}
						bottom={'20px'}
						fontSize={'18px'}
						titleFontSize={'20px'}
						backgroundColor={'var(--orange-graph)'}
						cubeSize={'24px'}
						arrowDirection={'down'}
						arrowSize={'28px'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Page;
