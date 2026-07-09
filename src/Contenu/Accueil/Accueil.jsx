import React, { useState, useEffect } from 'react';
import styles from "./Acceuil.module.css";
import Profile from "../../Images/Profil.jpg";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Accueil () {
    const fullText = "Étudiant en Informatique et passionné par le développement, mon expertise technique s'étend des architectures Front-end aux solutions Back-end, avec une attention constante portée à l'expérience utilisateur.";
    
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [phase, setPhase] = useState("waiting");

    useEffect(() => {
        if (phase === "waiting") {
            const startTimeout = setTimeout(() => {
                setPhase("typing");
            }, 1800); 
            return () => clearTimeout(startTimeout);
        }

        if (phase === "typing" && index < fullText.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev + fullText.charAt(index));
                setIndex(index + 1);
            }, 40);
            return () => clearTimeout(typingTimeout);
        }

        if (phase === "typing" && index === fullText.length) {
            setPhase("finished");
        }
    }, [index, phase, fullText]);

    return(
        <div className={styles.contenuAccueil}>
            <header className={styles.HeroSection}>
                <h1>Developpeur</h1>
            </header>
            <div className={styles.Blocs}>
                <div className={styles.ContenuAnt}>
                    <img src={Profile} alt="Profile" />
                    <div className={styles.TextWrapper}>
                        <h3 className={styles.typewriter}>
                            {displayText}
                            {phase !== "finished" && (
                                <span className={phase === "waiting" ? styles.heartbeat : styles.cursor}>
                                    |
                                </span>
                            )}
                        </h3>
                        
                        <div className={styles.SocialContainer}>
                            <a href="https://github.com/Rasoazanakolona" target="_blank" rel="noopener noreferrer" className={styles.SocialLink} title="Mon GitHub">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/marco-heriniaina" target="_blank" rel="noopener noreferrer" className={styles.SocialLink} title="Mon LinkedIn">
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accueil;