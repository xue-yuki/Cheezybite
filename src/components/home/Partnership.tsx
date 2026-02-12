"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Partnership.module.css";
import { gsap } from "gsap";

export default function Partnership() {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className={styles.partnershipSection} id="partnership">
            <div className={styles.imageSide}>
                <Image
                    src="/images/partnership-bg.png"
                    alt="Partnership Opportunity"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.contentSide}>
                <h2>JADI BAGIAN DARI KAMI</h2>
                <p>Bergabunglah dengan jaringan mitra sukses Cheezzybite dan bawa kelezatan premium ke kotamu.</p>

                <form className={styles.form}>
                    <input type="text" placeholder="Nama Lengkap" className={styles.input} />
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="tel" placeholder="Nomor WhatsApp" className={styles.input} />
                    <button ref={buttonRef} className={styles.submitBtn}>
                        Download Proposal
                    </button>
                </form>
            </div>
        </section>
    );
}
