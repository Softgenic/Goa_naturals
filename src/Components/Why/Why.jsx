import React from "react";
import oil from "../Assets/images/oil.jpg";

import whyimg1 from "../Assets/images/whyimg1.png";
import whyimg2 from "../Assets/images/whyimg2.png";
import whyimg3 from "../Assets/images/whyimg3.png";
import whyimg4 from "../Assets/images/whyimg4.png";
import whyimg5 from "../Assets/images/whyimg5.png";
import whyimg6 from "../Assets/images/whyimg6.png";
import "./Why.css";

const Why = () => {
  return (
    <div className="why-container">
      <div className="img-container">
        <img src={oil} alt="olive oil"></img>
      </div>
      <div className="features-container">
        <h1>Why Goa naturals</h1>
        <div className="features-grid">
          <div className="grid-col">
            <div className="features-grid-card">
              <img
                src={whyimg1}
                alt="only best"
                className="features-grid-card-img"
              ></img>
              <p className="features-grid-card-title">Only the best</p>
              <p className="features-grid-card-description">
                Selected ingredients, unrefined, chemical-free hygenic processes
                to provide genuine products
              </p>
            </div>
            <div className="features-grid-card">
              <img
                src={whyimg2}
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
          <div className="grid-col">
            <div className="features-grid-card">
              <img
                src={whyimg3}
                alt="only best"
                className="features-grid-card-img"
              ></img>
              <p className="features-grid-card-title">Only the best</p>
              <p className="features-grid-card-description">
                Selected ingredients, unrefined, chemical-free hygenic processes
                to provide genuine products
              </p>
            </div>
            <div className="features-grid-card">
              <img
                src={whyimg4}
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
          <div className="grid-col">
            <div className="features-grid-card">
              <img
                src={whyimg5}
                alt="only best"
                className="features-grid-card-img"
              ></img>
              <p className="features-grid-card-title">Only the best</p>
              <p className="features-grid-card-description">
                Selected ingredients, unrefined, chemical-free hygenic processes
                to provide genuine products
              </p>
            </div>
            <div className="features-grid-card">
              <img
                src={whyimg6}
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
    </div>
  );
};

export default Why;
