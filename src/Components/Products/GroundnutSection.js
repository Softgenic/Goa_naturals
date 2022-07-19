import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

// import Coconut from "../Assests/images/coconut.jpg";
import "./Products.css";
const GroundnutSection = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container className="body" fluid>
      <h1 className="heading">ColdPressed Groundnut oil</h1>
      <div className="container-box">
        <Row>
          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/500ml-groundnut-front.jpg"
                className="prd-img"
              />
              <h4 className="prd-heading">500ml groundnut oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarHalf color="green" className="star" />
                <BsStar color="green" className="star" />
              </div>
              <span>₹ 350.00 - ₹ 273.00</span>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/1ltr-groundnut-front.jpg"
                className="prd-img"
              />
              <h4 className="prd-heading">1ltr groundnut oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
              </div>
              <span>₹ 700.00 - ₹ 525.00</span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default GroundnutSection;
