import styles from "./HotelRooms.module.scss";
import { useEffect, useRef, useState } from "react";
import { twoBed1, fourBed, hotels } from "../../store/items_store";
import ImageSlider from "../Slider/Slider";
import Line from "../../assets/яйця 2.png";
import useAnimate from "../../hooks/useAnimate";
import { handleLinkClick } from "../../utils/slider_helpers";
import { hotelLinks } from "../../store/links_store";

const HotelRooms = () => {
  const [activeService, setActiveService] = useState(twoBed1);
  const [sliderImages, setSliderImages] = useState(twoBed1.images);
  const infoRef = useRef(null);
  const handleMouse = () => {
    document
      .querySelector("#slider2-serv")
      .addEventListener("mouseover", () => {
        infoRef.current.classList.add(styles.hovered);
      });
    document.querySelector("#slider2-serv").addEventListener("mouseout", () => {
      infoRef.current.classList.remove(styles.hovered);
    });
  };
  useEffect(() => {
    handleMouse();
    hotels.forEach((item) => {
      item.images.forEach((image) => {
        new Image().src = image;
      });
    });
  }, []);
  const { ref, isAnimated } = useAnimate();
  return (
    <section className={styles.root} id="hotelRooms">
      <div
        ref={ref}
        className={`${styles.navSection} animated-element ${
          isAnimated ? "animate" : ""
        }`}
      >
        <div className={styles.linksRow}>
          {hotelLinks.map((item, index) => {
            return (
              <div key={index} className={styles.spanBlock}>
                <p
                  onClick={() =>
                    handleLinkClick(
                      item.service,
                      infoRef,
                      "slider2-serv",
                      setActiveService,
                      setSliderImages,
                      styles
                    )
                  }
                  className={
                    activeService === item.service ? styles.activeLink : ""
                  }
                >
                  {item.title}
                </p>
                <span className={styles.span}>
                  {activeService === item.service ? "|" : ""}
                </span>
              </div>
            );
          })}
        </div>
        <h1 className={styles.h}>Готель</h1>
      </div>
      <article
        ref={ref}
        className={`${styles.sliderBlock} animated-element ${
          isAnimated ? "animate" : ""
        }`}
      >
        <ImageSlider
          images={sliderImages}
          id="slider2-serv"
          width={800}
        ></ImageSlider>
        <div ref={infoRef} className={styles.hotelInfo}>
          <h2>{activeService.title}</h2>
          <p className={styles.p}>{activeService.info}</p>
          <div className={styles.iconBlock}>
            {activeService === fourBed ? (
              <>
                <div>
                  <img alt="Icon" src={activeService.icon1.img}></img>
                  <p>{activeService.icon1.title}</p>
                </div>
                <div>
                  <img alt="Icon" src={activeService.icon3.img}></img>
                  <p>{activeService.icon3.title}</p>
                </div>
                <div>
                  <img alt="Icon" src={activeService.icon2.img}></img>
                  <p>{activeService.icon2.title}</p>
                </div>
                <div>
                  <img alt="Icon" src={activeService.icon4?.img}></img>
                  <p>{activeService.icon4?.title}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <img alt="Icon" src={activeService.icon1.img}></img>
                  <p>{activeService.icon1.title}</p>
                </div>
                <div>
                  <img alt="Icon" src={activeService.icon3.img}></img>
                  <p>{activeService.icon3.title}</p>
                </div>
                <div>
                  <img alt="Icon" src={activeService.icon2.img}></img>
                  <p>{activeService.icon2.title}</p>
                </div>
              </>
            )}
          </div>
          <button>
            <a href="tel:+380960305022">(096) 030-50-22</a>
            <a href="tel:+380505459324">(050) 545-93-24</a>
          </button>
        </div>
      </article>
      <img alt="Dekor line" src={Line} className={styles.line}></img>
    </section>
  );
};

export default HotelRooms;
