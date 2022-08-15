import Head from "next/head";
import Image from "next/image";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";

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
      </div>
    </>
  );
}
