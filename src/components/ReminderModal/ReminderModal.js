import { Button } from "../Button/Button";
import styles from "./ReminderModal.module.scss";

export function ReminderModal({ reminders, onClose }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Don’t forget!</h2>
                <p className={styles.subtitle}>
                    Today reminders include:
                </p>
                <ul className={styles.list}>
                    {reminders.map((reminder, index) => (
                        <li key={index} className={styles.item}>
                            {reminder.text}
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <Button variant="gradient" onClick={onClose}>
                        OK
                    </Button>
                </div>
            </div>
        </div>
    );
}