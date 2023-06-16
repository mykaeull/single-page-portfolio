import { EmailIcon } from "../Icons/emailIcon";
import { GithubIcon } from "../Icons/githubIcon";
import { InstagramIcon } from "../Icons/instagramIcon";
import { LinkedinIcon } from "../Icons/linkedinIcon";
import style from "./styles.module.scss";

export function SocialButtons() {
    return (
        <div className={style.social}>
            <a
                href="https://www.instagram.com/mykas_g/"
                target="_blank"
                rel="noreferrer"
            >
                <InstagramIcon />
            </a>
            <a
                href="https://www.linkedin.com/in/mykaeull-gomes-46a6a01ab/"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedinIcon />
            </a>
            <a
                href="https://github.com/mykaeull"
                target="_blank"
                rel="noreferrer"
            >
                <GithubIcon />
            </a>
            <a
                href="mailto:mykaeull99@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <EmailIcon />
            </a>
        </div>
    );
}
