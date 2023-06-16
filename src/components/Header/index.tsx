import Image from "next/image";
import styles from "./styles.module.scss";

export function Header() {
    return (
        <div className={styles.header}>
            <div>
                <h1>Olá, me chamo Mykaeull!👋</h1>
                <h2>Web Developer</h2>
            </div>
            <Image
                src="/my-picture.png"
                alt="My picture icon"
                width={325}
                height={310}
                priority
            />
        </div>
    );
}
