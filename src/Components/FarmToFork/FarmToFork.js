import React from "react";
import "./FarmToFork.css";
import fff1 from "../Assets/images/fff1.jpg";
import fff2 from "../Assets/images/fff2.jpg";
import fff3 from "../Assets/images/fff3.jpg";
import fff4 from "../Assets/images/fff4.jpg";

const FarmToFork = () => {
  return (
    <div className="fff-container">
      <h1 className="fff-heading">Farm To Fork</h1>
      <div className="fff-flex">
        <div className="fff-card">
          <img
            className="fff-card-img"
            src={fff1}
            alt="handpicked ingredients"
          />
          <p className="fff-card-title">Handpicked Ingredients</p>
          <p className="fff-card-description">
            Carefully selected locally grown ingredients, free from genetically
            modified organisms.
          </p>
        </div>
        <div className="fff-card">
          <img
            className="fff-card-img"
            src={fff2}
            alt="least carbon footprint"
          />
          <p className="fff-card-title">Least Carbon Footprint</p>
          <p className="fff-card-description">
            Traditional eco-friendly agricultural and agro-processing practices
            to prevent pollution & emissions.
          </p>
        </div>
        <div className="fff-card">
          <img className="fff-card-img" src={fff3} alt="rural empowerment" />
          <p className="fff-card-title">Rural Empowerment</p>
          <p className="fff-card-description">
            Support the livelihood & well-being of local farmers, training &
            employment for rural Indians, especially women.
          </p>
        </div>
        <div className="fff-card">
          <img
            className="fff-card-img"
            src={fff4}
            alt="Packed & Delivered with Love"
          />
          <p className="fff-card-title">Packed & Delivered with Love</p>
          <p className="fff-card-description">
            Genuine food products hygienically packed, hand labelled & carefully
            delivered for best consumer experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmToFork;
