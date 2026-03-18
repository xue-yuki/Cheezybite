"use client";
import { useRef, useState } from "react";
import styles from "./OrderFlow.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const steps = [
    {
        id: "01",
        title: "Pilih Menu",
        desc: "Jelajahi koleksi premium kami. Dari Dimsum Udang Keju ikonik hingga lumpia renyah yang menggugah selera.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
        ),
        color: "#B93628" // Red
    },
    {
        id: "02",
        title: "Hubungi Kami",
        desc: "Klik tombol WhatsApp untuk terhubung dengan tim kami. Konsultasikan pesanan untuk acara spesial Anda.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        color: "#FFC845" // Yellow
    },
    {
        id: "03",
        title: "Bayar Instan",
        desc: "Transaksi aman dan sangat cepat melalui berbagai pilihan metode pembayaran digital modern favorit Anda.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
        ),
        color: "#5D3A29" // Brown
    },
    {
        id: "04",
        title: "Nikmati Keju",
        desc: "Pesanan segar diantar sampai pintu. Sajikan hangat dan nikmati sensasi lelehan keju premiumnya.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        ),
        color: "#B93628" // Changed back to highlight CTA nicely
    },
];

export default function OrderFlow() {
    const containerRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.fromTo(cardsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, { scope: containerRef });

    return (
        <section className={styles.orderSection} ref={containerRef}>
            <div className={styles.header}>
                <h2 className={styles.title}>Cara Pesan</h2>
                <p className={styles.subtitle}>4 langkah mudah menikmati kelezatan premium kami di rumah Anda.</p>
            </div>

            <div className={styles.gridContainer}>
                {/* Connecting Timeline Track (desktop only) */}
                <div className={styles.timelineTrack}>
                    <div 
                        className={styles.timelineProgress} 
                        style={{ 
                            width: hoveredIndex !== null ? `${(hoveredIndex / (steps.length - 1)) * 100}%` : '0%',
                            opacity: hoveredIndex !== null ? 1 : 0,
                            background: hoveredIndex !== null ? steps[hoveredIndex].color : 'var(--color-primary)'
                        }}
                    />
                </div>

                {steps.map((step, index) => {
                    const isActive = hoveredIndex === index;
                    const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

                    return (
                        <div 
                            key={step.id} 
                            className={`${styles.card} ${isActive ? styles.activeCard : ''} ${isDimmed ? styles.dimmedCard : ''}`}
                            ref={el => { cardsRef.current[index] = el; }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Number Badge */}
                            <div className={styles.numberBadge} style={{ color: step.color }}>
                                {step.id}
                            </div>
                            
                            {/* Icon Container */}
                            <div className={styles.iconWrapper} style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                                {step.icon}
                                <div className={styles.iconGlow} style={{ boxShadow: `0 0 40px 15px ${step.color}` }} />
                            </div>

                            {/* Content */}
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardDesc}>{step.desc}</p>
                            
                            {/* CTA on final step */}
                            {index === steps.length - 1 && (
                                <button className={styles.ctaButton} style={{ backgroundColor: step.color, color: '#fff' }}>
                                    Pesan Sekarang
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
