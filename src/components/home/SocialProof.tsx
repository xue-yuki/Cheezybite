import styles from "./SocialProof.module.css";

const reviews = [
    "Enak banget!", "Kejunya gak pelit!", "Nagih!", "Best dimsum in town!",
    "So creamy!", "Udangnya fresh!", "Must try!", "Recommended!",
    "Anak-anak suka!", "Packaging rapi!", "Pengiriman cepat!", "Tastiest snack!"
];

export default function SocialProof() {
    return (
        <section className={styles.proofSection}>
            <h2 className={styles.title}>What They Say</h2>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    {reviews.map((text, i) => (
                        <span key={i} className={styles.reviewItem}>"{text}"</span>
                    ))}
                    {/* Duplicate for loop */}
                    {reviews.map((text, i) => (
                        <span key={`dup-${i}`} className={styles.reviewItem}>"{text}"</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
