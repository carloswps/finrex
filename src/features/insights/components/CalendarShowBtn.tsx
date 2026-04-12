import { useContext } from 'react';
import CalendarArrow from './icons/CalendarArrow.svg';
import { CalendarContext } from '@/features/insights/contexts/CalendarContext';

const CalendarShowBtn = () => {
	const ctx = useContext(CalendarContext);

	const handleGraphBtn = () => {
		ctx?.setShowCalendar(!ctx?.showCalendar);
	};

	return (
		<button
			className={
				'flex items-center gap-2 text-2xl font-semibold text-[var(--text-color)]'
			}
			onClick={handleGraphBtn}
		>
			From August to September
			<CalendarArrow className={'h-6 w-6'} />
		</button>
	);
};

export default CalendarShowBtn;
