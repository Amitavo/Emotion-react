import React from "react";
import { Button } from "reactstrap";

const SectionHero = () => (
  <div className="section-hero container-fluid">
    <div className="text-box d-none">
      <h1>Emotion..</h1>
      <h2> Music & Video</h2>
      <p>
        EMOTION MUSIC extravaganza evolved as Musical Triggers with a
        basket-full of fresh collection songs to rejuvenate our mind and soul.
        It's <strong>emotionally yours</strong>.
      </p>
      <a href="https://www.google.com">
        <Button outline color="primary" type="submit">
          CONTACT US
        </Button>
      </a>
    </div>
  </div>
);

export default SectionHero;
