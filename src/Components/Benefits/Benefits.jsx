import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import benefits1 from "../Assets/images/benefits1.png";

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-top">
        <h1 className="">Benefits of cold pressed oil</h1>
      </div>
      <div className="benefits-bottom">
        <div className="benefits-col-1">
          <div className="col-item">
            <h2>Unrefined, No additives</h2>
            <p>
              Oils are extracted using traditional wood press which involves
              crushing the oil seeds at low temperatures without additives.
            </p>
          </div>
          <div className="col-item">
            <h2>Cholesterol Free</h2>
            <p>
              100% Cholesterol Free, which means a healthier substitute for
              refined oil & relief from cardiovascular problems.
            </p>
          </div>
          <div className="col-item">
            <h2>Full of Nutrients</h2>
            <p>
              Cold press technique retains flavor, aroma, and nutritional values
              of the seeds/nuts making these oils great for your health.
            </p>
          </div>
        </div>
        <div className="benefits-col-2">
          <OwlCarousel className="owl-theme" loop margin={10} nav>
            <div className="item">
              <img src={benefits1} alt="" />
            </div>
          </OwlCarousel>
        </div>

        <div className="benefits-col-3">
          <div className="col-item">
            <h2>Unrefined, No additives</h2>
            <p>
              Oils are extracted using traditional wood press which involves
              crushing the oil seeds at low temperatures without additives.
            </p>
          </div>
          <div className="col-item">
            <h2>Cholesterol Free</h2>
            <p>
              100% Cholesterol Free, which means a healthier substitute for
              refined oil & relief from cardiovascular problems.
            </p>
          </div>
          <div className="col-item">
            <h2>Full of Nutrients</h2>
            <p>
              Cold press technique retains flavor, aroma, and nutritional values
              of the seeds/nuts making these oils great for your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
