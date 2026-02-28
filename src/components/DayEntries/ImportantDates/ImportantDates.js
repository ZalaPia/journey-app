import { useState } from "react";
import { Button } from "../../Button/Button";
import styles from "./ImportantDates.module.scss";

const ImportantDatesIcon = new URL(
    "../../../assets/datesIcon_blue.png",
    import.meta.url
).href;

export function ImportantDates({selectedDate, onAdd}) {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState(false);

    //dodajanje vpisanega vnosa
    function handleAdd() {
        if (!value.trim()) return;

        const newItem = {
            text: value.trim(),
            remind: checked,
        };

        setItems([...items,newItem]);

        onAdd({
            date: selectedDate.toISOString().slice(0, 10),
            text: value.trim(),
            remindMe: checked,
        });

        setValue("");
        setChecked(false);
    }

    //izbris vnosa
    function handleRemove(indexToRemove) {
        setItems(items.filter((_, index) => index !== indexToRemove));
    }

    //opozorilo na pomemben dogodek
    function toggleRemind(index) {
        setItems(
            items.map((item, i) =>
                i === index ? { ...item, remind: !item.remind } : item
            )
        );
    }

    return (
        <div className={styles.entryBox}>
            {/* datum naslov */}
            <div className={styles.header}>
                <img
                    src={ImportantDatesIcon}
                    alt="ImportantDates icon"
                    className={styles.icon}
                />
                <h4 className={styles.title}>Dates and Events not to be forgotten</h4>
            </div>

            {/* linija */}
            <hr className={styles.line} />

            {/* vnos dogodka */}
            <div className={styles.inputRow}>
                <textarea
                    placeholder="What date or event would you like to remember?"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="black" onClick={handleAdd}>
                    +
                </Button>
            </div>

            {/* poimenovani dogodki */}
            {items.length === 0 ? (
                <p className={styles.emptyState}>
                    No important dates or events
                </p>
            ) : (
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{item.text}</span>
                            {/*nastavitev opozorila na dogodek aktivira remind message box, če je dogodek na današnji dan/*/}
                            <label className={styles.remind}>
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={(e) => setChecked(e.target.checked)}
                                />
                                Remind me
                            </label>
                            <button
                                type="button"
                                className={styles.deleteButton}
                                onClick={() => handleRemove(index)}
                                aria-label="Remove date"
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