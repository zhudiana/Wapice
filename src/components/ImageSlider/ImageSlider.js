import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./ImageSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <button className="next-button">
          <FaArrowRight className="next-arrow" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return <div onClick={onClick} />;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
