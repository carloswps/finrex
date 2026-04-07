'use client';
import CalendarLogicWrapper from '@/app/(realApp)/insights/components/CalendarLogicWrapper';
import FormDataGraph from '@/app/(realApp)/insights/components/FormDataGraph';
import GraphExhibition from '@/app/(realApp)/insights/components/GraphExhibition';
import { CalendarProvider } from '@/app/(realApp)/insights/contexts/CalendarContext';
import { GraphProvider } from '@/app/(realApp)/insights/contexts/GraphContext';

type Props = {
	graphSelection: boolean;
	showCalendar?: boolean;
};

const FormDataContainer = ({ graphSelection, showCalendar }: Props) => {
	return (
		<div className={'mt-10'}>
			{showCalendar && (
				<CalendarProvider>
					<CalendarLogicWrapper />
				</CalendarProvider>
			)}
			<GraphProvider>
				<FormDataGraph />
				{graphSelection && <GraphExhibition />}
			</GraphProvider>
		</div>
	);
};

export default FormDataContainer;
