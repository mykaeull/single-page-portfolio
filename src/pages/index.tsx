import Head from "next/head";
import { Header } from "../components/Header";
import { Experience } from "../components/Experience";
import { Info } from "../components/Information";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import { SocialButtons } from "../components/SocialButtons";

export default function Home() {
    return (
        <main className={styles.container}>
            <Head>
                <title>Portifólio | Mykaeull Gomes</title>
                <meta
                    name="description"
                    content="Mykaeull Gomes is a web developer..."
                />
            </Head>
            <Header />
            <Experience />
            <Info />
            <div className={styles.buttons}>
                <SocialButtons />
                <a className={styles.buttonPrimary} download href="/resume.pdf">
                    Download Currículo
                    <Image
                        src="/download.png"
                        alt="Download icon"
                        width={24}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </main>
    );
}
