import styles from "../FBBAO.module.css"
import { Wrench} from 'lucide-react';
import Gantt from "../../../../Icones/Gantt.png";
import FIgma from "../../../../Icones/figma.png"
import Postman from "../../../../Icones/Postman.png"
import VSCode from "../../../../Icones/vscode.png"
import Github from "../../../../Icones/github.png"
import Git from "../../../../Icones/git.png"
function Outils () {
    return(
            <div>

        <div className={styles.carte}>
            <div className={styles.teteDePres}>
            <Wrench size={40} strokeWidth={1.5} color="#38bdf8" />
            <h3>OUTILS</h3>
            </div>
            <div className={styles.BlocContet}>
            <div className={styles.blocsDroite}>
                <h3>Desing UI/UX</h3>
                <img src={FIgma} alt="Figma" title="Figma" className={styles.figamIcone} />
                <p>Figma</p>
            </div>
            <div className={styles.blocsDroite}>
                <h3>Tests API</h3>
                <img src={Postman} alt="Postman" title="Postman"/>
                <p>Postman</p>
            </div>
            <div className={styles.blocsDroite}>
                <h3>Gestion Projet</h3>
                <img src={Gantt} alt="Gantt" title="Gantt"/>
                <p>Gantt Projet</p>
            </div>
            <div className={styles.blocsDroite}>
                <h3>Éditeur de code</h3>
                <img src={VSCode} alt="VS Code" title="VS Code"/>
                <p>VS Code</p>
            </div>
            <div className={styles.blocsDroite}>
                <h3>Hébergement de code</h3>
                <img src={Github} alt="Github" title="Github"/>
                <p>Github</p>
            </div>
            <div className={styles.blocsDroite}>
                <h3>Versionnage</h3>
                <img src={Git} alt="Git" title="Git"/>
                <p>Git</p>
            </div>
            </div>
        </div>

        </div>
    )
}
export default Outils;