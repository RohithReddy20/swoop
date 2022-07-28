import React from "react";
import styles from "./Playsection.module.css";

import play1 from "../../../../../assets/images/Play1 (1).png";
import play2 from "../../../../../assets/images/Play2 (1).png";
import play3 from "../../../../../assets/images/Play3 (1).png";
import pana from "../../../../../assets/images/pana.png";

function Playsection() {
  return (
    <div>
      <div className={styles.playsection}>
        <div className={styles.title}>How to play!</div>
        <div className={styles.imgContainer}>
          <img src={play1} alt="play" />
          <img src={play2} alt="play" />
          <img src={play3} alt="play" />
        </div>
        <div className={styles.whySwoop}>
          <div className={styles.whySwoopImg}>
            <img src={pana} alt="pana" />
          </div>
          <div className={styles.whySwoopInfo}>
            <div className={styles.infoHeader}>Why Swoop?</div>
            <div className={styles.infoC}>
              Play fantasy cricket for free and win crypto everyday
            </div>
            <div className={styles.benefits}>
              <div>
                No lengthy or complex sign up process. A phone number is all you
                need
              </div>
              <div>Prizes paid instantly, even for free contests</div>
              <div>Win Cricket NFTs to collect, trade and utilise in-game</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playsection;
