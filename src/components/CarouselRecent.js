import React, { Component } from "react";
import Slider from "react-slick";
import CardNewRelease from "../components/CardNewRelease";
import Car1 from "../img/new_release/bengali1.jpeg";
import Car2 from "../img/new_release/bengali2.jpeg";
import Car3 from "../img/new_release/bengali3.jpeg";
import Car4 from "../img/new_release/bengali4.jpeg";
import Car5 from "../img/new_release/bengali2.jpeg";
import Car6 from "../img/new_release/bengali4.jpeg";
import Dash from "./Dash";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
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
          <div className="mb-4">
            <Dash />
          </div>
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
