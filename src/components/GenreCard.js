import React from "react";

import dummy from "../img/genre/mordern.jpg";

export default function GenreCard({ image = dummy, text = "Dummy" }) {
  return (
    <div className="genre-card " style={{ backgroundImage: `url(${image})` }}>
      <div className="gradient">
        <div className="text-box">
          <h3 className="card-title">{text}</h3>
          <h3 className="card-title">SONG</h3>
        </div>
      </div>
    </div>
  );
}
