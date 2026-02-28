import { useState } from "react";
import { Button } from "../../Button/Button";
import styles from "./Symptoms.module.scss";

const symptomsIcon = new URL(
    "../../../assets/symptomsIcon.png",
    import.meta.url
).href;

export function Symptoms({onCountChange}) {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");

    function handleAdd() {
        if (!value.trim()) return;
        setItems([...items, value.trim()]);
        setValue("");
    }

    function handleRemove(indexToRemove) {
        setItems(items.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div className={styles.entryBox}>
            {/* sekcija */}
            <div className={styles.header}>
                <img
                    src={symptomsIcon}
                    alt="Symptoms icon"
                    className={styles.icon}
                />
                <h4 className={styles.title}>Symptoms and Feelings of today</h4>
            </div>

            {/* linija */}
            <hr className={styles.line} />

            {/* vnos simptoma */}
            <div className={styles.inputRow}>
                <textarea
                    placeholder="What symptoms or feelings do you feel today?"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="black" onClick={handleAdd}>
                    +
                </Button>
            </div>

            {/* seznam vnosov */}
            {items.length === 0 ? (
                <p className={styles.emptyState}>
                    No symptoms tracked
                </p>
            ) : (
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{item}</span>
                            <button
                                type="button"
                                className={styles.deleteButton}
                                onClick={() => handleRemove(index)}
                                aria-label="Remove symptom"
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}