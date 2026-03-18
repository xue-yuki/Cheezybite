"use client";
import React, { useRef, useState } from "react";
import styles from "./MenuCollection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const menuItems = [
    {
        id: "m1",
        name: "Lumpia Renyah",
        desc: "Lumpia emas digoreng sempurna dengan isian daging ayam premium dan sayuran segar. Disajikan dengan saus asam manis.",
        price: "Rp 25.000",
        numericPrice: 25000,
        auraColor: "#FFC845", // Yellow
        // INTRUKSI: Masukkan file gambar ke folder "public" lalu panggil namanya disini. 
        // Contoh: Jika file kamu "public/lumpia.png", ubah string di bawah menjadi "/lumpia.png"
        image: "" 
    },
    {
        id: "m2",
        name: "Dimsum Udang Keju",
        desc: "Kombinasi sempurna daging udang giling segar berpadu dengan gurihnya keju cheddar mozzarella kualitas premium.",
        price: "Rp 35.000",
        numericPrice: 35000,
        auraColor: "#B93628", // Red
        image: "" // Ganti dengan "/nama-gambar-dimsum.png"
    },
    {
        id: "m3",
        name: "Pangsit Pedas",
        desc: "Pangsit rebus lembut disiram dengan chili oil otentik khas Cheezzybite yang kaya rempah dan menggugah selera.",
        price: "Rp 28.000",
        numericPrice: 28000,
        auraColor: "#5D3A29", // Brown
        image: "" // Ganti dengan "/nama-gambar-pangsit.png"
    },
    {
        id: "m4",
        name: "Siomay Mentai",
        desc: "Siomay ayam udang kukus klasik disajikan lengkap dengan saus mentai bakar (torched) yang meleleh di mulut.",
        price: "Rp 40.000",
        numericPrice: 40000,
        auraColor: "#e88022", // Orange
        image: "" // Ganti dengan "/nama-gambar-siomay.png"
    }
];

