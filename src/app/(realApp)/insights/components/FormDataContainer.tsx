'use client';
import FormDataGraph from '@/app/(realApp)/insights/components/FormDataGraph';
import GraphExhibition from '@/app/(realApp)/insights/components/GraphExhibition';
import { GraphProvider } from '@/app/(realApp)/insights/contexts/GraphContext';
import { CalendarProvider } from '@/app/(realApp)/insights/contexts/CalendarContext';
import CalendarLogicWrapper from '@/app/(realApp)/insights/components/CalendarLogicWrapper';

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
