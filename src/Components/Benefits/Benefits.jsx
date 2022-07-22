import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slider1 from "../Assets/images/slider1.jpeg";
import slider2 from "../Assets/images/slider2.jpeg";
import slider3 from "../Assets/images/slider3.jpeg";
import slider4 from "../Assets/images/slider4.jpeg";

import "./Benefits.css";
import { Container, Row, Col } from "react-bootstrap";

const Benefits = () => {
  return (
    <Container className="benefits">
      <h2 className="text-center mt-3 mb-3">Benefits Of Cold Pressed Oil</h2>
      <Row className="py-5">
        <Col lg={4} sm={12} className="col-left">
          <p className="fw-bold title">Unrefined, No additives</p>
          <p className="desc"> Oils are extracted using traditional wood press which involves
             crushing the oil seeds at low temperatures without additives.</p>
             <p className="fw-bold title">Cholesterol Free</p>
             <p className="desc">100% Cholesterol Free, which means a healthier substitute for
              refined oil & relief from cardiovascular problems.</p>
             <p className="fw-bold title">Full of Nutrients</p>
             <p className="desc">Cold press technique retains flavor, aroma, and nutritional values
             of the seeds/nuts making these oils great for your health.</p>
        </Col>
        <Col lg={4} sm={12}>
           <OwlCarousel
            className="owl-theme"
            items="1"
            autoplay
            center
            autoplayTimeout={2000}
            autoplayHoverPause
          >
            <div className="item">
              <img src={slider1} alt="" />
            </div>
            <div className="item">
              <img src={slider2} alt="" />
            </div>
            <div className="item">
              <img src={slider3} alt="" />
            </div>
            <div className="item">
              <img src={slider4} alt="" />
            </div>
            <div className="item">
              <img src={slider1} alt="" />
            </div>
          </OwlCarousel>
        </Col>
        <Col lg={4} sm={12} className="col-right">
        <p className="fw-bold title">100% RAW</p>
        <p className="desc"> Pure fruits, nuts & seeds! That’s the only ingredient used in our
             oils, that too in their very pure & raw form.</p>
        <p className="fw-bold title">Packed with Antioxidants</p>
        <p className="desc"> Organic antioxidants are a natural way of getting Vitamin C,
               Vitamin E, and beta-carotene, good for anti-aging and skincare.</p>
        <p className="fw-bold title">Zero Trans-Fat</p>
        <p className="desc"> Cold-pressed essentially means there is no heating or chemical
              processing, hence the oil is devoid of trans-fat.</p>
        </Col>
      </Row>
    </Container>
    // <div className="benefits-container">
    //   <div className="benefits-top">
    //     <h1 className="">Benefits of cold pressed oil</h1>
    //   </div>
    //   <div className="benefits-bottom">
    //     <div className="benefits-col-1">
    //       <div className="col-item">
    //         <h2>Unrefined, No additives</h2>
    //         <p>
    //           Oils are extracted using traditional wood press which involves
    //           crushing the oil seeds at low temperatures without additives.
    //         </p>
    //       </div>
    //       <div className="col-item">
    //         <h2>Cholesterol Free</h2>
    //         <p>
    //           100% Cholesterol Free, which means a healthier substitute for
    //           refined oil & relief from cardiovascular problems.
    //         </p>
    //       </div>
    //       <div className="col-item">
    //         <h2>Full of Nutrients</h2>
    //         <p>
    //           Cold press technique retains flavor, aroma, and nutritional values
    //           of the seeds/nuts making these oils great for your health.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="benefits-col-2">
    //       <OwlCarousel
    //         className="owl-theme"
    //         items="1"
    //         autoplay
    //         center
    //         autoplayTimeout={2000}
    //         autoplayHoverPause
    //       >
    //         <div className="item">
    //           <img src={slider1} alt="" />
    //         </div>
    //         <div className="item">
    //           <img src={slider2} alt="" />
    //         </div>
    //         <div className="item">
    //           <img src={slider3} alt="" />
    //         </div>
    //         <div className="item">
    //           <img src={slider4} alt="" />
    //         </div>
    //         <div className="item">
    //           <img src={slider1} alt="" />
    //         </div>
    //       </OwlCarousel>
    //     </div>

    //     <div className="benefits-col-3">
    //       <div className="col-item">
    //         <h2>100% RAW</h2>
    //         <p>
    //           Pure fruits, nuts & seeds! That’s the only ingredient used in our
    //           oils, that too in their very pure & raw form.
    //         </p>
    //       </div>
    //       <div className="col-item">
    //         <h2>Packed with Antioxidants</h2>
    //         <p>
    //           Organic antioxidants are a natural way of getting Vitamin C,
    //           Vitamin E, and beta-carotene, good for anti-aging and skincare.
    //         </p>
    //       </div>
    //       <div className="col-item">
    //         <h2>Zero Trans-Fat</h2>
    //         <p>
    //           Cold-pressed essentially means there is no heating or chemical
    //           processing, hence the oil is devoid of trans-fat.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Benefits;
