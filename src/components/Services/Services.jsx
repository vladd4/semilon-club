import styles from "./Services.module.scss";
import { useEffect } from "react";
import ServiceItem from "./ServiceItem";
import { services } from "../../store/items_store";

const Services = () => {
  useEffect(() => {
    services.forEach((item) => {
      item.images.forEach((image) => {
        new Image().src = image;
      });
    });
  }, []);
  return (
    <>
      <section className={styles.root} id="services">
        {services.map((service) => {
          return (
            <ServiceItem
              key={service.title}
              icon={service.icon}
              title={service.title}
              info={service.info}
              info_add={service?.info_add}
              sliderImages={service.images}
              reversed={service.reversed}
            />
          );
        })}
      </section>
    </>
  );
};

export default Services;
