"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";
import { gsap } from "gsap";

const faqs = [
    { q: "Apakah halal?", a: "Ya, 100% Halal. Kami hanya menggunakan bahan-bahan halal berkualitas." },
    { q: "Berapa lama tahan di freezer?", a: "Dimsum kami tahan hingga 1 bulan di freezer beku." },
    { q: "Bagaimana cara masaknya?", a: "Kukus selama 10-15 menit dari kondisi beku. Sajikan hangat." },
    { q: "Ada minimal order?", a: "Tidak ada minimal order untuk pembelian eceran." },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection} id="faq">
            <div className={styles.layout}>
                {/* Left Column: Title */}
                <div className={styles.headerColumn}>
                    <h2 className={styles.title}>Punya Pertanyaan?</h2>
                    <p className={styles.subtitle}>
                        Temukan jawaban dari pertanyaan yang sering ditanyakan oleh Cheeselovers di bawah ini.
                    </p>
                </div>

                {/* Right Column: Accordion */}
                <div className={styles.faqContainer}>
                    {faqs.map((item, index) => (
                        <div key={index} className={`${styles.item} ${activeIndex === index ? styles.itemActive : ""}`}>
                            <button
                                className={`${styles.question} ${activeIndex === index ? styles.active : ""}`}
                                onClick={() => toggle(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className={styles.qText}>{item.q}</span>
                                <span className={styles.iconWrapper}>
                                    <span className={styles.icon}>+</span>
                                </span>
                            </button>
                            <div
                                className={`${styles.answer} ${activeIndex === index ? styles.show : ""}`}
                            >
                                <div className={styles.answerContent}>
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
