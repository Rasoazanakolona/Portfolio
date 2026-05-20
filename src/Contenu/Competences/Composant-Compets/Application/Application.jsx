import styles from "../FBBAO.module.css"
import windev from "../../../../Icones/windev.png"
import { AppWindow } from 'lucide-react';

function Appli () {
    return(
         <div className={styles.carte}>
            <div className={styles.teteDePres}>
            <AppWindow size={40} strokeWidth={1.5} color="#38bdf8" />
            <h3>LOGICIEL</h3>
            </div>
            <div className={styles.blocsSeul}>
                <h3>DÉVELOPPEMENT DESKTOP</h3>
                <img src={windev} alt="Windev" />
                <p>WinDev</p>
            </div>
        </div>
    )
}
export default Appli;