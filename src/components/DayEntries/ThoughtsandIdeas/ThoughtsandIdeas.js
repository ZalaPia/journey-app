import { useState } from "react";
import { Button } from "../../Button/Button";
import styles from "./ThoughtsAndIdeas.module.scss";

const ideaIcon = new URL(
    "../../../assets/ideaIcon.png",
    import.meta.url
).href;

export function ThoughtsAndIdeas() {
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
            {/* header */}
            <div className={styles.header}>
                <img
                    src={ideaIcon}
                    alt="Ideas icon"
                    className={styles.icon}
                />
                <h4 className={styles.title}>
                    Thoughts, Ideas and Quotes
                </h4>
            </div>

            {/* line */}
            <hr className={styles.line} />

            {/* input */}
            <div className={styles.inputRow}>
                <textarea
                    placeholder="Write your thoughts, ideas or quotes…"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="black" onClick={handleAdd}>
                    +
                </Button>
            </div>

            {/* list */}
            {items.length === 0 ? (
                <p className={styles.emptyState}>
                    No thoughts or ideas added
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
                                aria-label="Remove thought"
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