import styles from "../FBBAO.module.css"
import mysql from "../../../../Icones/mysql.png"
import postgresql from "../../../../Icones/postgresql.png"
import { Database, Workflow } from 'lucide-react';
function Basededonne () {
    return(
        <div className={styles.carte}>
            <div className={styles.teteDePres}>
            <Database size={40} strokeWidth={1.5} color="#38bdf8" />
            <h3>ARCHITECTURE DE DONNÉES</h3>
            </div>
            <div className={styles.BlocContet}>
            <div className={styles.blocsGauche}>
                <h3>BASE DE DONNÉES</h3>
                <div className={styles.BlocsIcones}>
                <div>
                <img src={mysql} alt="MySQL" title="mysql" className={styles.mysqlIcone}/>
                <p>MySQL</p>
                </div>
                <div>
                <img src={postgresql} alt="PostgreSQL" title="postgresql"/>
                <p>PostreSQL</p>
                </div>
                </div>
            </div>
            
            <div className={styles.blocsDroite}>
                <h3>CONCEPTION</h3>
                <Workflow size={80} color="#38bdf8" strokeWidth={1.5} />
                <p>Merise</p>
            </div>
            </div>
        </div>
    )
}
export default Basededonne ;