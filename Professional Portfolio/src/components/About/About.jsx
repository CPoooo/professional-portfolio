import React from "react";
import { getImageUrl } from "../../utils";
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcons} src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>front end with experience responsive blah blah</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcons} src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>back end with experience responsive blah blah backend also APIS?</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcons} src={getImageUrl("about/brainIcon.png")} alt="Brain icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Engineer</h3>
              <p>I have experience and many projects utilizing Machine Learning, Deep Learning, LLM, and NLP </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
