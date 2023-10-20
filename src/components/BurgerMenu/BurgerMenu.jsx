import styles from "./BurgerMenu.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useRef } from "react";
import { burgerLinks } from "../../store/links_store";
import Logo from "../../assets/logo_burger.svg";
import Span from "../../assets/close.svg";
import Inst from "../../assets/insta.svg";
import Face from "../../assets/face.svg";

const BurgerMenu = ({ isScrolled, clicked, setClicked }) => {
  const componentRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const burgerIcon = document.getElementById("burgerIcon");
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target) &&
        event.target !== burgerIcon
      ) {
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setClicked]);
  return (
    <nav
      id="burger"
      ref={componentRef}
      className={`${styles.root} ${isScrolled ? styles.scrolled_root : ""} ${
        clicked ? styles.show_root : ""
      }`}
    >
      <img
        onClick={() => setClicked((prev) => !prev)}
        alt="close"
        src={Span}
        className={styles.span}
      />
      <img alt="Semillon" src={Logo} className={styles.logo} />
      <article>
        {burgerLinks.map((link) => {
          return (
            <AnchorLink
              onClick={() => setClicked(false)}
              className={`${styles.a} ${isScrolled ? styles.scrolled_a : ""}`}
              key={link.href}
              href={link.href}
            >
              {link.title}
            </AnchorLink>
          );
        })}
      </article>
      <div>
        <a
          href="https://www.instagram.com/semillon_club/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Instagram" src={Inst} />
        </a>
        <a
          href="https://www.facebook.com/people/Semillon-club/100063535301775/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Facebook" src={Face} />
        </a>
      </div>
    </nav>
  );
};
export default BurgerMenu;
