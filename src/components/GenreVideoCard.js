import React from "react";
import MyYoutube from "./Youtube";

const GenreVideoCard = ({
  videoTitle = "Title ooof the Video",
  dt = "21/05/2020",
  videoid = "lldygIpwVMk",
}) => {
  const opt1 = {
    height: "320",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const opt2 = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="row mb-3 shadow p-0 m-0 ">
      <div className="col-lg-7 col-sm-12 p-0 m-0 pb-0 mb-0">
        <MyYoutube videoid={videoid} opts={opt1} />
      </div>
      <div className="col-lg-5 col-sm-12 pr-5 pt-4 pl-5">
        <h2 className="mt-lg-5">{videoTitle}</h2>
        <h5 className="text-muted mt-4">Release Date: {dt}</h5>
      </div>
    </div>
  );
};

export default GenreVideoCard;
