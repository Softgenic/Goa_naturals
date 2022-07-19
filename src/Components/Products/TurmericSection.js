import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

// import Coconut from "../Assests/images/coconut.jpg";
import "./Products.css";
const TurmericSection = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container className="body" fluid>
      <h1 className="heading">Turmeric powder</h1>
      <div className="container-box">
        <Row>
          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/500gm-turmeric-front.jpg"
                className="prd-img"
              />
              <h4 className="prd-heading">500gm turmeric powder</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStar color="green" className="star" />
              </div>
              <span>₹ 166.00 - ₹ 156.00</span>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/1kg-turmeric-front.jpg"
                className="prd-img"
              />
              <h4 className="prd-heading">1kg turmeric powder</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
              </div>
              <span>₹ 298.00 - ₹ 288.00</span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default TurmericSection;
