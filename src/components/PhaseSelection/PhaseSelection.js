import { useState } from "react";
import styles from "./PhaseSelection.module.scss";
import { Button } from "../Button/Button";

const menstrualIcon = new URL(
    "../../assets/menstrualcyclePhase.png",
    import.meta.url
).href;

const birthControlIcon = new URL(
    "../../assets/birthcontrolPhase.png",
    import.meta.url
).href;

const tryingIcon = new URL(
    "../../assets/tryingtoconcievePhase.png",
    import.meta.url
).href;

const pregnantIcon = new URL(
    "../../assets/pregnantPhase.png",
    import.meta.url
).href;

function PhaseSelection({ onConfirm, onCancel }) {
    const [selectedPhase, setSelectedPhase] = useState(null);

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>

                <h2 className={styles.title}>
                    Change Your Journey Phase
                </h2>

                <p className={styles.subtitle}>
                    Select your current phase:
                </p>

                <div className={styles.grid}>

                    <div
                        className={`${styles.card} ${
                            selectedPhase === "menstrual" ? styles.active : ""
                        }`}
                        onClick={() => setSelectedPhase("menstrual")}
                    >
                        <img src={menstrualIcon} alt="Menstrual cycle" />
                        <span>Monthly period</span>
                    </div>

                    <div
                        className={`${styles.card} ${
                            selectedPhase === "birth-control" ? styles.active : ""
                        }`}
                        onClick={() => setSelectedPhase("birth-control")}
                    >
                        <img src={birthControlIcon} alt="Birth control" />
                        <span>Birth Control</span>
                    </div>

                    <div
                        className={`${styles.card} ${
                            selectedPhase === "trying" ? styles.active : ""
                        }`}
                        onClick={() => setSelectedPhase("trying")}
                    >
                        <img src={tryingIcon} alt="Trying to conceive" />
                        <span>Trying to Conceive</span>
                    </div>

                    <div
                        className={`${styles.card} ${
                            selectedPhase === "pregnancy" ? styles.active : ""
                        }`}
                        onClick={() => setSelectedPhase("pregnancy")}
                    >
                        <img src={pregnantIcon}
                             alt="Pregnant"
                             />
                        <span>Pregnant</span>
                    </div>

                </div>

                <div className={styles.actions}>
                    <Button
                        variant="ghost"
                        className={styles.cancel}
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="gradient" onClick={()  => {
                            onConfirm(selectedPhase);
                        }}
                    >
                        Save Phase Change
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default PhaseSelection;
