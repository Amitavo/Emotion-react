import React from "react";
// import { Gallery } from "react-photo-gallery";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import Partners from "./components/Partners";
import SectionGenre from "./components/SectionGenre";
import CarouselRecent from "./components/CarouselRecent";
import Footer from "./components/Footer";

function App() {
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
