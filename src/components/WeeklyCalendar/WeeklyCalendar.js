import { useState } from "react";
import { DayCell } from '../DayCell/DayCell';
import styles from './WeeklyCalendar.module.scss';

import { Symptoms } from "../DayEntries/Symptoms/Symptoms";
import { ReminderModal } from "../ReminderModal/ReminderModal";
import { ImportantDates } from "../DayEntries/ImportantDates/ImportantDates";
import { ThoughtsAndIdeas} from "../DayEntries/ThoughtsandIdeas/ThoughtsandIdeas";
import {StickyNotes} from "../DayEntries/StickyNotes/StickyNotes";

function sameDay(a, b) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

function getDateKey(date) {
    return date.toISOString().slice(0, 10);
}

export function WeeklyCalendar({ weekDates, selectedDate, onSelectDate }) {
    const today = new Date();

    const [entriesByDate, setEntriesByDate] = useState({});
    const [reminders, setReminders] = useState([]);
    const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);

    function handleAddThought(text) {
        const key = getDateKey(selectedDate);

        setEntriesByDate((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                thoughts: [...(prev[key]?.thoughts || []), text],
            },
        }));
    }

    function handleRemoveThought(index) {
        const key = getDateKey(selectedDate);

        setEntriesByDate((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                thoughts: prev[key].thoughts.filter((_, i) => i !== index),
            },
        }));
    }

    const thoughtsForSelectedDay = entriesByDate[getDateKey(selectedDate)]?.thoughts || [];

    function handleAddImportantDate(entry) {
        setReminders((prev) => [...prev, entry]);
    }

    function getTodayReminders() {
        const todayStr = new Date().toISOString().slice(0, 10);
        return reminders.filter(
            (r) => r.date === todayStr && r.remindMe
        );
    }

    function handleTodayClick() {
        if (getTodayReminders().length > 0) {
            setIsReminderModalOpen(true);
        }
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.grid}>
                {weekDates.map((date) => (
                    <DayCell
                        key={date.toISOString()}
                        date={date}
                        isSelected={sameDay(date, selectedDate)}
                        isToday={sameDay(date, today)}
                        onSelect={onSelectDate}
                        onTodayClick={handleTodayClick}
                    />
                ))}
            </div>

            <section className={styles.dayDetail}>
                <h3 className={styles.dateTitle}>
                    {selectedDate.toLocaleDateString("en-GB", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                </h3>

                <p className={styles.subtitle}>
                    All entries for this day
                </p>

                <div className={styles.entriesGrid}>

                    <Symptoms/>
                    <ImportantDates
                        selectedDate={selectedDate}
                        onAdd={handleAddImportantDate}
                    />

                    <ThoughtsAndIdeas/>

                    <StickyNotes/>
                </div>
            </section>
            {isReminderModalOpen && (
                <ReminderModal
                    reminders={getTodayReminders()}
                    onClose={() => setIsReminderModalOpen(false)}
                />
            )}
        </section>
    );
}