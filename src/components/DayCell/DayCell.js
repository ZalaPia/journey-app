import styles from "./DayCell.module.scss";

function DayCell({ label }) {
    return (
        <div className={styles.dayCell}>
            <div className={styles.dayLabel}>{label}</div>
            <div className={styles.dayContent}></div>
        </div>
    );
}

export default DayCell;