import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "../../styles/App.scss";

const ImageSlider = ({ images, id, width }) => {
  return (
    <Splide
      options={{
        width: width,
        height: 600,
        arrows: true,
        type: "fade",
        speed: 1000,
      }}
      id={id}
    >
      {images.map((image, index) => {
        return id === "slider-serv" ? (
          <SplideSlide
            id="slides"
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
          ></SplideSlide>
        ) : (
          <SplideSlide id="slides" key={index}>
            <img alt="Slider" src={image} />
          </SplideSlide>
        );
      })}
      <div className="splide__arrows" />
    </Splide>
  );
};
export default ImageSlider;
