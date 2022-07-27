import React from 'react';
import Navbar from '../Navbar/Navbar';

import styles from "./Home.module.css";

import batsman from "../../../assets/images/batsman.svg";
import homeImg from "../../../assets/images/Illustration11.png";
import rating from "../../../assets/images/rating.svg";
import web3 from "../../../assets/images/web3.0.svg";
import download from "../../../assets/images/dowload.svg";
import nearlogo from "../../../assets/images/NEARLogo.svg";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Home() {
  return (
    <div className={styles.home}>
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.homeContent}>
        <div className={styles.homeInfo}>
        <div className={styles.note}>
        <span><img src={batsman} alt="batsman" />Global launch for ICC Men's T20 World Cup 2022</span>
        </div>
        <div className={styles.title}>
        The <span>Global Fantasy Cricket App</span> on the Blockchain
        </div>
        <div className={styles.form}>
          <PhoneInput
          enableSearch
          // country='us'
          placeholder='Enter The mobile number'
          // regions={['north-america', 'carribean']}
        />
        <button className={styles.linkButton}>Get App Link</button>
        </div>
        </div>
        <div className={styles.homeImg}>
        <img src={homeImg} alt="homeImg" />
        </div>
      </div>
    </div>
    <div className={styles.homeFooter}>
    
      <div className={styles.userRating}>
      <span><img style={{height: "50px"}} src={rating} alt="rating" /></span><div><div>4.8/5</div> user rating</div>
      </div>
      <div className={styles.userRating}>
      <span><img style={{height: "50px"}} src={web3} alt="rating" /></span><div><div>Play & Earn</div> in crypto</div>
      </div>
      <div className={styles.userRating}>
      <span><img style={{height: "50px"}} src={download} alt="rating" /></span><div><div>200k+</div> downloads</div>
      </div>
      <div className={styles.userRating}>
      <div><div>Releasing</div> soon on</div>
      <span><img style={{height: "50px"}} src={nearlogo} alt="rating" /></span>
      </div>
    
    </div>
    </div>
  )
}

export default Home