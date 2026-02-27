import { DayCell } from '../DayCell/DayCell';
import styles from './WeeklyCalendar.module.scss';
import {Button} from "../Button/Button";

function sameDay(a, b) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function WeeklyCalendar({ weekDates, selectedDate, onSelectDate }) {
    const today = new Date();

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

                            <div className={styles.entryBox}>
                                <h4 className={styles.symptoms}>Symptoms</h4>
                                <hr className={styles.symptoms__line}/>
                                <textarea placeholder="Add symptoms…" />
                                <Button variant="black">
                                    +
                                </Button>
                            </div>

                            <div className={styles.entryBox}>
                                <h4 className={styles.important_dates}>Important dates</h4>
                                <hr className={styles.important_dates__line} />
                                <textarea placeholder="Add important dates…" /><Button variant="black">
                                + Add
                            </Button>
                            </div>

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
        </section>
    );
}