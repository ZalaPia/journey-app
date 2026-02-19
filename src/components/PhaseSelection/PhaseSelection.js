import { useState } from "react";
import styles from "./PhaseSelection.module.scss";

import menstrualIcon from "../../assets/menstrualcyclePhase.png";
import birthControlIcon from "../../assets/birthcontrolPhase.png";
import tryingIcon from "../../assets/tryingtoconcievePhase.png";
import pregnantIcon from "../../assets/pregnantPhase.png";

function PhaseSelection({ onConfirm }) {
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
                        <span>Menstrual Cycle</span>
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
                        <img src={pregnantIcon} alt="Pregnant" />
                        <span>Pregnant</span>
                    </div>

                </div>

                <div className={styles.actions}>
                    <button
                        className={styles.cancel}
                        onClick={() => setSelectedPhase(null)}
                    >
                        Cancel
                    </button>

                    <button
                        className={styles.confirm}
                        disabled={!selectedPhase}
                        onClick={() => onConfirm(selectedPhase)}
                    >
                        Confirm Choice
                    </button>
                </div>

            </div>
        </div>
    );
}

export default PhaseSelection;
