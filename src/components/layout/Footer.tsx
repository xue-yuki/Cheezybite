import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                {/* Brand Column */}
                <div className={`${styles.column} ${styles.brandColumn}`}>
                    <h3 className={styles.brandName}>Cheezzybite</h3>
                    <p className={styles.brandDesc}>The Premium Cheese Journey. Menghadirkan cemilan berkualitas dengan cita rasa keju otentik yang tak terlupakan.</p>
                </div>
                
                {/* Navigation Column */}
                <div className={styles.column}>
                    <h4>Jelajahi</h4>
                    <ul>
                        <li><a href="#hero">Beranda</a></li>
                        <li><a href="#menu">Koleksi Menu</a></li>
                        <li><a href="#how">Cara Pesan</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                
                {/* Social Column */}
                <div className={styles.column}>
                    <h4>Sosial Media</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">WhatsApp</a></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className={styles.column}>
                    <h4>Kontak Kami</h4>
                    <p className={styles.contactItem}>hello@cheezzybite.com</p>
                    <p className={styles.contactItem}>Jakarta, Indonesia</p>
                    <p className={styles.contactItem}>Buka: 09.00 - 21.00</p>
                </div>
            </div>
            
            <div className={styles.footerBottom}>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Cheezzybite. All rights reserved.
                </div>
                <div className={styles.legalLinks}>
                    <a href="#">Syarat & Ketentuan</a>
                    <a href="#">Kebijakan Privasi</a>
                </div>
            </div>
        </footer>
    );
}
