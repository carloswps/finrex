import CalendarArrow from "@/app/(realApp)/insights/components/icons/CalendarArrow.svg"
import {useContext} from "react";
import {CalendarContext} from "@/app/(realApp)/insights/contexts/CalendarContext";

const CalendarShowBtn = () => {
    const ctx = useContext(CalendarContext);

    const handleGraphBtn = () => {
        ctx?.setShowCalendar(!ctx?.showCalendar);
    }

    return (
                <button
                    className={'text-2xl text-[var(--text-color)] font-semibold flex gap-2 items-center'}
                    onClick={handleGraphBtn}
                >
                    From August to September
                    <CalendarArrow className={'w-6 h-6'}/>
                </button>
    )
}

export default CalendarShowBtn;