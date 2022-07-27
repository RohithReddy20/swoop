import React from 'react';
import styles from "./Navbar.module.css";
import logo from "../../../assets/images/swooplogo.svg";
import navMenu from "../../../assets/images/menuicon.svg";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.navWrapper}>
        <div className={styles.navitems}>
          <div className={styles.navitem}>How to play</div>
          <div className={styles.navitem}>About us</div>
          <div className={styles.navitem}>Road map</div>
          <div className={styles.navitem}>NFTs</div>
        </div>
        <div className={styles.navMenu}>
          <img src={navMenu} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
