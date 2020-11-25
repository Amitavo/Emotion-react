import React from "react";
import { Gallery } from "react-photo-gallery";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import Partners from "./components/Partners";
import SectionGenre from "./components/SectionGenre";
import CarouselRecent from "./components/CarouselRecent";
import Footer from "./components/Footer";
// import photo1 from "../img/gaana.png";
// import photo2 from "../img/saavn.png";

function App() {
  // const photos = [
  //   {
  //     src: { photo1 },
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: { photo2 },
  //     width: 1,
  //     height: 1,
  //   },
  // ];
  return (
    <div className="App">
      <Navbar />
      <SectionHero />
      <Partners />
      <CarouselRecent />
      <SectionGenre />
      <Footer />
    </div>
  );
}

export default App;
