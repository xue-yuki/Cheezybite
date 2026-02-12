"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { gsap } from "gsap";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("/");

    const navItems = [
        { name: "Beranda", href: "/" },
        { name: "Cerita Kami", href: "#story" },
        { name: "Menu", href: "#menu" },
        { name: "Kemitraan", href: "#partnership" },
        { name: "Kontak", href: "#contact" },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.navLink} ${activeLink === item.href ? styles.active : ""}`}
                        onClick={() => setActiveLink(item.href)}
                    >
                        {item.name}
                        {activeLink === item.href && (
                            <span className={styles.meltIndicator}></span>
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
