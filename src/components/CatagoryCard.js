import React from "react";

const CatagoryCard = ({ title, subtitle, pic }) => {
  return (
    <div className="container">
      <div className="catagory-card">
        <div className="image-box">
          <img src={pic} alt="catagory image" />
        </div>
        <div className="text-box">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CatagoryCard;
