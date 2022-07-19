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
        <div className="col-md-4">
          <img src="/item-pics/100ml-coconut-back.jpg" height="700px" />
        </div>
        <div className="col-md-4">
          <img src="/item-pics/100ml-coconut-back.jpg" height="700px" />
        </div>
        <div className="col-md-4">
          <img src="/item-pics/100ml-coconut-back.jpg" height="700px" />
        </div>
        <div className="col-md-4">
          <img src="/item-pics/100ml-coconut-back.jpg" height="700px" />
        </div>
      </div>
    </Container>
  );
};

export default CoconutSection;
