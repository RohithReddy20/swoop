import React from "react";
import styles from "./Playsection.module.css";

import play1 from "../../../../../../assets/images/Play1 (1).png";
import play2 from "../../../../../../assets/images/Play2 (1).png";
import play3 from "../../../../../../assets/images/Play3 (1).png";
import pana from "../../../../../../assets/images/pana.png";

function Playsection() {
  return (
    <div className={styles.playsection}>
      <div className={styles.title}>How to play!</div>
      <div className={styles.imgContainer}>
        <img src={play1} alt="" />
        <img src={play2} alt="" />
        <img src={play3} alt="" />
      </div>
      <div className={styles.whySwoop}>
        <div className={styles.whySwoopImg}>
          <img src={pana} alt="pana" />
        </div>
        <div className={styles.whySwoopInfo}>
          <div className={styles.infoHeader}>Why Swoop?</div>
          <div className={styles.infoC}>
            {/* <span> */}
              {/* <svg
                width="5"
                height="63"
                viewBox="0 0 5 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="5" height="63" fill="#FCF778" />
              </svg> */}
              Play and Earn in Crypto
            {/* </span> */}
          </div>
          <div className={styles.benefits}>
          <div> No lengthy or complex sign up process. A phone number is all you need</div>
          <div>Prizes paid instantly, even for free contests</div>
          <div>Win Cricket NFTs to collect, trade and utilise in-game</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playsection;
