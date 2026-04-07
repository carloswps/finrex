import GrowthIndicator from '@/features/profit/components/GrowthIndicator';

const TopEarnMonths = () => {
	return (
		<>
			<div
				className={
					'mb-12 flex flex-col justify-center gap-3 text-[var(--text-color)]'
				}
			>
				<GrowthIndicator month={'April'} percentage={11} />
				<GrowthIndicator month={'May'} percentage={25} />
				<GrowthIndicator month={'June'} percentage={60} />
			</div>
		</>
	);
};

export default TopEarnMonths;
