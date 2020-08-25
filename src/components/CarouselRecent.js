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
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <div className="site-container section-new-release">
        <center>
          <h2 className="main-heading">New Release</h2>
        </center>
        <Slider {...settings}>
          <div>
            <CardNewRelease img={Car1} />
          </div>
          <div>
            <CardNewRelease img={Car2} />
          </div>
          <div>
            <CardNewRelease img={Car3} />
          </div>
          <div>
            <CardNewRelease img={Car4} />
          </div>
          <div>
            <CardNewRelease img={Car5} />
          </div>
          <div>
            <CardNewRelease img={Car6} />
          </div>
        </Slider>
      </div>
    );
  }
}
