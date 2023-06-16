import styles from "./styles.module.scss";

interface SectionTitleProps {
    text: string;
}

export function SectionTitle({ text }: SectionTitleProps) {
    return <h3 className={styles.sectionTitle}>{text}</h3>;
}
