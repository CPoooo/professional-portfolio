import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Cameron</h1>
        <p className={styles.description}>
          I'm a full stack developer with 1 million years of experience. Reach
          out if you want to get in touch
        </p>
        <a href="mailto:cameronpool2019@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl('hero/Headshot.jpg')} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
