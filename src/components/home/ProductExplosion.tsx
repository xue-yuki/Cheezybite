"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProductExplosion.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProductExplosion() {
    const containerRef = useRef(null);
    const skinRef = useRef(null);
    const shrimpRef = useRef(null);
    const cheeseRef = useRef(null);

    const labelsRef = useRef<(HTMLDivElement | null)[]>([]);

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

        // Animate layers apart
        tl.to(skinRef.current, { y: -200, rotation: 10 }, 0)
            .to(shrimpRef.current, { y: 0, rotation: -5 }, 0)
            .to(cheeseRef.current, { y: 200, rotation: 15 }, 0);

        // Animate labels opacity & position
        labelsRef.current.forEach((label, index) => {
            if (label) {
                tl.fromTo(label,
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.2, delay: index * 0.1 },
                    0.5 // Start halfway through scroll
                );
            }
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className={styles.explosionSection} ref={containerRef}>
            <h2 className={styles.title}>The Secret Inside</h2>

            <div className={styles.layersContainer}>
                {/* Layer 1: Skin */}
                <div className={styles.layerWrapper} ref={skinRef} style={{ zIndex: 3 }}>
                    <Image
                        src="/images/layer-skin.png"
                        alt="Dumpling Skin"
                        width={400}
                        height={400}
                        className={styles.layerImage}
                    />
                    <div className={styles.label} ref={el => { labelsRef.current[0] = el; }}>
                        <h3>Premium Skin</h3>
                        <p>Thin & Chewy Wrapper</p>
                        <div className={styles.line}></div>
                    </div>
                </div>

                {/* Layer 2: Shrimp */}
                <div className={styles.layerWrapper} ref={shrimpRef} style={{ zIndex: 2 }}>
                    <Image
                        src="/images/layer-shrimp.png"
                        alt="Shrimp Filling"
                        width={350}
                        height={350}
                        className={styles.layerImage}
                    />
                    <div className={styles.label} ref={el => { labelsRef.current[1] = el; }}>
                        <h3>Fresh Shrimp</h3>
                        <p>Whole prawns, not minced</p>
                        <div className={styles.line}></div>
                    </div>
                </div>

                {/* Layer 3: Cheese */}
                <div className={styles.layerWrapper} ref={cheeseRef} style={{ zIndex: 1 }}>
                    <Image
                        src="/images/layer-cheese.png"
                        alt="Cheese Core"
                        width={250}
                        height={250}
                        className={styles.layerImage}
                    />
                    <div className={styles.label} ref={el => { labelsRef.current[2] = el; }}>
                        <h3>Melted Core</h3>
                        <p>Premium Cheddar Block</p>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
