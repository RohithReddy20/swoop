import React from 'react';
import styles from "./VideoSection.module.css";

import vidImg from "../../../../../assets/images/VideoLayout.png";

function VideoSection() {
  return (
    <div className={styles.videoSection}>
    <div className={styles.title}>
    SWOOP:
    <div>The Future of Fantasy Cricket</div>
    </div>
    <div className={styles.video}>
    <img src={vidImg} alt="video" />
    </div>
    </div>
  )
}

export default VideoSection