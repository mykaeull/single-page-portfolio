import { SectionTitle } from "../SectionTitle";
import styles from "./styles.module.scss";

export function Experience() {
    return (
        <div className={styles.experience}>
            <SectionTitle text="Experience" />
            <p>texto</p>
            <div className="experience-time"></div>
        </div>
    );
}
