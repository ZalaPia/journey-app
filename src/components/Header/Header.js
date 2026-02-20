import styles from "./Header.module.scss";
import phaseIcon from "../../assets/tryingtoconcievePhase.png";

function Header() {

    console.log("phaseIcon:", phaseIcon);
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.titleRow}>
                    <img
                        src={phaseIcon}
                        alt="Journey phase icon"
                        className={styles.icon}
                    />

                    <h1 className={styles.title}>
                        Your Journey
                    </h1>
                </div>

                <p className={styles.subtitle}>
                    Your complete reproductive health companion
                </p>
            </div>
        </header>
    );
}

export default Header;