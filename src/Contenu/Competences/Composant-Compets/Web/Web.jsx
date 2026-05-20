import styles from "../FBBAO.module.css"
import { Monitor, Server} from 'lucide-react';
import django from "../../../../Icones/django.png"
import php from "../../../../Icones/php.png"
import react from "../../../../Icones/react.png"
import bootstrap from "../../../../Icones/bootstrap.png"
import html from "../../../../Icones/html.png"
import css from "../../../../Icones/css.png"
import js from "../../../../Icones/js.png"

function Web () {
    return(
        <div>
            <div className={styles.carte}>
            <div className={styles.teteDePres}>
            <Monitor size={40} strokeWidth={1.5} color="#38bdf8" />
            <h3>FRONTEND</h3>
            </div>
            <div className={styles.BlocContet}>
            <div className={styles.blocsGauche}>
                <h3>LANGUAGES</h3>
                <div className={styles.BlocsIcones}>
                    <div>
                        <img src={html} alt="HTML" title="html"/>
                        <p>HTML</p>
                    </div>
                    <div>
                        <img src={css} alt="CSS" title="css"/>
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src={js} alt="Javascripte" title="javascripte" className={styles.JSIcone}/>
                        <p>Javascripte</p>
                    </div>
                    <div>
                        <img src={bootstrap} alt="Bootstrap" title="bootstrap" className={styles.bootstrapIcone}/>
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
            <div className={styles.blocsDroite}>
                 <h3>FRAMEWORK</h3>
                <img src={react} alt="React" title="react"/>
                <p>react</p>
            </div>
            </div>
        </div>

        <div className={styles.carte}>
            <div className={styles.teteDePres}>
            <Server size={40} strokeWidth={1.5} color="#38bdf8" />
            <h3>BACKEND</h3>
            </div>
            <div className={styles.BlocContet}>
            <div className={styles.blocIconeBP}>
                <h3>LANGUAGE</h3>
                <img src={php} alt="PHP" title="php" className={styles.phpIcone}/>
                <p>PHP</p>
            </div>
            <div className={styles.blocsDroite}>
                <h3>FRAMEWORK</h3>
                <img src={django} alt="Django" title="django"/>
                <p>Django</p>
            </div>
            </div>
        </div>

        </div>
    )
}
export default Web ;