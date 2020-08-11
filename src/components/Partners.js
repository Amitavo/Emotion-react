import React from "react";
import gaana from "../img/gaana.png";
import saavan from "../img/saavn.png";
import amazon from "../img/amazon-music-logo.jpg";
import wink from "../img/wink-music.png";

const Partners = () => (
  <div className="partners">
    <img src={amazon} height="60px" alt="gaana" />
    <img src={gaana} height="60px" alt="gaana" />
    <img src={saavan} height="60px" alt="gaana" />
    <img src={wink} height="60px" alt="gaana" />
  </div>
);

export default Partners;
