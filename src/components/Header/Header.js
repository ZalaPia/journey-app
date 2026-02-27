import styles from "./Header.module.scss";

const pregnantIcon = new URL(
    "../../assets/Header.svg",
    import.meta.url
).href;

function Header() {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.titleRow}>
                    <img
                        src={pregnantIcon}
                        alt="Journey phase icon"
                        className={styles.img}
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