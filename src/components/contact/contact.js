import styles from "./contact.module.css";
import gmailLogo from "../../assets/gmail.png";
import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/linkedin.png";

export default function Contact() {
    return (
        <div className={styles.contact} id="Contact">
            <h1>Contact</h1>
            <h3>Let's stay in touch</h3>
            <div className={styles.contactIcons}>
                <a href="mailto:1ms20ec070@gmail.com" title="Gmail">
                    <img src={gmailLogo} alt="Gmail Logo" />
                </a>
                <a href="https://www.linkedin.com/in/punith-p-909964292/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <img src={linkedinLogo} alt="LinkedIn Logo" />
                </a>
                <a href="https://github.com/PunithParamesh" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <img src={githubLogo} alt="GitHub Logo" />
                </a>
                
            </div>
        </div>
    );
}
