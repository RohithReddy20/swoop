import React from 'react';
import styles from "./Footer.module.css";

import logo from "../../../../../assets/images/swooplogo.svg";
import twitter from "../../../../../assets/images/twitter.svg";
import fb from "../../../../../assets/images/fb.svg";
import discord from "../../../../../assets/images/discord.svg";
import insta from "../../../../../assets/images/insta.svg";
import medium from "../../../../../assets/images/medium.svg";

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}><img src={logo} alt="" /></div>
        <div className={styles.note}>To receive updates join our community of 11979 subscribers!</div>
        <div className={styles.form}><form action="">
        <input type="email" placeholder='Enter your email...'/>
        <button type="submit">Signup</button>
        </form></div>
        <div className={styles.socialMedia}>
        <div className={styles.social}>Follow us on:</div>
        <div className={styles.icons}>
        <div className="icon"><img src={twitter} alt="" /></div>
        <div className="icon"><img src={fb} alt="" /></div>
        <div className="icon"><img src={insta} alt="" /></div>
        <div className="icon"><img src={medium} alt="" /></div>
        <div className="icon"><img src={discord} alt="" /></div>
        </div>
        </div>
        <div className={styles.navitems}>
        <div className={styles.navitem}>Download App</div>
        <div className={styles.navitem}>How to play</div>
        <div className={styles.navitem}>About us</div>
        <div className={styles.navitem}>Road map</div>
        <div className={styles.navitem}>NFTs</div>
        <div className={styles.navitem}>Privacy Policy</div>
        <div className={styles.navitem}>Terms of Use</div>
        </div>
        <div className={styles.contact}>Contact Us At: <span>contact@swoop.games</span></div>
        <div className={styles.address}>Swoop Games Pvt. Ltd., J-Block, Sector-102,Gurugram</div>
        <div className={styles.copyrights}>Copyright © 2022 Swoop Technology Limited.
<div>All rights reserved.</div></div>
    </div>
  )
}

export default Footer