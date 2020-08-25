import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import Partners from "./components/Partners";
import SectionGenre from "./components/SectionGenre";
import CarouselRecent from "./components/CarouselRecent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionHero />
      <Partners />
      <CarouselRecent />
      <SectionGenre />
    </div>
  );
}

export default App;
