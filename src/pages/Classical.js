import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenreVideoCard from "../components/GenreVideoCard";
import Dash from "../components/Dash";

const Classical = () => {
  return (
    <div>
      <Navbar />
      <body className="p-5">
        <h1 className="text-center font-weight-bold mt-5">
          All New Classical Songs.
        </h1>
        <Dash />
        <div className="container-fluid bg-light p-4 mt-5">
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

export default Classical;
