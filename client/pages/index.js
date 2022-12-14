import Head from "next/head";
import Image from "next/image";
import CategoriesSection from "../sections/CategoriesSection";
import DeveloperSection from "../sections/DeveloperSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import FooterSection from "../sections/FooterSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Findo</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="hero-container">
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <DeveloperSection />
        <FooterSection/>
      </div>
    </>
  );
}
