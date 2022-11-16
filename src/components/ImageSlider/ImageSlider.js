import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./ImageSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  //   const [defaultImage, setDefaultImage] = useState({});
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="body">
      <Slider {...settings}>
        {SliderData.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src={item.image} />
              <p className="long-text">{item.text}</p>
              <footer className="footer-name">
                <h1>{item.name}</h1>
              </footer>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
