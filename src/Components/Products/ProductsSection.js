import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import Coconut from "../Assets/images/coconut.jpg";
import "./Products.css";
const CoconutSection = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container className="body" fluid>
      <h1 className="heading">All products</h1>
      <div className="container-box">
        <Row>
          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/100ml-coconut-front.jpg"
                className="prd-img"
                alt=""
              />
              <h4 className="prd-heading">100ml coconut oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStar color="green" className="star" />
                <BsStar color="green" className="star" />
              </div>
              <span>₹ 75.00 - ₹ 62.00</span>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/500ml-coconut-front.jpg"
                className="prd-img"
                alt=""
              />
              <h4 className="prd-heading">500ml coconut oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarHalf color="green" className="star" />
                <BsStar color="green" className="star" />
              </div>
              <span>₹ 300.00 - ₹ 259.00</span>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/750ml-coconut-front.jpg"
                className="prd-img"
                alt=""
              />
              <h4 className="prd-heading">750ml coconut oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarHalf color="green" className="star" />
                <BsStar color="green" className="star" />
              </div>
              <span>₹ 500.00 - ₹ 385.00</span>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/1ltr-coconut-front.jpg"
                className="prd-img"
                alt=""
              />
              <h4 className="prd-heading">1ltr coconut oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
              </div>
              <span>₹ 600.00 - ₹ 490.00</span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/500ml-groundnut-front.jpg"
                className="prd-img"
                alt=""
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
                alt=""
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
          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/500ml-safflower-front.jpg"
                className="prd-img"
                alt=""
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
                alt=""
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
          <Col xs={12} md={3}>
            <div className="prd-col">
              <img
                src="/item-pics/500gm-turmeric-front.jpg"
                className="prd-img"
                alt=""
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
                alt=""
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

export default CoconutSection;
