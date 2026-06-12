import styles from "./Apropos.module.css"
import { User, Target, Award, CheckCircle } from 'lucide-react';

function Apropos () {
    return(
        <div className={styles.Apropos}>
            <h1>À Propos</h1>
            <div className={styles.blocs}>
                <div className={styles.IPersonnelle}>
                    <div className={styles.TitreBlocs}>
                        <User size={22} color="#38bdf8" />
                        <h3>INFORMATION PERSONNELLE</h3>
                    </div>
                    <div className={styles.detailIP}>
                        <div>
                            <h4>Nom :</h4>
                            <p> RASOAZANAKOLONA</p>
                        </div>
                        <div>
                            <h4>Prènom :</h4>
                            <p>Heriniaina Jean Marco</p>
                        </div>
                        <div>
                            <h4>Specialisé :</h4>
                            <p className={styles.Specialiter}>Developpeur Web</p>
                        </div>
                    </div>
                </div>
                <div className={styles.autresInfo}>
                    <div className={styles.InfoBloc}>
                        <div className={styles.TitreBlocs}>
                            <Award size={22} color="#38bdf8" />
                            <h3>COMPETENCE PERSONNELLES</h3>
                        </div>
                       <div className={styles.detailID}>
                            <p> <CheckCircle size={14} />  Serieux</p>
                            <p> <CheckCircle size={14} />  Flexible </p>
                            <p> <CheckCircle size={14} />  Travail en équipe</p>
                            <p> <CheckCircle size={14} />  Innovant</p>
                        </div>
                    </div>
                    <div className={styles.InfoBloc}>
                        <div className={styles.TitreBlocs}>
                            <Target size={22} color="#38bdf8" />
                            <h3>OBJECTIFS</h3>
                        </div>
                       <div className={styles.detailIDS}>
                            <p>Recherche d'un stage de 3 mois dès début juillet dans le domaine du développement web. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Apropos;