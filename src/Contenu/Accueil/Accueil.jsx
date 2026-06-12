import React, { useState, useEffect } from 'react';
import styles from "./Acceuil.module.css";
import ReactLogo from "../../Icones/react.png";
import Profile from "../../Images/Profil.jpg";

function Accueil () {
    const fullText = "Étudiant en Informatique et passionné par le développement web, mon expertise technique s'étend des architectures Front-end aux solutions Back-end, avec une attention constante portée à l'expérience utilisateur.";
    
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
                <h1>Developpeur <span>Front-end</span></h1>
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
                    
                    <div className={styles.BadgeContainer}>
                        <span className={styles.Badge}>React</span>
                        <span className={styles.Badge}>Django</span>
                    </div>
                </div>
            </div>
                <footer>
                    <img src={ReactLogo} alt="React" title="React" className={styles.logoReactRotatif}/>
                </footer>
            </div>
        </div>
    )
}
export default Accueil;