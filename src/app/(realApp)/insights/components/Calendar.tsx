'use client'

import { useContext } from "react";
import { CalendarContext } from "@/app/(realApp)/insights/contexts/CalendarContext";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
    const ctx = useContext(CalendarContext);

    if (!ctx?.showCalendar) return null;

    return (
        <>
            <style>
                {`
                    .fc .fc-button {
                        background-color: #A25BAE;
                        color: white;
                        border: none;
                        cursor: pointer;
                        transition: background-color 0.2s ease-in-out;
                        text-transform: capitalize;
                    }

                    .fc .fc-button:hover {
                        background-color: rgba(162,91,174, 0.8);
                    }
                    
                    .fc .fc-button:disabled {
                        background-color: #A25BAE;
                        cursor: not-allowed;
                        opacity: 0.8;
                    }
                    .fc .fc-daygrid-day.fc-day-sun,
                    .fc .fc-daygrid-day.fc-day-sat {
                        background-color: #f5f5f5;
                    }

                    .fc .fc-daygrid-day-frame {
                        background-color: #fff; 
                    }

                    .fc .fc-daygrid-day-number {
                        color: #000; 
                    }

                    .fc .fc-col-header-cell-cushion {
                        color: #000; 
                    }
                `}
            </style>

            <div className="absolute mt-2 rounded-lg z-10 bg-white w-96 h-auto p-4 shadow-xl border border-gray-200">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    titleFormat={() => ""}
                />
            </div>
        </>
    );
};

export default Calendar;