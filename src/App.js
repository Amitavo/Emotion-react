import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionHero />
      <Partners />
    </div>
  );
}

export default App;
