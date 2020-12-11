import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenreVideoCard from "../components/GenreVideoCard";
import Dash from "../components/Dash";

const Bengali = () => {
  return (
    <div>
      <Navbar />
      <body className="p-lg-5 p-sm-1 ">
        <h1 className="text-center font-weight-bold mt-5 ">
          All New Bengali Songs.
        </h1>
        <Dash />
        <div className="container-fluid bg-light p-lg-4 p-sm-1 mt-5">
          <GenreVideoCard
            videoid="oI1WDCjp-Qo"
            videoTitle="Mon Bhari Somoy | Anupam Mallik Mithun | Ft. Sujay Das | Emotion Music "
            dt="Oct 1, 2020"
          />
          <GenreVideoCard
            videoid="A9UU8RbAY8U"
            videoTitle="Sanjhbati Ghor |Sulagna Dey Mallik | Emotion Music "
            dt="Oct 18, 2020"
          />
          <GenreVideoCard
            videoid="/lldygIpwVMk"
            videoTitle="Ekdin Ghor Chhere | Bappaditya | Emotion Music "
            dt="Oct 15, 2020"
          />

          <GenreVideoCard
            videoid="tZUdnE7FsDk"
            videoTitle="Baisakhi Jhor | Aditi Rai Choudhury |Anupam Mallik Mithun | Emotion Music"
            dt="Nov 18, 2020"
          />
          <GenreVideoCard
            videoid="qfymO4mFVcM"
            videoTitle="Dakile Jodi | Sahana Debi | Sulagna Dey Mallik | Arnab Bhattacharya | Anupam Mallik | Emotion Music "
            dt="Nov 24, 2020"
          />
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default Bengali;
