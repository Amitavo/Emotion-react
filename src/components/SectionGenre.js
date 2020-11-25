import React from "react";
import GenreCard from "../components/GenreCard";
import Traditional from "../img/genre/traditional.jpg";
import Meditational from "../img/genre/meditational.jpg";
import Devotional from "../img/Images_by_Arindam/dakile_jodi_artwork.jpg";
import Classical from "../img/Images_by_Arindam/sanjhbati_ghor_artwork.jpg";

export default function SectionGenre() {
  return (
    <div className="section-genre">
      <div className="container ">
        <div className="row ">
          <div className="col-lg-6 p-2 ">
            <GenreCard text="Bengali" />
          </div>

          <div className="col-lg-6 p-2 ">
            <GenreCard text="Meditational" image={Meditational} />
          </div>
          <div className="col-lg-6 p-2 ">
            <GenreCard text="Devotional" image={Devotional} />
          </div>
          <div className="col-lg-6 p-2 ">
            <GenreCard text="Classical" image={Classical} />
          </div>
        </div>
      </div>
    </div>
  );
}
