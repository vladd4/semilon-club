import React from "react";
import styles from "./Welcome.module.scss";
import ImageLogo from "../../assets/logo.png";
import TextLogo from "../../assets/logo_text.png";
import Arrow from "../../assets/Arrow 1.png";
import useAnimate from "../../hooks/useAnimate";

const Welcome = () => {
  const { ref, isAnimated } = useAnimate();
  return (
    <section className={styles.root} id="welcome">
      <article
        ref={ref}
        className={`${styles.article} animated-element ${
          isAnimated ? "animate" : ""
        }`}
      >
        <img
          alt="Semilon Club"
          src={ImageLogo}
          className={styles.imageLogo}
        ></img>
        <div className={styles.wrapper}>
          <img
            alt="Semilon Club"
            className={styles.textLogo}
            src={TextLogo}
          ></img>
          <p className={styles.p}>
            Semillon Club - ваш ідеальний відпочинок: святкуйте події,
            організовуйте вечірки, релаксуйте у басейні та сауні.
          </p>
        </div>
      </article>
      <img alt="Arrow" src={Arrow} className={styles.arrow}></img>
    </section>
  );
};

export default Welcome;
