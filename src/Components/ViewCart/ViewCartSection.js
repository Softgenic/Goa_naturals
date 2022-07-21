import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
import { Store } from "../../utils/Store";

import Coconut from "../Assets/images/coconut.jpg";
import "./ViewCart.css";
const ViewCartSection = () => {
  const { state, dispatch } = useContext(Store);

  console.log("cart data", state);
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container className="body" fluid>
      <h1 className="heading">Cart Items</h1>
      <div className="container-box">
        <Row className="crt-col">
          {state?.cart?.cartItems?.map((item) => {
            <Col xs={12} md={6}>
              <div>
                <img src={item.image} className="crt-img" alt="" />
              </div>
            </Col>;
          })}
        </Row>
      </div>
    </Container>
  );
};

export default ViewCartSection;
