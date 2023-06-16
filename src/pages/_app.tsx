import { AppProps } from "next/app";
import "../styles/global.scss";
import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={styles.container}>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
