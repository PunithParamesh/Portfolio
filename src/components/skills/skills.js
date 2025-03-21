import styles from "./skills.module.css";

export default function Skills() {
    return (
        <div className={styles.skills} id="Skills">
            <h1>Skills</h1>

            <h4>Programming Languages</h4>
            <ul className={styles.skillsList}>
                <li>JavaScript</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>

            <h4>Frameworks and Libraries</h4>
            <ul className={styles.skillsList}>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>EJS (View Engine)</li>
                <li>Redux</li>
            </ul>

            <h4>Databases</h4>
            <ul className={styles.skillsList}>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>Firebase</li>
            </ul>

            <h4>Other Skills</h4>
            <ul className={styles.skillsList}>
                <li>DSA</li>
                <li>OOPS</li>
            </ul>
        </div>
    );
}
