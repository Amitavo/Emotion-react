import React from "react";
import myimage from "../img/carouselNewRelease/carousel-1.jpg";

const CardNewRelease = ({ img = myimage }) => (
  <div className="card-new-release">
    <div className="new-release">
      <img src={img} alt="image"  className="img-fluid rounded"/>
    </div>
  </div>
);

export default CardNewRelease;
