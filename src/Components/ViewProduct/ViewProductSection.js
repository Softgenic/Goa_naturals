import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import axios from "axios";
import { Store } from "../../utils/Store";

import Coconut from "../Assets/images/coconut.jpg";
import "./ViewProduct.css";
const ViewProductSection = () => {
  const product = {
    _id: "product1",
    name: "1ltr safflower oil",
    category: "Safflower oil",
    image: "/item-pics/500ml-safflower-front.jpg",
    price: 70,
    rating: 4.5,
    countInStock: 20,
    description: "Coldpressed Safflower oil",
  };
  const { state, dispatch } = useContext(Store);

  console.log("cart data", state);
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/api/products/${product._id}`);
    // if (data.countInStock < quantity) {
    //   window.alert("Sorry. Product is out of stock");
    //   return;
    // }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    //router.push("/cart");
  };

  return (
    <Container className="body" fluid>
      <h1 className="heading">All products</h1>
      <div className="container-box">
        <Row className="prd-col">
          <Col xs={12} md={6}>
            <div>
              <img
                src="/item-pics/500ml-safflower-front.jpg"
                className="prd-img"
                alt=""
              />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div>
              <h4 className="prd-heading">1ltr safflower oil</h4>
              <div className="stars">
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
                <BsStarFill color="green" className="star" />
              </div>
              <span>₹ 750.00 - ₹ 546.00</span>

              <button className="btn-addToCart" onClick={addToCartHandler}>
                Add to cart
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ViewProductSection;
