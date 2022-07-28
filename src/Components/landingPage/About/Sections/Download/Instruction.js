import React from "react";
import styles from "./Instruction.module.css";

import install1 from "../../../../../assets/images/install1.png";
import install2 from "../../../../../assets/images/install2.png";
import install3 from "../../../../../assets/images/install3.png";
import ftx from "../../../../../assets/images/FTX.svg";
import solar from "../../../../../assets/images/Solar eco fund.svg";
import our from "../../../../../assets/images/Our Partners.svg";

function Instruction() {
  return (
    <div>
      <div className={styles.instruction}>
        <div className={styles.title}>How to Install Our Android App?</div>
        <div className={styles.note}>
          Download the official Swoop Android from our website.
        </div>
        <div className={styles.note}>
          Fantasy sports apps that allow you to win money are not available on the
          Google Play Store.
        </div>
        <div className={styles.imgContainer}>
          <img src={install1} alt="" />
          <img src={install2} alt="" />
          <img src={install3} alt="" />
        </div>
      </div>
      <div className={styles.footer}>
      <img src={our} alt="" /><img src={ftx} alt="" /><img src={solar} alt="" />
      </div>
    </div>
  );
}

export default Instruction;
