import React from "react";
import oil from "../Assets/images/oil.jpg";
import ob from "../Assets/images/onlybest.jpg";

const Why = () => {
  return (
    <div className="why-container">
      <div className="img-container">
        <img src={oil} alt="olive oil"></img>
      </div>
      <div className="features-container">
        <h1>Why Goa naturals</h1>
        <div className="features-grid">
          <div className="features-grid-card">
            <img
              src={ob}
              alt="only best"
              className="features-grid-card-img"
            ></img>
            <p className="features-grid-card-title">Only the best</p>
            <p className="features-grid-card-description">
              Selected ingredients, unrefined, chemical-free hygenic processes
              to provide genuine products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
