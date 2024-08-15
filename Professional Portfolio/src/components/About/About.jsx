import React from "react";
import { getImageUrl } from "../../utils";
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <video
          src={getImageUrl("throwing/Side view throw.mp4")}
          alt="me throwing"
          autoPlay
          loop
          muted
          playsInline
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcons} src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I have experience designing and building UI's with both vanilla JS and React</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcons} src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience building and maintaining RESTful APIs with Node.js, integrating with both PostgreSQL and MongoDB databases to efficiently manage and query data</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcons} src={getImageUrl("about/brainIcon.png")} alt="Brain icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Engineer</h3>
              <p>I have experience working on various projects involving Machine Learning, Deep Learning, Large Language Models (LLMs), and Natural Language Processing (NLP), utilizing frameworks like TensorFlow, PyTorch, and scikit-learn</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
