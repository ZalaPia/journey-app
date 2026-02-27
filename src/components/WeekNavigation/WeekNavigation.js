import { useRef, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./WeekNavigation.module.scss";

export function WeekNavigation({
                                   weekLabel,
                                   phase,
                                   onPreviousWeek,
                                   onNextWeek,
                                   onGoToDate,
                                   onChangePhase,
                               }) {
    const dateInputRef = useRef(null);
    const [showDateInput, setShowDateInput] = useState(false);
    const PHASE_LABELS = {
        menstrual: "Menstrual Cycle",
        "birth-control": "Birth Control",
        trying: "Trying to Conceive",
        pregnancy: "Pregnancy",
    };

    function handleGoToDateClick() {
        setShowDateInput(true);

        // počakamo render in nato fokus
        setTimeout(() => {
            if (dateInputRef.current) {
                if (typeof dateInputRef.current.showPicker === "function") {
                    dateInputRef.current.showPicker();
                } else {
                    dateInputRef.current.focus();
                }
            }
        }, 0);
    }

    function handleDateChange(event) {
        if (event.target.value) {
            onGoToDate(event.target.value);
            setShowDateInput(false); // po izbiri skrijemo input
        }
    }

    return (
        <section className={styles.wrapper}>
            {/* ZGORNJA VRSTICA */}
            <div className={styles.topRow}>
                <Button onClick={onPreviousWeek} variant="weekNav">
                    ← Previous Week
                </Button>

                <div className={styles.center}>
                    <div className={styles.weekLabel}>{weekLabel}</div>
                    {phase && (
                        <div className={styles.phaseLabel}>
                            Tracking {PHASE_LABELS[phase]}
                        </div>
                    )}
                </div>

                <Button onClick={onNextWeek} variant="weekNav">
                  Next Week  →
                </Button>
            </div>

            {/* SPODNJA VRSTICA */}
            <div className={styles.actions}>
                <Button onClick={onChangePhase} variant="gradient">
                    Change phase
                </Button>

                <span className={styles.divider} />

                <div className={styles.goToDateWrapper}>
                    <Button onClick={handleGoToDateClick} variant="ghost">
                        Go to date
                    </Button>

                    {showDateInput && (
                        <input
                            ref={dateInputRef}
                            type="date"
                            className={styles.dateInput}
                            onChange={handleDateChange}
                            aria-label="Choose date"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}