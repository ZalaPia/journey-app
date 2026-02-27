import { useMemo, useState } from 'react';
import { WeekNavigation }  from '../WeekNavigation/WeekNavigation';
import { WeeklyCalendar } from '../WeeklyCalendar/WeeklyCalendar';
import styles from './JourneyLayout.module.scss';
import Header from "../Header/Header";

function startOfWeekMonday(date) {
    const result = new Date(date);
    const day = result.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    result.setDate(result.getDate() + diff);
    result.setHours(0, 0, 0, 0);
    return result;
}

function getWeekDates(mondayDate) {
    return Array.from({ length: 7 }, (_, index) => {
        const date = new Date(mondayDate);
        date.setDate(mondayDate.getDate() + index);
        return date;
    });
}

function sameDay(a, b) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export default function JourneyLayout({phase, onChangePhase}) {
    const today = new Date();
    const [weekStart, setWeekStart] = useState(startOfWeekMonday(today));
    const [selectedDate, setSelectedDate] = useState(today);

    const weekDates = useMemo(() => getWeekDates(weekStart), [weekStart]);

    const weekLabel = `${weekDates[0].toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short'
    })} - ${weekDates[6].toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })}`;

    function shiftWeek(days) {
        setWeekStart((previous) => {
            const next = new Date(previous);
            next.setDate(previous.getDate() + days);
            return next;
        });

        setSelectedDate((previous) => {
            const next = new Date(previous);
            next.setDate(previous.getDate() + days);
            return next;
        });
    }

    function handleGoToDate(rawDate) {
        const nextDate = new Date(rawDate);
        if (Number.isNaN(nextDate.getTime())) return;

        setSelectedDate(nextDate);
        setWeekStart(startOfWeekMonday(nextDate));
    }

    function handleSelectDate(date) {
        setSelectedDate(date);
        if (!weekDates.some((weekDate) => sameDay(weekDate, date))) {
            setWeekStart(startOfWeekMonday(date));
        }
    }

    return (
        <main className={styles.layout}>
            <div className="container">
                <Header />
                <WeekNavigation
                    phase={phase}
                    onChangePhase={onChangePhase}
                    onPreviousWeek={() => shiftWeek(-7)}
                    weekLabel={weekLabel}
                    onGoToDate={handleGoToDate}
                    onNextWeek={() => shiftWeek(7)}
                />
                <WeeklyCalendar
                    weekDates={weekDates}
                    selectedDate={selectedDate}
                    onSelectDate={handleSelectDate}
                />
            </div>
        </main>
    );
}