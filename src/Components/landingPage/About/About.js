import React from 'react';
import styles from "./About.module.css";
import Instruction from './Sections/Download/Instruction';
import Footer from './Sections/Footer/Footer';
import Playsection from './Sections/PlaySection/Playsection';
import Roadmap from './Sections/Roadmap/Roadmap';
import VideoSection from './Sections/VideoContent/VideoSection';

function About() {
  return (
    <div className={styles.about}>
    <div className="aboutContainer">
        <VideoSection />
        <Playsection />
        <Roadmap />
        <Instruction />
        <Footer />
    </div>
    </div>
  )
}

export default About