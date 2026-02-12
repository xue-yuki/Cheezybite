"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./MenuSlider.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const menuItems = [
    {
        id: 1,
        name: "Dimsum Udang Keju",
        price: "IDR 35k",
        image: "/images/menu-platter.png", // Reuse platter for now
        theme: "#FFC845", // Yellow
    },
    {
        id: 2,
        name: "Dimsum Ayam",
        price: "IDR 30k",
        image: "/images/menu-platter.png",
        theme: "#B93628", // Red
    },
    {
        id: 3,
        name: "Lumpia Kulit Tahu",
        price: "IDR 32k",
        image: "/images/menu-platter.png",
        theme: "#5D3A29", // Brown
    },
    {
        id: 4,
        name: "Hakau Udang",
        price: "IDR 38k",
        image: "/images/menu-platter.png",
        theme: "#FFF6E0", // Cream
    },
];

export default function MenuSlider() {
    const containerRef = useRef<HTMLElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !sliderRef.current) return;

        const sections = gsap.utils.toArray(`.${styles.card}`);

        // Horizontal scroll logic
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + sliderRef.current!.offsetWidth,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const handleHover = (color: string) => {
        gsap.to(containerRef.current, {
            backgroundColor: color,
            duration: 0.5
        });
    };

    const handleLeave = () => {
        gsap.to(containerRef.current, {
            backgroundColor: "var(--color-background)",
            duration: 0.5
        });
    };

    return (
        <section className={styles.menuSection} ref={containerRef}>
            <h2 className={styles.title}>Our Collection</h2>
            <div className={styles.sliderContainer} ref={sliderRef}>
                <div className={styles.sliderTrack}>
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={styles.card}
                            onMouseEnter={() => handleHover(item.theme)}
                            onMouseLeave={handleLeave}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={500}
                                    height={500}
                                    className={styles.productImage}
                                />
                            </div>
                            <div className={styles.info}>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button className={styles.detailBtn}>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
