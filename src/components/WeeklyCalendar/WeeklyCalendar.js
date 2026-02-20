import { DayCell } from '../DayCell/DayCell';
import styles from './WeeklyCalendar.module.scss';

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

            <article className={styles.dayDetail}>
                <h3>
                    {selectedDate.toLocaleDateString('en-GB', { weekday: "long" , day: '2-digit', month: 'short', year: 'numeric' })}
                </h3>
                <ul>
                    <li>Symptoms</li>
                    <li>Important dates</li>
                    <li>Thoughts, Ideas and Quotes</li>
                    <li>Sticky notes</li>
                </ul>
            </article>
        </section>
    );
}