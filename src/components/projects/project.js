import { projects } from "../../projects.data";
import styles from "./projects.module.css";

export default function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                    <h2>{project.title}</h2>
                    <p className={styles.skillsUsed}>Skills used: {project.skills.join(", ")}</p>
                    <p>{project.desc}</p>
                    <div className={styles.projectButtons}>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <button className={styles.projectButton}>GitHub</button>
                        </a>
                        {project.demo?<a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <button className={styles.projectButton}>Live Demo</button>
                        </a> :null }
                        
                    </div>
                </div>
            ))}
        </div>
    );
}
