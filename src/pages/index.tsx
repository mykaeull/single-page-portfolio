import Head from "next/head";
import { Header } from "../components/Header";
import { Experience } from "../components/Experience";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portifólio | Mykaeull Gomes</title>
                <meta
                    name="description"
                    content="Mykaeull Gomes is a web developer..."
                />
            </Head>
            <Header />
            <Experience />
            <div className="infos">
                <h3>Languages</h3>
                <div className="languages-info">
                    <span>EN - Fluente</span>
                    <span>PT-BR - Native</span>
                </div>
                <h3>Education</h3>
                <div className="education-info">
                    <span>🎓</span>
                    <span>texto</span>
                </div>
            </div>
            <div className="btns">
                <div className="social"></div>
                <button>contact me</button>
            </div>
        </>
    );
}
