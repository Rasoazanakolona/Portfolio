import styles from './Contact.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact () {
    return(
        <div className={styles.contenuC}>
            <header className={styles.HeroSection}>
                <h1>Contact</h1>
            </header>
            <div className={styles.blocs}>
                <div className={styles.grilleContact}>
                    
                    <div className={styles.bloc}>
                        <h3>Téléphone</h3> 
                        <a href="tel:+261383601273" className={styles.contactLink}>
                            <i className='bi bi-telephone-fill' title="Appeler"></i>
                            <p>038 36 012 73</p>
                        </a>
                    </div>

                    <div className={styles.bloc}>
                        <h3>Adresse</h3>
                        <a href="https://www.google.com/maps/search/Ambohimangakely,+Antanambao+Lot+346AIBis" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <i className="bi bi-geo-alt-fill" title="Localiser"></i>
                            <p>Ambohimangakely, Antanambao Lot 346 AI Bis</p>
                        </a>
                    </div>

                    <div className={styles.bloc}>
                        <h3>Email</h3>
                        <a href="mailto:rasoazanakolona.hjmarco@gmail.com" className={styles.contactLink}>
                            <i className='bi bi-envelope-fill' title="Envoyer un mail"></i>
                            <p>rasoazanakolona.hjmarco@gmail.com</p>
                        </a>
                    </div>

                    <div className={styles.bloc}>
                        <h3>WhatsApp</h3>
                        <a href="https://wa.me/2613601273" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <i className='bi bi-whatsapp' title="Discuter sur Whatsapp"></i>
                            <p>+261 38 36 012 73</p>
                        </a>
                    </div>

                    <div className={styles.bloc}>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/marco-heriniaina" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <i className='bi bi-linkedin' title="Visiter mon profil LinkedIn"></i>
                            <p>Marco Heriniaina</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contact;