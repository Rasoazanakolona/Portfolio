import styles from './Contact.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Contact () {
    return(
        <div className={styles.contenuC}>
            <h1>Contact</h1>
            <div className={styles.blocs}>
                <div className={styles.blocsSousbloc}>
                    <div id={styles.bloc}>
                    <div className={styles.bloc}>
                        <h3>Téléphone</h3> 
                        <a href="tel:+261383601273" className={styles.contactLink}>
                            <i className='bi bi-telephone-fill' title="Appeler"></i>
                            <p>0383601273</p>
                        </a>
                    </div>

                    <div className={styles.bloc}>
                        <h3>Email</h3>
                        <a href="mailto:heriniainahn@gmail.com" className={styles.contactLink}>
                            <i className='bi bi-envelope-fill' title="Envoyer un mail"></i>
                            <p>heriniainahn@gmail.com</p>
                        </a>
                    </div>
                </div>

                <div id={styles.bloc}>
                    <div className={styles.bloc}>
                        <h3>Adresse</h3>
                        <a href="https://www.google.com/maps/search/Ambohimangakely,+Antanambao+Lot+297AI" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <i className="bi bi-geo-alt-fill"></i>
                            <p>Ambohimangakely, Antanambao Lot 297AI</p>
                        </a>
                    </div>

                    <div className={styles.bloc}>
                        <h3>WhatsApp</h3>
                        <a href="https://wa.me/2613601273" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <i className='bi bi-whatsapp' title="Discuter sur Whatsapp"></i>
                            <p>+261383601273</p>
                        </a>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Contact;