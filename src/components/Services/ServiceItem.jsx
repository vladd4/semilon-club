import styles from "./Services.module.scss";
import ImageSlider from "../Slider/Slider";
import useAnimate from "../../hooks/useAnimate";

const ServiceItem = ({
  icon,
  title,
  info,
  info_add,
  sliderImages,
  reversed,
}) => {
  const { ref, isAnimated } = useAnimate();
  return (
    <article
      ref={ref}
      id={title}
      className={`${styles.sliderRow} ${reversed ? styles.reverse : ""} 
       animated-element ${isAnimated ? "animate" : ""}`}
    >
      <div className={styles.textBlock}>
        <div
          className={`${styles.textBlock_H} ${reversed ? styles.reverse : ""}`}
        >
          <img alt="Басейн" src={icon}></img>
          <h2>{title}</h2>
          <span></span>
        </div>
        <p className={`${styles.p} ${reversed ? styles.reversed_p : ""}`}>
          {info}
        </p>
        <p className={`${styles.p} ${reversed ? styles.reversed_p : ""}`}>
          {info_add}
        </p>
        {title === "Басейн" ? (
          <article className={styles.table}>
            <div className={styles.row1}>
              <div>
                <h5>
                  Будні
                  <br /> Пн-Пт
                </h5>
                <p>10:00-20:00</p>
              </div>
              <div>
                <h5>Вихідні Святкові</h5>
                <p>10:00-21:00</p>
              </div>
            </div>
            <div className={styles.main_part}>
              <div>
                <p className={styles.h}>Базовий</p>
                <p className={styles.p_25}>300</p>
                <p>400</p>
              </div>
              <div>
                <p className={styles.h}>Дитячий базовий</p>
                <p className={styles.p_5}>200</p>
                <p>200</p>
              </div>
              <div>
                <p className={styles.h}>Дитячий безкоштовний</p>
                <p className={styles.p_free}>Безкоштовно</p>
              </div>
            </div>
          </article>
        ) : null}
      </div>
      <ImageSlider
        images={sliderImages}
        id="slider-serv"
        width={550}
      ></ImageSlider>
    </article>
  );
};
export default ServiceItem;
