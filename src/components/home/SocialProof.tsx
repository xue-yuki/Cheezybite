import styles from "./SocialProof.module.css";

const reviews = [
    {
        id: 1,
        name: "Amanda S.",
        role: "Food Blogger",
        text: "Enak banget! Tekstur dimsumnya lembut dan keju mozzarellanya benar-benar lumer di mulut. Recommended buat ngemil sore!",
        // INTRUKSI: Masukkan file foto profil (avatar) ke folder "public" lalu panggil namanya disini. 
        // Contoh: Jika file kamu "public/amanda.png", ubah string di bawah menjadi "/amanda.png"
        avatar: "" 
    },
    {
        id: 2,
        name: "Budi P.",
        role: "Mahasiswa",
        text: "Porsi ngenyangin dan harganya pas di kantong mahasiswa. Paling suka sama pangsit pedasnya, bumbunya nendang banget!",
        avatar: "" // Ganti dengan "/foto-budi.jpg"
    },
    {
        id: 3,
        name: "Clara Wijaya",
        role: "Pecinta Kuliner",
        text: "Lumpia renyahnya juara! Udangnya kerasa fresh dan kejunya gak pelit sama sekali. Bakal jadi langganan Cheezzybite nih.",
        avatar: "" // Ganti dengan "/foto-clara.png"
    },
    {
        id: 4,
        name: "Dimas A.",
        role: "Karyawan Swasta",
        text: "Cocok banget buat temen ngopi atau ngeteh. Packagingnya rapi dan aman sampai kantor, mantap pokoknya!",
        avatar: "" // Ganti dengan "/foto-dimas.jpg"
    },
    {
        id: 5,
        name: "Erika T.",
        role: "Ibu Rumah Tangga",
        text: "Anak-anak saya suka sekali sama siomay mentainya, rasanya creamy dan gak bikin eneg. Sangat direkomendasikan!",
        avatar: "" // Ganti dengan "/foto-erika.png"
    }
];

export default function SocialProof() {
    return (
        <section className={styles.proofSection}>
            <h2 className={styles.title}>What They Say</h2>
            <div className={styles.scrollContainer}>
                <div className={styles.scrollTrack}>
                    {/* First set of reviews */}
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.reviewCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatarContainer}>
                                    {review.avatar ? (
                                        <img src={review.avatar} alt={review.name} className={styles.avatarImage} />
                                    ) : (
                                        <div className={styles.avatarPlaceholder}>
                                            {/* Initial logic */}
                                            {review.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.userInfo}>
                                    <h4 className={styles.userName}>{review.name}</h4>
                                    <span className={styles.userRole}>{review.role}</span>
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.reviewText}>"{review.text}"</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.stars}>
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Duplicated set for seamless infinite scrolling */}
                    {reviews.map((review) => (
                        <div key={`dup-${review.id}`} className={styles.reviewCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatarContainer}>
                                    {review.avatar ? (
                                        <img src={review.avatar} alt={review.name} className={styles.avatarImage} />
                                    ) : (
                                        <div className={styles.avatarPlaceholder}>
                                            {review.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.userInfo}>
                                    <h4 className={styles.userName}>{review.name}</h4>
                                    <span className={styles.userRole}>{review.role}</span>
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.reviewText}>"{review.text}"</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.stars}>
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
