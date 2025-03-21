import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/man.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("About");

    // Function to update active link on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["About", "Skills", "Projects", "Contact"];
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 350 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logo" className={styles.logo} onClick={()=>document.getElementById("About").scrollIntoView({behavior:"smooth"})} />
            
            {/* Hamburger Menu */}
            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Navigation Links */}
            <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                    <span 
                        key={item} 
                        className={activeSection === item ? styles.active : ""}
                        onClick={() => {
                            setIsOpen(false);
                            document.getElementById(item).scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </nav>
    );
}
