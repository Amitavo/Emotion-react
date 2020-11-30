import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenreVideoCard from "../components/GenreVideoCard";
import Dash from "../components/Dash";

const Meditational = () => {
  return (
    <div>
      <Navbar />
      <body className="p-lg-5 p-sm-1">
        <h1 className="text-center font-weight-bold mt-5 pt-5">
          All New Meditational Songs.
        </h1>
        <Dash />
        <div className="container-fluid bg-light p-lg-4 p-sm-1 mt-5">
          <GenreVideoCard
            videoid="Y2xqvh4lXBE"
            videoTitle="The Mother - Mira Maa | Rishi Aurobindo | Spiritual | Emotion Music"
            dt="Aug 31, 2020"
          />
          <GenreVideoCard
            videoid="yD9dLAjYu2s"
            videoTitle="Eternal Peace | Meditation | Heal your mind | Emotion music "
            dt="Sep 6, 2020"
          />
          <GenreVideoCard
            videoid="Z0xeBgqitZU"
            videoTitle="Surrender to the Mother | Mira Maa | Spiritual | Emotion Music"
            dt="Sep 10, 2020"
          />
          <GenreVideoCard
            videoid="qfymO4mFVcM"
            videoTitle="Dakile Jodi | Sahana Debi | Sulagna Dey Mallik | Arnab Bhattacharya | Anupam Mallik "
            dt="Nov 24, 2020"
          />
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default Meditational;
