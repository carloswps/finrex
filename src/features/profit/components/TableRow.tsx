import ProfitGraph from '@/features/profit/components/ProfitGraph';

type Props = {
	month: string;
	savedValue: number;
	savedPercentage: number;
	previousSpending: number;
	currentSpending: number;
	color?: string;
};

const tableRow = ({
	month,
	savedValue,
	savedPercentage,
	previousSpending,
	currentSpending,
	color,
}: Props) => {
	return (
		<tr className={'font-semibold text-[var(--text-color)]'}>
			<td className={'border-b border-l border-[var(--green-theme)] p-3'}>
				{month}
			</td>
			<td className={'border-b border-[var(--green-theme)] p-3'}>
				{savedValue} $
			</td>
			<td className={'border-b border-[var(--green-theme)] p-3'}>
				{savedPercentage} %
			</td>
			<td className={'border-b border-[var(--green-theme)] p-3'}>
				{previousSpending} $
			</td>
			<td className={'border-b border-[var(--green-theme)] p-3'}>
				{currentSpending} $
			</td>
			<td className={'border-r border-b border-[var(--green-theme)] p-3'}>
				<ProfitGraph
					width={'250px'}
					height={'10px'}
					color={color}
					fill={false}
					minimal={true}
				/>
			</td>
		</tr>
	);
};

export default tableRow;
