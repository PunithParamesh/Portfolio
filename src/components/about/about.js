import styles from "./about.module.css";

export default function About() {
    return (
        <div className={styles.about} id="About">
            <div className={styles.aboutContent}>
                <h2>Hi, My name is Punith P</h2>
                <h2>I'm a Full Stack Developer</h2>
                <p>
                    Expertised in frontend and backend development using JavaScript, React.js, Node.js, and Express.js. 
                    Proficient in building responsive, user-focused web applications with secure, scalable, and efficient 
                    backend architectures.
                </p>
                <a href="https://www.linkedin.com/in/punith-p-909964292/" target="_blank" rel="noopener noreferrer">
                    <button className={styles.connectButton}>Let's Connect</button>
                </a>
            </div>
            <hr></hr>
        </div>
    );
}
