import Image from "next/image";
import { SectionTitle } from "../SectionTitle";
import styles from "./styles.module.scss";

export function Experience() {
    return (
        <div className={styles.experience}>
            <SectionTitle text="Experiência" />
            <p>
                2 anos atuando como desenvolvedor web, em empresas como
                DellLead, AjaxTI e InsightLab.
            </p>
            <div className={styles.experienceTime}>
                <div className={styles.experienceLanguage}>
                    <Image
                        src="/react2.png"
                        alt="React icon"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className={styles.experienceUnit}>
                        <div className={styles.experienceMeasure3}>
                            <span>3 anos</span>
                        </div>
                    </div>
                </div>
                <div className={styles.experienceLanguage}>
                    <Image
                        src="/js2.png"
                        alt="JS icon"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className={styles.experienceUnit}>
                        <div className={styles.experienceMeasure3}>
                            <span>3 anos</span>
                        </div>
                    </div>
                </div>
                <div className={styles.experienceLanguage}>
                    <Image
                        src="/ts2.png"
                        alt="TS icon"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className={styles.experienceUnit}>
                        <div className={styles.experienceMeasure2}>
                            <span>2 anos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
