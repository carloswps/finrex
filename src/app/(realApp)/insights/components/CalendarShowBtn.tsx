import CalendarArrow from '@/app/(realApp)/insights/components/icons/CalendarArrow.svg';
import { useContext } from 'react';
import { CalendarContext } from '@/app/(realApp)/insights/contexts/CalendarContext';

const CalendarShowBtn = () => {
  const ctx = useContext(CalendarContext);

  const handleGraphBtn = () => {
    ctx?.setShowCalendar(!ctx?.showCalendar);
  };

  return (
    <button
      className={'flex items-center gap-2 text-2xl font-semibold text-[var(--text-color)]'}
      onClick={handleGraphBtn}
    >
      From August to September
      <CalendarArrow className={'h-6 w-6'} />
    </button>
  );
};

export default CalendarShowBtn;
