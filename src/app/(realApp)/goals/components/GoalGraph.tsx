import FloatPercent from '@/app/(realApp)/goals/components/FloatPercent';
import FormDataGraph from '@/app/(realApp)/insights/components/FormDataGraph';
import { GraphProvider } from '@/app/(realApp)/insights/contexts/GraphContext';
import { ChartData, ChartOptions } from 'chart.js';

type Props = {
	completePercent?: number;
	remainingPercent?: number;
	customOptions?: ChartOptions;
	customData?: ChartData<'doughnut'>;
};

const GoalGraph = ({
	completePercent,
	remainingPercent,
	customOptions,
	customData,
}: Props) => {
	return (
		<GraphProvider initialStyle={'doughnut'}>
			<div className="relative flex items-center justify-center">
				<FloatPercent
					percent={completePercent}
					color={'var(--green-theme)'}
					barRotation={130}
					orientationX={165}
					orientationY={10}
				/>
				<FormDataGraph
					height={200}
					width={200}
					chartOptions={customOptions}
					chartData={customData}
				/>
				<FloatPercent
					percent={remainingPercent}
					color={'var(--lines-color)'}
					barRotation={60}
					orientationX={5}
					orientationY={20}
				/>
			</div>
		</GraphProvider>
	);
};

export default GoalGraph;
