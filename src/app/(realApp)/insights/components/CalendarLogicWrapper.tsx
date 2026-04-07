'use client';

import { useContext } from 'react';
import Calendar from '@/app/(realApp)/insights/components/Calendar';
import CalendarShowBtn from '@/app/(realApp)/insights/components/CalendarShowBtn';
import { CalendarContext } from '@/app/(realApp)/insights/contexts/CalendarContext';

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
