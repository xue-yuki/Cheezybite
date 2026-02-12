import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h3>Cheezzybite</h3>
                    <p>The Premium Cheese Journey</p>
                </div>
                <div className={styles.column}>
                    <h4>Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#story">Our Story</a></li>
                        <li><a href="#menu">Menu</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Contact</h4>
                    <p>hello@cheezybite.com</p>
                    <p>Jakarta, Indonesia</p>
                </div>
            </div>
            <div className={styles.mascotContainer}>
                {/* Placeholder for Mascot */}
                <div className={styles.mascot}>🧀</div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Cheezzybite. All rights reserved.
            </div>
        </footer>
    );
}
