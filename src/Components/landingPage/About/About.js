import React from 'react';
import styles from "./About.module.css";
import Playsection from './Sections/VideoContent/PlaySection/Playsection';
import VideoSection from './Sections/VideoContent/VideoSection';

function About() {
  return (
    <div className={styles.about}>
    <div class="aboutContainer">
        <VideoSection />
        <Playsection />
    </div>
    </div>
  )
}

export default About