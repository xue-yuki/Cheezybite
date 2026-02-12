"use client";
import { useEffect, useRef } from "react";
import styles from "./OrderFlow.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    { id: 1, title: "Choose", desc: "Select your favorites", icon: "🛒" },
    { id: 2, title: "Chat", desc: "Contact via WhatsApp", icon: "💬" },
    { id: 3, title: "Pay", desc: "Secure transaction", icon: "💳" },
    { id: 4, title: "Enjoy", desc: "Taste the premium melt", icon: "😋" },
];

export default function OrderFlow() {
    const containerRef = useRef(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom 50%",
                scrub: 1,
            },
        });

        stepsRef.current.forEach((step, index) => {
            if (step) {
                tl.fromTo(step,
                    { y: 50, opacity: 0, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5 },
                    index * 0.2
                );
            }
        });

    }, []);

    return (
        <section className={styles.orderSection} ref={containerRef}>
            <h2 className={styles.title}>How to Order</h2>
            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <div key={step.id} className={styles.stepWrapper}>
                        <div
                            className={styles.stepCard}
                            ref={el => { stepsRef.current[index] = el; }}
                        >
                            <div className={styles.icon}>{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                        {index < steps.length - 1 && <div className={styles.connector}></div>}
                    </div>
                ))}
            </div>
        </section>
    );
}
