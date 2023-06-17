import { SectionTitle } from "../SectionTitle";
import styles from "./styles.module.scss";

export function Info() {
    return (
        <div className={styles.infos}>
            <div>
                <SectionTitle text="Informações" />
                <div className={styles.languagesInfo}>
                    <span>Idade: 24 anos</span>
                    <span>Endereço: Fortaleza - CE, Brasil</span>
                    <span>Phone: (85) 98828-9320</span>
                </div>
            </div>
            <div>
                <SectionTitle text="Educação" />
                <div className={styles.educationInfo}>
                    <span>🎓</span>
                    <span>
                        Graduando em Ciência da Computação — Universidade
                        Federal do Ceará
                    </span>
                </div>
            </div>
        </div>
    );
}
