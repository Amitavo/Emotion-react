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
      <div className="site-container">
        <GenreCard text="Mordern" />
        <GenreCard text="Traditional" image={Traditional} />
        <GenreCard text="Folk" image={Folk} />
        <GenreCard text="Devotional" image={Devotional} />
        <GenreCard text="Classical" image={Classic} />
        <GenreCard text="Regional" image={Regional} />
      </div>
    </div>
  );
}
