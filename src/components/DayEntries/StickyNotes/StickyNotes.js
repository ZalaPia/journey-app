import { useState } from "react";
import { Button } from "../../Button/Button";
import styles from "./StickyNotes.module.scss";

const StickyNotesIcon = new URL(
    "../../../assets/notesIcon.png",
    import.meta.url
).href;

export function StickyNotes() {
    const [notes, setNotes] = useState([]);
    const [value, setValue] = useState("");

    function handleAdd() {
        if (!value.trim()) return;
        if (value.length > 200) return;

        setNotes([...notes, value.trim()]);
        setValue("");
    }

    function handleRemove(indexToRemove) {
        setNotes(notes.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div className={styles.entryBox}>
            <div className={styles.header}>
                <img
                    src={StickyNotesIcon}
                    alt="Sticky notes icon"
                    className={styles.icon}
                />
                <h4 className={styles.title}>
                    Sticky Notes
                </h4>
            </div>
            <hr className={styles.line} />

            {/* input */}
            <div className={styles.inputRow}>
                <textarea
                    placeholder="Add a sticky note… (max 200 characters)"
                    value={value}
                    maxLength={200}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="black" onClick={handleAdd}>
                    +
                </Button>
            </div>

            {/* notes */}
            {notes.length === 0 ? (
                <p className={styles.emptyState}>
                    No sticky notes added
                </p>
            ) : (
                <div className={styles.notesGrid}>
                    {notes.map((note, index) => (
                        <div
                            key={index}
                            className={`${styles.note} ${styles[`color${index % 4}`]}`}
                        >
                            <p>{note}</p>
                            <button
                                type="button"
                                className={styles.deleteButton}
                                onClick={() => handleRemove(index)}
                                aria-label="Remove note"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}