export default function MenuCollection() {
    const sectionRef = useRef<HTMLElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    const [activeIndex, setActiveIndex] = useState(1); // Start with middle item active
    
    // Cart State: { 'm1': 2, 'm2': 1 }
    const [cart, setCart] = useState<Record<string, number>>({});

    useGSAP(() => {
        if (!sectionRef.current) return;

        // Entrance animation
        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

    }, { scope: sectionRef });

    // Handle Card Click directly to focus it smoothly
    const handleCardClick = (index: number) => {
        setActiveIndex(index);
    };

    // Update Cart Quantity
    const updateQuantity = (e: React.MouseEvent, id: string, delta: number) => {
        e.stopPropagation(); // Prevent card from triggering active sliding when clicking buttons
        setCart(prev => {
            const newQty = (prev[id] || 0) + delta;
            if (newQty <= 0) {
                const newCart = { ...prev };
                delete newCart[id];
                return newCart;
            }
            return { ...prev, [id]: newQty };
        });
    };

    const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
        const item = menuItems.find(m => m.id === id);
        return sum + (item?.numericPrice || 0) * qty;
    }, 0);

    const handleWhatsAppCheckout = () => {
        if (totalItems === 0) return;
        
        let text = "Halo Cheezybite!\nSaya ingin pesan:\n\n";
        
        Object.entries(cart).forEach(([id, qty]) => {
            const item = menuItems.find(m => m.id === id);
            if (item) {
                const itemTotal = item.numericPrice * qty;
                text += `- ${qty}x ${item.name} = Rp ${itemTotal.toLocaleString('id-ID')}\n`;
            }
        });
    
        text += `\n*Total: Rp ${totalPrice.toLocaleString('id-ID')}*\n\nTerima kasih.`;
    
        const encodedText = encodeURIComponent(text);
        const waNumber = "6285313675376"; // You can easily change this number later
        window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
    };

    return (
        <section className={styles.menuSection} id="menu" ref={sectionRef}>
            <div className={styles.header}>
                <h2 className={styles.title}>Koleksi Menu</h2>
                <p className={styles.subtitle}>Mahakarya rasa yang paling diminati. Digigit meleleh, dikunyah nagih.</p>
            </div>

            <div className={styles.carouselContainer}>
                <div 
                    className={styles.sliderTrack} 
                    ref={sliderRef}
                    style={{ 
                        '--active-index': activeIndex 
                    } as React.CSSProperties}
                >
                    {menuItems.map((item, index) => {
                        const isActive = index === activeIndex;
                        const isPrev = index === activeIndex - 1;
                        const isNext = index === activeIndex + 1;
                        
                        let cardStateClass = '';
                        if (isActive) cardStateClass = styles.activeCard;
                        else if (isPrev) cardStateClass = styles.prevCard;
                        else if (isNext) cardStateClass = styles.nextCard;
                        else cardStateClass = styles.hiddenCard;

                        const qty = cart[item.id] || 0;

                        return (
                            <div 
                                key={item.id} 
                                className={`${styles.menuCard} ${cardStateClass}`}
                                ref={el => { itemRefs.current[index] = el; }}
                                onClick={() => handleCardClick(index)}
                            >
                                {/* Glowing Aura Background behind the pseudo-image */}
                                <div 
                                    className={styles.productAura} 
                                    style={{ background: `radial-gradient(circle, ${item.auraColor} 0%, transparent 60%)` }}
                                ></div>

                                {/* Product Visual Container (Image or Placeholder) */}
                                <div className={styles.productVisual}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className={styles.productImage} />
                                    ) : (
                                        <div className={styles.imagePlaceholder} style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))` }}>
                                            <svg className={styles.placeholderIcon} style={{ color: item.auraColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                <polyline points="21 15 16 10 5 21"></polyline>
                                            </svg>
                                            <span className={styles.placeholderText} style={{ color: item.auraColor }}>Tambah Foto</span>
                                        </div>
                                    )}
                                </div>

                                {/* Glassmorphic Info Card */}
                                <div className={styles.infoOverlay}>
                                    <div className={styles.infoContent}>
                                        <h3 className={styles.itemName}>{item.name}</h3>
                                        <p className={styles.itemDesc}>{item.desc}</p>
                                        <div className={styles.itemFooter}>
                                            <span className={styles.itemPrice}>{item.price}</span>
                                            
                                            {/* Quantity Control System */}
                                            {qty === 0 ? (
                                                <button 
                                                    className={styles.addBtn}
                                                    onClick={(e) => updateQuantity(e, item.id, 1)}
                                                >
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                </button>
                                            ) : (
                                                <div className={styles.qtyControl}>
                                                    <button 
                                                        className={styles.qtyBtn}
                                                        onClick={(e) => updateQuantity(e, item.id, -1)}
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                    </button>
                                                    <span className={styles.qtyText}>{qty}</span>
                                                    <button 
                                                        className={styles.qtyBtn}
                                                        onClick={(e) => updateQuantity(e, item.id, 1)}
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className={styles.pagination}>
                {menuItems.map((_, index) => (
                    <button 
                        key={`dot-${index}`}
                        className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                        onClick={() => handleCardClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Floating Cart Indicator */}
            {totalItems > 0 && (
                <div className={styles.floatingCartContainer}>
                    <div className={styles.floatingCartPanel}>
                        <div className={styles.cartInfo}>
                            <div className={styles.cartBadge}>{totalItems}</div>
                            <div className={styles.cartPriceDetails}>
                                <span className={styles.cartTotalLabel}>Total Pesanan</span>
                                <span className={styles.cartTotalPrice}>Rp {totalPrice.toLocaleString('id-ID')}</span>
                            </div>
                        </div>
                        <button className={styles.checkoutBtn} onClick={handleWhatsAppCheckout}>
                            Pesan via WhatsApp
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkoutIcon}>
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
