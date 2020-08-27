import React from "react";

import "~slick-carousel/slick/slick.css";

export function App() {
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

export const MyName = "Amitavo";

function EnhancedApp() {
  return <div>I am Enhanced App</div>;
}

export default EnhancedApp;

// export {EnhancedApp as default};

// export default App;

export const Familyname = "Ghosh";
export const Age = 38;
export const Daughter = "Aheli";

// export {Familyname}
// export {Age}
// export {Daughter}

// export {Familyname, Age, Daughter}
