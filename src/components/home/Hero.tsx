"use client";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
            },
        });

        tl.to(textRef.current, {
            scale: 50, // Zoom into the text hole
            opacity: 0,
            ease: "power2.inOut",
        })
            .to(videoRef.current, {
                scale: 1,
                opacity: 1,
            }, "<"); // Run concurrently

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className={styles.hero} ref={containerRef}>
            <div className={styles.videoContainer} ref={videoRef}>
                {/* Placeholder for "Melting Cheese" video */}
                <div className={styles.placeholderVideo}></div>
            </div>
            <div className={styles.textContainer} ref={textRef}>
                <h1 className={styles.title}>CHEEZZY<br />BITE</h1>
            </div>
        </section>
    );
}
