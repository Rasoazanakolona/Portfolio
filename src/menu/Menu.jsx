import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={styles.navContainer}>
            <div 
                className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`} 
                onClick={toggleMenu}
            >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>

            <div className={`${styles.head} ${isOpen ? styles.menuOpen : ''}`}>
                <NavLink className={styles.BMenu} to="/Accueil" onClick={closeMenu}>Accueil</NavLink>
                <NavLink className={styles.BMenu} to="/Apropos" onClick={closeMenu}>À propos</NavLink>
                <NavLink className={styles.BMenu} to="/Competence" onClick={closeMenu}>Compétences</NavLink>
                <NavLink className={styles.BMenu} to="/Projet" onClick={closeMenu}>Projets</NavLink>
                <NavLink className={styles.BMenu} to="/Contact" onClick={closeMenu}>Contact</NavLink>
            </div>
        </nav>
    );
}

export default Menu;