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
            <img src="/item-pics/100ml-coconut-front.jpg" className="prd-img" />
            <h4>100ml coconut oil</h4>
          </Col>

          <Col xs={12} md={3} className="prd-col">
            <img src="/item-pics/500ml-coconut-front.jpg" className="prd-img" />
            <h4>500ml coconut oil</h4>
          </Col>

          <Col xs={12} md={3} className="prd-col">
            <img src="/item-pics/750ml-coconut-front.jpg" className="prd-img" />
            <h4>750ml coconut oil</h4>
          </Col>

          <Col xs={12} md={3} className="prd-col">
            <img src="/item-pics/1ltr-coconut-front.jpg" className="prd-img" />
            <h4>1ltr coconut oil</h4>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CoconutSection;
