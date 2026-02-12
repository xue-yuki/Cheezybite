"use client";
import { useEffect, useRef } from "react";
import styles from "./Story.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Story() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current || !containerRef.current) return;
        const words = textRef.current.querySelectorAll(`.${styles.word}`);
        const keywords = textRef.current.querySelectorAll(`.${styles.keyword}`);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
            },
        });

        tl.from(words, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
        });

        // Special animation for keywords
        keywords.forEach((keyword) => {
            gsap.fromTo(keyword,
                { scale: 0.8, color: "var(--color-text)" },
                {
                    scale: 1.2,
                    color: "var(--color-primary)",
                    scrollTrigger: {
                        trigger: keyword,
                        start: "top 70%",
                        end: "bottom 30%",
                        scrub: true,
                    }
                }
            );
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section className={styles.storySection} id="story" ref={containerRef}>
            <div className={styles.backgroundGraphics}>
                {/* Abstract cheese lines or checkerboard pattern */}
                <div className={styles.pattern}></div>
            </div>

            <div className={styles.contentContainer} ref={textRef}>
                <p className={styles.paragraph}>
                    <span className={styles.word}>At</span> <span className={styles.word}>Cheezzybite,</span> <span className={styles.word}>our</span> <span className={styles.word}>journey</span> <span className={styles.word}>began</span> <span className={styles.word}>with</span> <span className={styles.word}>a</span> <span className={styles.word}>simple</span> <span className={styles.word}>craving.</span>
                </p>
                <p className={styles.paragraph}>
                    <span className={styles.word}>We</span> <span className={styles.word}>believe</span> <span className={styles.word}>in</span> <span className={styles.word}>crafting</span> <span className={styles.word}>snacks</span> <span className={styles.word}>that</span> <span className={styles.word}>are</span> <span className={styles.word}>more</span> <span className={styles.word}>than</span> <span className={styles.word}>just</span> <span className={styles.word}>food.</span>
                </p>
                <p className={styles.highlightParagraph}>
                    <span className={styles.word}>Every</span> <span className={styles.word}>bite</span> <span className={styles.word}>is</span> <span className={styles.word}>a</span> <span className={styles.word}>testament</span> <span className={styles.word}>to</span> <span className={styles.word}>our</span> <span className={`${styles.word} ${styles.keyword}`}>PREMIUM</span> <span className={styles.word}>quality.</span>
                </p>
                <p className={styles.highlightParagraph}>
                    <span className={styles.word}>Made</span> <span className={styles.word}>with</span> <span className={`${styles.word} ${styles.keyword}`}>HOMEMADE</span> <span className={styles.word}>warmth,</span>
                </p>
                <p className={styles.highlightParagraph}>
                    <span className={styles.word}>and</span> <span className={styles.word}>driven</span> <span className={styles.word}>by</span> <span className={styles.word}>our</span> <span className={`${styles.word} ${styles.keyword}`}>PASSION</span> <span className={styles.word}>for</span> <span className={styles.word}>the</span> <span className={styles.word}>perfect</span> <span className={styles.word}>melt.</span>
                </p>
            </div>
        </section>
    );
}
