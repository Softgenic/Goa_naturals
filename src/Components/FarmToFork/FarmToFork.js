import React from "react";
import "./FarmToFork.css";
import fff1 from "../Assets/images/fff1.jpg";
import fff2 from "../Assets/images/fff2.jpg";
import fff3 from "../Assets/images/fff3.jpg";

const FarmToFork = () => {
  return (
    <div className="fff-container">
      <h1 className="fff-heading">Farm To Fork</h1>
      <div className="fff-flex">
        <div className="fff-card">
          <img className="fff-card-img" src={fff1} alt="" />
          <p className="fff-card-title">Handpicked Ingredients</p>
          <p className="fff-card-description">
            Carefully selected locally grown ingredients, free from genetically
            modified organisms.
          </p>
        </div>
        <div className="fff-card">
          <img className="fff-card-img" src={fff2} alt="" />
          <p className="fff-card-title">Least Carbon Footprint</p>
          <p className="fff-card-description">
            Traditional eco-friendly agricultural and agro-processing practices
            to prevent pollution & emissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmToFork;
