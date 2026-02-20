import styles from './DayCell.module.scss';

export function DayCell({ date, isSelected, isToday, onSelect }) {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNumber = date.getDate();

    return (
        <button
            type="button"
            onClick={() => onSelect(date)}
            className={`${styles.dayCell} ${isSelected ? styles.selected : ''}`.trim()}
            aria-pressed={isSelected}
        >
            <span className={styles.dayName}>{dayName}</span>
            <span className={styles.dayNumber}>{dayNumber}</span>
            {isToday && <span className={styles.todayBadge}>Today</span>}
        </button>
    );
}