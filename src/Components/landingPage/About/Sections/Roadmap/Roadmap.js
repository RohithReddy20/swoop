import React from 'react';
import styles from "./Roadmap.module.css";

// import poly1 from "../../../../../assets/images/Q4 2021.png";
// import poly2 from "../../../../../assets/images/Q1 2022.png";
// import poly3 from "../../../../../assets/images/Q2 2022.png";
// import poly4 from "../../../../../assets/images/Q3 2022.png";
// import poly5 from "../../../../../assets/images/Q4 2022.png";
import bluetick from "../../../../../assets/images/bluetick.svg";
import yellowtick from "../../../../../assets/images/yellowtick.svg";
import pinkbox from "../../../../../assets/images/pinkbox.svg";

function Roadmap() {
  return (
    <div className={styles.roadmap}>
    <div className={styles.title}>Project Roadmap</div>
    <div className={styles.hexagons}>
    {/* <div className={styles.hex}><img src={poly1} alt="poly" /></div>
    <div className={styles.hex}><img src={poly2} alt="poly" /></div>
    <div className={styles.hex}><img src={poly3} alt="poly" /></div>
    <div className={styles.hex}><img src={poly4} alt="poly" /></div>
    <div className={styles.hex}><img src={poly5} alt="poly" /></div> */}
    <div className={`${styles.hexagon} ${styles.hexagon1}`}>
  <div className={styles.hextitle}>Q4 2021</div>
  <div className={styles.goals}>
    <div className={styles.goal}>
      <img src={bluetick} alt="box" /> Idea Conceptualized
  </div>
    <div className={styles.goal}>
      <img src={bluetick} alt="box" /> Proof-of-concept development
  </div>
    <div className={styles.goal}>
      <img src={bluetick} alt="box" /> Market analysis and research
  </div>
</div>
</div>


<div className={`${styles.hexagon} ${styles.hexagon2}`}>
  <div className={styles.hextitle}>Q1 2022</div>
  <div className={styles.goals}>
    <div className={styles.goal}>
      <img src={bluetick} alt="box" /> Seed raise
  </div>
    <div className={styles.goal}>
      <img src={bluetick} alt="box" /> Build Swoop team
  </div>
    <div className={styles.goal}>
      <img src={bluetick} alt="box" /> App development and release
  </div>
  <div className={styles.goal}>
      <img src={bluetick} alt="box" /> Community building
  </div>
</div>
</div>

<div className={`${styles.hexagon} ${styles.hexagon3}`}>
  <div className={styles.hextitle}>Q2 2022</div>
  <div className={styles.goals}>
    <div className={styles.goal}>
      <img src={yellowtick} alt="box" /> Launch in Indian T20 League
  </div>
   <div className={styles.goal}>
      <img src={yellowtick} alt="box" /> Sponsored Bitcoin prizes
  </div>
    <div className={styles.goal}>
      <img src={yellowtick} alt="box" /> User acquisition
  </div>
    <div className={styles.goal}>
      <img src={yellowtick} alt="box" /> Integration with payment providers
  </div>
</div>
</div>

<div className={`${styles.hexagon} ${styles.hexagon4}`}>
  <div className={styles.hextitle}>Q3 2022</div>
  <div className={styles.goals}>
    <div className={styles.goal}>
      <img src={pinkbox} alt="box" /> NFT launch
  </div>
  <div className={styles.goal}>
      <img src={pinkbox} alt="box" /> Devnet release
  </div>
    <div className={styles.goal}>
      <img src={pinkbox} alt="box" /> Partnerships with cricket associations
  </div>
    <div className={styles.goal}>
      <img src={pinkbox} alt="box" /> Mainnet release for T20 world cup
  </div>
</div>
</div>

<div className={`${styles.hexagon} ${styles.hexagon5}`}>
  <div className={styles.hextitle}>Q4 2022  {/*and<br></br> beyond*/}</div>
  <div className={styles.goals}>
    
    <div className={styles.goal}>
      <img src={pinkbox} alt="box" /> Phase 2 NFT launch
  </div>
  <div className={styles.goal}>
      <img src={pinkbox} alt="box" /> Multi-sport development
  </div>
    <div className={styles.goal}>
      <img src={pinkbox} alt="box" /> Code audit and improvement
  </div>
    <div className={styles.goal}>
      <img src={pinkbox} alt="box" /> Swoop token launch and IDO
  </div>
</div>
</div>

    </div>
    </div>
  )
}

export default Roadmap;