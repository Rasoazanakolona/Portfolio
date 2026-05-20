import styles from "./Projet.module.css"
import { X } from 'lucide-react';
import projet from "../../Videos/Projet.mp4"
import react from "../../Icones/react.png"
import bootstrap from "../../Icones/bootstrap.png"
import html from "../../Icones/html.png"
import css from "../../Icones/css.png"
import js from "../../Icones/js.png"
import django from "../../Icones/django.png"
import mysql from "../../Icones/mysql.png"
import postgresql from "../../Icones/postgresql.png"
import php from "../../Icones/php.png"
import { useState } from "react"

import CP1 from "../../Captures/Projet1/1.png"
import CP2 from "../../Captures/Projet1/2.png"
import CP3 from "../../Captures/Projet1/3.png"
import CP4 from "../../Captures/Projet1/4.png"
import CP5 from "../../Captures/Projet1/5.png"
import CP6 from "../../Captures/Projet1/6.png"
import CP7 from "../../Captures/Projet1/7.png"

import CD1 from "../../Captures/Projet2/1 (1).png"
import CD2 from "../../Captures/Projet2/1 (2).png"
import CD3 from "../../Captures/Projet2/1 (3).png"
import CD4 from "../../Captures/Projet2/1 (4).png"
import CD5 from "../../Captures/Projet2/1 (5).png"
import CD6 from "../../Captures/Projet2/1 (6).png"
import CD7 from "../../Captures/Projet2/1 (7).png"


function Projet () {
const [estEnTrainDeFermer, setEstEnTrainDeFermer] = useState(false);
const [InterfaceImageP, AfficherInterfaceImageP] = useState(false);
const [InterfaceImageD, AfficherInterfaceImageD] = useState(false);

const AfficherP = () => {
    AfficherInterfaceImageP(true);
    setEstEnTrainDeFermer(false)
}
const AfficherD = () =>{
    AfficherInterfaceImageD(true);
    setEstEnTrainDeFermer(false)
}
const QuittezAffichage = () => {
    setEstEnTrainDeFermer(true);

    setTimeout (() => {
        AfficherInterfaceImageP(false) || AfficherInterfaceImageD(false);
        setEstEnTrainDeFermer(false);
    }, 1000);
}

    return(
        <div className={styles.Contenu}>
            <h1>Projets</h1>
            <div className={styles.Blocs}>
                <div className={styles.gauche}>
                    <div className={styles.CGauche}>
                        <h3>PREMIER PROJET : Galerie d'images interactive</h3>
                            <p>
                            Ce projet a pour objectif de mettre en avant la maîtrise des propriétés CSS Grid et Flexbox pour la création de mises en page complexes et responsives.
                            Contrairement aux projets utilisant des frameworks modernes, ce site a été développé exclusivement avec les technologies natives : HTML5, CSS3 et JavaScript pur (Vanilla JS).
                            Cette approche m'a permis d'approfondir les bases du développement web et d'optimiser les performances d'affichage sans dépendances externes.
                            </p>
                        <button type="button" onClick={AfficherP}>Voir les captures</button>
                        <div className={styles.Techno}>
                            <img src={html} alt="HTML" title="html"/>
                            <img src={css} alt="CSS" title="css"/>
                            <img src={js} alt="Javascripte" title="javascripte" className={styles.JSIcone}/>
                        </div>
                    </div>
                    <div className={styles.CGauche}>
                        <h3>DEUXIEME PROJET : Gestion des étudiants et des présences</h3>
                    <p>
                    La création de ce projet permet de centraliser la gestion des étudiants et de leurs présences au sein d'une base de données unique, facilitant ainsi le suivi administratif durant l'année universitaire.
                    L'application simplifie les tâches de gestion grâce à un système complet (ajout, modification et suppression en cas d'erreur de saisie). Elle offre également aux administrateurs une visualisation claire des statistiques de présence via des graphiques interactifs (affichant en vert les présents et en rouge les absents).
                    Côté technique, cette application web repose sur React et Bootstrap pour le frontend, PHP pour le backend, et MySQL pour la gestion de la base de données.
                    </p>
                        <button type="button" onClick={AfficherD}>Voir les captures</button>
                        <div className={styles.Techno}>
                            <img src={react} alt="React" title="react"/>
                            <img src={bootstrap} alt="Bootstrap" title="bootstrap" className={styles.bootstrapIcone}/>
                            <img src={php} alt="PHP" title="php" className={styles.phpIcone}/>
                            <img src={mysql} alt="MySQL" title="mysql" className={styles.mysqlIcone}/>
                        </div>
                    </div>
                </div>
                <div className={styles.droite}>
                    <h3>TROISIEME PROJET : Gestion des matériels et des équipements</h3>
                    <p>
                        Ce projet a pour objectif de centraliser la gestion de tous les matériels et équipements au sein du Ministère de l’Enseignement Technique et de la Formation Professionnelle (METFP). Il permet à la DIDN (Direction de l’Innovation et du Développement Numérique) de suivre en temps réel les flux d'entrées et de sorties des équipements dans chaque région de Madagascar. Le développement de cette application web repose sur React pour le frontend, Django pour le backend et PostgreSQL pour la gestion de la base de données.
                    </p>
                    <video src={projet} controls></video>
                    <div className={styles.TechnoTP} >
                        <img src={react} alt="React" title="react"/>
                        <img src={bootstrap} alt="Bootstrap" title="bootstrap" className={styles.bootstrapIcone}/>
                        <img src={django} alt="Django" title="django"/>
                        <img src={postgresql} alt="PostegreSQL" title="postgresql"/>
                    </div>
                </div>
            </div>
            {InterfaceImageP && (
                <div className={`${styles.BlocImage} ${estEnTrainDeFermer ? styles.BlocImageSortie : "" }`}>
                    <button type="button" onClick={QuittezAffichage}><X size={24} strokeWidth={2.5} /></button>
                    <h3>CAPTURE DU PREMIER PROJET "GALLERY D'IMAGE"</h3>
                    <div className={styles.BlocCaptures}>
                        <div className={styles.blocCap}>
                            <p>Authentification</p>
                            <img src={CP1} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Inscription</p>
                            <img src={CP2} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Option d'ecrant</p>
                            <img src={CP3} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Type d'album</p>
                            <img src={CP4} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Albums Naruto</p>
                            <img src={CP5} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Ensemble de touts les albums</p>
                            <img src={CP6} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Membre</p>
                            <img src={CP7} alt="" />
                        </div>
                    </div>
                </div>
            )
            }
            {InterfaceImageD && (
                <div className={`${styles.BlocImage} ${estEnTrainDeFermer ? styles.BlocImageSortie : "" }`}>
                    <button type="button" onClick={QuittezAffichage}><X size={24} strokeWidth={2.5} /></button>
                    <h3>CAPTURE DU DEUXIEME PROJET "GESTION ETUDIANT ET PRESENCE"</h3>
                    <div className={styles.BlocCaptures}>
                        <div className={styles.blocCap}>
                            <p>Page d'accueil</p>
                            <img src={CD1} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Page d'Inscription</p>
                            <img src={CD2} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>List des étudiants</p>
                            <img src={CD3} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Enregistrement du présence</p>
                            <img src={CD4} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>List des présence</p>
                            <img src={CD5} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Tableau de bord du présence</p>
                            <img src={CD6} alt="" />
                        </div>
                        <div className={styles.blocCap}>
                            <p>Tableau de bord du présence sous forme graphe</p>
                            <img src={CD7} alt="" />
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Projet ;