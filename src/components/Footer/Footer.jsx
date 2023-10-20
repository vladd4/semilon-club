import styles from "./Footer.module.scss";
import Logo from "../../assets/logo.png";
import TextLogo from "../../assets/logo_text.png";
import Insta from "../../assets/instagram.svg";
import Face from "../../assets/facebook.svg";
import Map from "../../assets/map.png";

const Footer = () => {
  return (
    <footer className={styles.root} id="footer">
      <article className={styles.firstRow}>
        <p>Зателефонуйте нам</p>
        <img src={Logo} alt="Semilon Club" />
        <p>Напишіть нам</p>
      </article>
      <article className={styles.secondRow}>
        <p>
          <a className={styles.linkA} href="tel:+380960305022">
            +38 (096) 030-50-22
          </a>
        </p>
        <img src={TextLogo} alt="Semilon Club" />
        <p>
          <a className={styles.linkA} href="mailo:semillon.club@gmail.com">
            semillon.club@gmail.com
          </a>
        </p>
      </article>
      <article className={styles.thirdRow}>
        <div>
          <a
            href="https://www.instagram.com/semillon_club/"
            target="_blank"
            rel="noreferrer"
            className={styles.mediaLink}
          >
            <img className={styles.media} src={Insta} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/people/Semillon-club/100063535301775/"
            target="_blank"
            rel="noreferrer"
            className={styles.mediaLink}
          >
            <img className={styles.media} src={Face} alt="Facebook" />
          </a>
        </div>
        <p className={styles.copy}>
          Copyrights © <i>Semillon Club</i>
        </p>
        <div className={styles.mapDiv}>
          <p>Знайдіть нас</p>
          <a
            href="https://maps.app.goo.gl/u6YuU1oY2DTRyxFV8"
            target="_blank"
            rel="noreferrer"
            className={styles.mapLink}
          >
            <img className={styles.map} src={Map} alt="Карта" />
          </a>
        </div>
      </article>
    </footer>
  );
};
export default Footer;
