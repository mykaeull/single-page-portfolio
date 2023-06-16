import { SectionTitle } from "../SectionTitle";
import styles from "./styles.module.scss";

export function Info() {
    return (
        <div className={styles.infos}>
            <SectionTitle text="Languages" />
            <div className={styles.languagesInfo}>
                <span>EN - Fluente</span>
                <span>PT-BR - Native</span>
            </div>
            <SectionTitle text="Education" />
            <div className="education-info">
                <span>🎓</span>
                <span>texto</span>
            </div>
        </div>
    );
}
