import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Coconut from "../Assests/images/coconut.jpg";
import "./Products.css";
const CoconutSection = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container className="body" fluid>
      <h1 className="heading"> Coconut oil</h1>
      <div className="container-box">
        <Row>
          <Col xs={12} md={3} className="prd-col">
            <img src="/item-pics/100ml-coconut-back.jpg" className="prd-img" />
          </Col>

          <Col xs={12} md={3} className="prd-col">
            <img src="/item-pics/100ml-coconut-back.jpg" className="prd-img" />
          </Col>

          <Col xs={12} md={3} className="prd-col">
            <img src="/item-pics/100ml-coconut-back.jpg" className="prd-img" />
          </Col>

          <Col xs={12} md={3} className="prd-col">
            <img src="/item-pics/100ml-coconut-back.jpg" className="prd-img" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CoconutSection;
