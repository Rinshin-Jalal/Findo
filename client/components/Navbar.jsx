import React from "react";
import nightmode from "../public/images/nightmode.png";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <img src="/images/logo.png" className={styles.logo} alt="logo" />
          <h1>FINDO</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <a href="/" className={styles.link}>
              Find Talent
            </a>
            <a href="/" className={styles.link}>
              Become a Talent
            </a>
            <a href="/" className={styles.link}>
              Services
            </a>
            <img src="/images/nightmode.png" alt="Switch to Dark mode" className={styles.nightmodeimg} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
