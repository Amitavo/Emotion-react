import React from "react";
import Navbar from "../components/Navbar";
import { Jumbotron } from "reactstrap";
import Footer from "../components/Footer";
import AboutUsBg from "../img/aboutUsBg.jpg";
import Dash from "../components/Dash";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="p-5 about-us">
          <h1 className="display-3 text-center text-white mt-5 pt-5 title1 ">
            ABOUT US.
          </h1>
        </div>
        <div className="container pt-5">
          <h1 className="text-center font-weight-bold d-none">Our Vision</h1>

          <div
            className="container border w-75 mt-3 mb-5 "
            style={{ borderRadius: "20px", paddingTop: "30px" }}
          >
            <p className="pt-3 body-copy ">
              <span>Emotion Music</span> - A musical platform "emotionally
              your's" With constraints on our movement and normal life
              restricted owing to Covid crisis world wide, we have been working
              out to create a musical platform wherein we share and connect
              together the soulful musical melodies hence we founded this record
              label company. Emotion Music 2020. Our aim is to release bouquet
              of musical melodies with artists, lyricts, musicians creating
              their original music/song/lyrics and to share all over the world.
              Its our deep endeavour of create and release musics on original
              new regional songs, meditation, folk, instrumental, classical, new
              modern song. We are dedicatedly working on releasing original
              musics and keeping our channel restricted from releasing any music
              based on cover songs/remakes/remixes. You may join hands with us
              in exploring this melodious journey of emotions. Stay tune as its
              Emotionally yours.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
