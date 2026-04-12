'use client';

import { useContext } from 'react';
import Calendar from '@/features/insights/components/Calendar';
import CalendarShowBtn from '@/features/insights/components/CalendarShowBtn';
import { CalendarContext } from '@/features/insights/contexts/CalendarContext';

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
