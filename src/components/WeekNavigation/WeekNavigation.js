import { useRef } from 'react';
import { Button } from '../Button/Button';
import styles from './WeekNavigation.module.scss';

export function WeekNavigation({ weekLabel, onPreviousWeek, onNextWeek, onGoToDate }) {
    const dateInputRef = useRef(null);

    function handleGoToDateClick() {
        if (!dateInputRef.current) return;

        if (typeof dateInputRef.current.showPicker === 'function') {
            dateInputRef.current.showPicker();
            return;
        }

        dateInputRef.current.click();
    }

    function handleDateChange(event) {
        if (event.target.value) {
            onGoToDate(event.target.value);
        }
    }

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.weekLabel}>{weekLabel}</h2>
            <div className={styles.actions}>
                <Button onClick={onPreviousWeek}>Previous week</Button>
                <Button onClick={onNextWeek}>Next week</Button>
                <Button onClick={handleGoToDateClick} variant="ghost">
                    Go to date
                </Button>
                <input
                    ref={dateInputRef}
                    type="date"
                    className={styles.dateInput}
                    onChange={handleDateChange}
                    aria-label="Choose date"
                />
            </div>
        </section>
    );
}