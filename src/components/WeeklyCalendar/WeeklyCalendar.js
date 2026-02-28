import { useState } from "react";
import { DayCell } from '../DayCell/DayCell';
import styles from './WeeklyCalendar.module.scss';
import {Button} from "../Button/Button";

import { Symptoms } from "../DayEntries/Symptoms/Symptoms";
import { ReminderModal } from "../ReminderModal/ReminderModal";
import { ImportantDates } from "../DayEntries/ImportantDates/ImportantDates";



function sameDay(a, b) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function WeeklyCalendar({ weekDates, selectedDate, onSelectDate }) {
    const today = new Date();

    const [reminders, setReminders] = useState([]);
    const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);

    function getTodayReminders() {
        const todayStr = new Date().toISOString().slice(0, 10);

        return reminders.filter(
            (r) => r.date === todayStr && r.remindMe
        );
    }

    function handleTodayClick() {
        const todayReminders = getTodayReminders();

        if (todayReminders.length > 0) {
            setIsReminderModalOpen(true);
        }
    }

    function handleAddImportantDate(entry) {
        setReminders((prev) => [...prev, entry]);
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
                            <ImportantDates selectedDate={selectedDate}
                                            onAdd={handleAddImportantDate}
                            />

                            <div className={`${styles.entryBox} ${styles.fullWidth}`}>
                                <h4 className={styles.thoughts_ideas}>Thoughts, Ideas and Quotes</h4>
                                <hr className={styles.thoughts_ideas__line}/>
                                <textarea placeholder="Write your thoughts…" />
                            </div>

                            <div className={`${styles.entryBox} ${styles.fullWidth}`}>
                                <h4 className={styles.sticky_notes}>Sticky notes</h4>
                                <hr className={styles.sticky_notes__line}/>
                                <textarea placeholder="Add notes…" />
                                <Button variant="black">
                                + Add
                                </Button>
                            </div>
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