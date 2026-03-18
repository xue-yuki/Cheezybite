"use client";
import React, { useRef } from "react";
import styles from "./Partnership.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Partnership() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !cardRef.current || !contentRef.current || !buttonRef.current) return;

        // 1. Clean fade up text animation
        gsap.to(contentRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        // Set initial visibility values for animation
        gsap.set(contentRef.current, { opacity: 0, y: 50 });

        // 3. Magnetic Button Effect using quickTo (Smooth, iPad OS style)
        const xTo = gsap.quickTo(buttonRef.current, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(buttonRef.current, "y", { duration: 0.4, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = buttonRef.current!.getBoundingClientRect();
            // Calculate distance from center of button
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            
            // Move button slightly towards mouse
            xTo(x * 0.4);
            yTo(y * 0.4);
        };

        const handleMouseLeave = () => {
            // Snap back to center
            xTo(0);
            yTo(0);
        };

        buttonRef.current.addEventListener("mousemove", handleMouseMove);
        buttonRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            buttonRef.current?.removeEventListener("mousemove", handleMouseMove);
            buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave);
        };

    }, { scope: sectionRef });

    return (
        <section className={styles.partnershipSection} id="partnership" ref={sectionRef}>
            <div className={styles.contentWrapper} ref={contentRef}>
                <div className={styles.textContent}>
                    <h2 className={styles.headingTitle}>JADI BAGIAN<br/>DARI KAMI</h2>
                    <p className={styles.headingDesc}>Bergabunglah dengan jaringan mitra sukses Cheezzybite dan bawa kelezatan premium ke kotamu. Peluang bisnis menjanjikan menanti Anda.</p>
                </div>

                <form className={styles.formContent}>
                    <div className={styles.inputGroup}>
                        <input type="text" id="name" placeholder="Nama Lengkap" className={styles.input} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <input type="email" id="email" placeholder="Alamat Email" className={styles.input} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <input type="tel" id="whatsapp" placeholder="Nomor WhatsApp" className={styles.input} required />
                    </div>

                    <div className={styles.buttonWrapper}>
                        <button type="button" ref={buttonRef} className={styles.submitBtn}>
                            <span className={styles.btnText}>Download Proposal</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
