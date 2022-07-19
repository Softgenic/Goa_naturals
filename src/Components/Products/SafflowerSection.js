import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import Coconut from "../Assets/images/coconut.jpg";
import "./Products.css";
const SafflowerSection = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container className="body" fluid>
      <h1 className="heading">ColdPressed Safflower oil</h1>
      <div className="container-box">
        <Row>
          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/500ml-safflower-front.jpg"
                className="prd-img"
              />
              <h4 className="prd-heading">500ml safflower oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarHalf color="green" className="star" />
                <BsStar color="green" className="star" />
              </div>
              <span>₹ 325.00 - ₹ 287.00</span>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/1ltr-safflower-front.jpg"
                className="prd-img"
              />
              <h4 className="prd-heading">1ltr safflower oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
              </div>
              <span>₹ 750.00 - ₹ 546.00</span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SafflowerSection;
