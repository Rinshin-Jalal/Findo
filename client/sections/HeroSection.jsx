import React from 'react'
import Navbar from "../components/Navbar";
import styles from "../styles/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
        <Navbar />
        <div className={styles.heroMain}>
            <h1>Find The <span>BEST</span></h1>
            <p>GET THE MOST WIDERANGING DEVELOPERS ACROSS THE WORLD</p>
            <button className={styles.hireBtn}>Hire A Talent!</button>
        </div>
    </div>
  )
}

export default HeroSection