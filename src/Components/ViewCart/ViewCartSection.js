import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Store } from "../../utils/Store";

import "./ViewCart.css";
const ViewCartSection = () => {
  const { state, dispatch } = useContext(Store);
  console.log(dispatch)
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
            
            return (
              <Col xs={12} md={12} className="crt-item">
                <img src={item.image} className="crt-img" alt="" />

                <span className="crt-itemName">{item.name}</span>
                <span>quantity:{item.quantity}</span>
              </Col>
            );
          }
          
          )}
        </Row>
      </div>
    </Container>
  );
};

export default ViewCartSection;
