import React from 'react';
import styles from "./Competence.module.css";
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'; 
import Web from "./Composant-Compets/Web/Web";
import Appli from "./Composant-Compets/Application/Application";
import Basededonne from "./Composant-Compets/BDD/BaseDeDonnee";
import Outils from "./Composant-Compets/Outils/Outils";

function Competences () {
    return (
        <div className={styles.competenceContenu}>
            <h1>Compétences</h1>
            
            <div className={styles.Blocs}>
                <div className={styles.BInterieur}>
                    <NavLink className={styles.BCompet} to="/Competence/Web">Web</NavLink>
                    <NavLink className={styles.BCompet} to="/Competence/Application">Application</NavLink>
                    <NavLink className={styles.BCompet} to="/Competence/bdd">Base de donnée</NavLink>
                    <NavLink className={styles.BCompet} to="/Competence/Outils">Outils</NavLink>
                </div>

                <div className={styles.grille}>
                    <Routes>
                        <Route path='/' element={<Navigate to="Web" replace />} />
                        
                        <Route path='Web/*' element={<Web/>}/>
                        <Route path='bdd' element={<Basededonne/>}/>
                        <Route path='Application' element={<Appli/>}/>
                        <Route path='Outils' element={<Outils/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Competences;