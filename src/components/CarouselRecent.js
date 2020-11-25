import React, { Component } from "react";
import Slider from "react-slick";
import CardNewRelease from "../components/CardNewRelease";
import Car1 from "../img/carouselNewRelease/carousel-1.jpg";
import Car2 from "../img/carouselNewRelease/carousel-2.jpg";
import Car3 from "../img/carouselNewRelease/carousel-3.jpg";
import Car4 from "../img/carouselNewRelease/carousel-4.jpg";
import Car5 from "../img/carouselNewRelease/carousel-5.jpg";
import Car6 from "../img/carouselNewRelease/carousel-6.jpg";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className=" section-new-release w-100 pl-5 pr-5">
        <center>
          <h2 className="main-heading">New Release</h2>
        </center>
        <div className="">
          <Slider {...settings}>
            <div className="pl-1 pr-1">
              <CardNewRelease img={Car1} />
            </div>
            <div className="pl-1 pr-1">
              <CardNewRelease img={Car2} />
            </div>
            <div className="pl-1 pr-1">
              <CardNewRelease img={Car3} />
            </div>
            <div className="pl-1 pr-1">
              <CardNewRelease img={Car4} />
            </div>
            <div className="pl-1 pr-1">
              <CardNewRelease img={Car5} />
            </div>
            <div className="pl-1 pr-1">
              <CardNewRelease img={Car6} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}


