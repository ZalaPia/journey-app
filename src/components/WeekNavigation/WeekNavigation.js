import styles from "./WeekNavigation.module.scss";

function WeekNavigation() {
    return (
        <div className={styles.navigation}>
            <button>{"<"}</button>
            <h2>May 13 – May 19</h2>
            <button>{">"}</button>
        </div>
    );
}

export default WeekNavigation;