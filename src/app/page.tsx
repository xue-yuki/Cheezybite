import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import ProductExplosion from "@/components/home/ProductExplosion";
import MenuSlider from "@/components/home/MenuSlider";
import OrderFlow from "@/components/home/OrderFlow";
import Partnership from "@/components/home/Partnership";
import SocialProof from "@/components/home/SocialProof";
import FAQ from "@/components/home/FAQ";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Story />
      <ProductExplosion />
      <MenuSlider />
      <OrderFlow />
      <Partnership />
      <SocialProof />
      <FAQ />
    </main>
  );
}
