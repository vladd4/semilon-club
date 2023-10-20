import { useState } from "react";
import styles from "./Header.module.scss";
import BurgerIcon from "../../assets/hamburger.png";
import BurgerDark from "../../assets/hamburger_black.png";
import LogoText from "../../assets/logo-text-dark.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import useScroll from "../../hooks/useScroll";
import Map from "../../assets/map.png";
import MapDark from "../../assets/map_dark.png";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const [contClicked, setContClicked] = useState(false);
  const handleContClick = () => {
    setContClicked(!contClicked);
  };
  const { isScrolled } = useScroll();
  return (
    <header className={`${styles.root} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.wrapper}>
        <img
          onClick={handleClick}
          alt="Hamburger"
          id="burgerIcon"
          src={isScrolled ? BurgerDark : BurgerIcon}
          className={`${styles.image} ${clicked ? styles.burger_clicked : ""}`}
        ></img>
        <h2 className={`${styles.h2} ${isScrolled ? styles.scrolled_h2 : ""}`}>
          Меню
        </h2>
      </div>
      <img
        className={`${styles.logo} ${isScrolled ? styles.scrolled_logo : ""}`}
        alt="Semilon Logo"
        src={LogoText}
      />
      <article
        className={`${styles.article_wrap} ${
          isScrolled ? styles.scrolled_wrap : ""
        }`}
      >
        <div className={styles.contact_block}>
          <p className={styles.cont_p} onClick={handleContClick}>
            Контакти
          </p>
          <div
            className={`${styles.div} ${
              contClicked ? styles.contact_clicked : ""
            }`}
          >
            <h5>E-mail:</h5>
            <p>
              <a href="mailto:semilon.club@gmail.com">semilon.club@gmail.com</a>
            </p>
            <h5>Телефони:</h5>
            <p>
              <a href="tel:+380960305022">(096) 030-50-22</a>
            </p>
            <p>
              <a href="tel:+380505459324">(050) 545-93-24</a>
            </p>
            <h5>Адреса:</h5>
            <p>с. Вислобоки,</p>
            <p>вул. Незалежності 5</p>
          </div>
        </div>
        <a
          className={styles.a_map}
          href="https://www.google.com/maps/place/Semillon+Club/@49.9426286,24.1735421,17z/data=!3m1!4b1!4m9!3m8!1s0x473ac58215b7c0f9:0xf416d980d1e6ce5b!5m2!4m1!1i2!8m2!3d49.9426286!4d24.1735421!16s%2Fg%2F11g2z6s6sq?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.map_block}>
            <img alt="Map" src={isScrolled ? MapDark : Map} />
            <p>На карті</p>
          </div>
        </a>
      </article>
      <BurgerMenu
        isScrolled={isScrolled}
        clicked={clicked}
        setClicked={setClicked}
      />
    </header>
  );
};

export default Header;
