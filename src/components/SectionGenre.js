import React from "react";
import GenreCard from "../components/GenreCard";
import Traditional from "../img/genre/traditional.jpg";
import Folk from "../img/genre/folk.png";
import Devotional from "../img/genre/devotional.jpg";
import Classic from "../img/genre/classical.jpg";
import Regional from "../img/genre/regional.jpg";

export default function SectionGenre() {
  return (
    <div className="section-genre">
      <div className="container ">
        <div className="row ">
          <div className="col-lg-6 p-2 ">
            <GenreCard text="Bengali" />
          </div>
          <div className="col-lg-6 p-2 ">
            <GenreCard text="Devotional" image={Traditional} />
          </div>
          <div className="col-lg-6 p-2 ">
            <GenreCard text="Meditational" image={Folk} />
          </div>
          <div className="col-lg-6 p-2 ">
            <GenreCard text="Classical" image={Devotional} />
          </div>
        </div>
      </div>
    </div>
  );
}
