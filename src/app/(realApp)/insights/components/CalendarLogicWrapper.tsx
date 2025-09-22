'use client';

import { useContext } from 'react';
import { CalendarContext } from '@/app/(realApp)/insights/contexts/CalendarContext';
import CalendarShowBtn from '@/app/(realApp)/insights/components/CalendarShowBtn';
import Calendar from '@/app/(realApp)/insights/components/Calendar';

const CalendarLogicWrapper = () => {
  const ctx = useContext(CalendarContext);

  return (
    <div>
      <div>
        <CalendarShowBtn />
      </div>
      <div>{ctx?.showCalendar && <Calendar />}</div>
    </div>
  );
};

export default CalendarLogicWrapper;
