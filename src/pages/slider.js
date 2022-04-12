import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import joker from "../Assets/Photos/joker.jpg";
import sweets from "../Assets/Photos/sweets.jpg";
import wildwind from "../Assets/Photos/wildwind.jpg";
import lion from "../Assets/Photos/lion.jpg";
import buffalo from "../Assets/Photos/buffalo.jpg";
import spartan from "../Assets/Photos/spartan.jpg";


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
  return (

        <Slider {...settings} className="slider">

            <div>
                    <img src={sweets} className="sweets"/>
            </div>

            <div>
                    <img src={wildwind}  className="wildwind" />
            </div>

            <div>
                    <img src={lion}  className="lion" />
            </div>

            <div>
                    <img src={joker}  className="joker" />
            </div>

            <div>
                    <img src={spartan}  className="spartan" />
            </div>

            <div>
                    <img src={buffalo}  className="buffalo" />
            </div>

        </Slider>

  )
}

export default Carousel;

