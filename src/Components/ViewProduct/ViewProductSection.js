import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Card,
} from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Store } from "../../utils/Store";
import { Link, useParams, useNavigate } from "react-router-dom";
import SafflowerOrgatma from "../Assets/images/safflower-orgatma.jpg";
import "./ViewProduct.css";
import axios from "axios";
// did you konow image
import LocalIcon from "../Assets/images/local.png";
import SafflowerIcon from "../Assets/images/sunicon.png";
import Memory from "../Assets/images/memory.png";

const ViewProductSection = () => {
  // for store all data of product table in product state
  const [products, SetProducts] = useState([]);

  // Fetching data from mysql table using useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "https://golden.softgenics.in/api/allProduct"
      );
      SetProducts(res.data);
    };
    fetchProducts();
  }, []);
  // view product by id start from here code

  // Store products details in ProductInfo state
  const [ProductInfo, setProductInfo] = useState({});
  // Get product by id using useParams function
  const { id } = useParams();
  useEffect(() => {
    const fetchProductInfo = async () => {
      const res = await axios.get(
        `https://golden.softgenics.in/api/ViewProduct/${id}`
      );
      setProductInfo(...res.data);
    };
    fetchProductInfo();
  }, []);

  const { state, dispatch } = useContext(Store);

  console.log("cart data", state);
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const [quantity, setQuantity] = useState(0);
  if (quantity < 1) {
    setQuantity(1);
  }

  useEffect(() => {
    let productItem = state.cart.cartItems.find((item) => {
      return item.id === ProductInfo?.id;
    });
    if (productItem) {
      setQuantity(productItem.quantity);
    }
  }, [ProductInfo]);

  // Carousel slider responsive card
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // end
  const addToCartHandler = async () => {
    if (parseInt(ProductInfo.stock) < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...ProductInfo, quantity } });
    //router.push("/cart");
  };
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Container className="view-product">
          <span className="d-flex">
            <Link to="/">Home</Link> &nbsp;»&nbsp;{" "}
            <p onClick={() => navigate(-1)} style={{ color: "black" }} >
              {" "}
              {ProductInfo.category}
            </p>{" "}
            &nbsp;»&nbsp;{ProductInfo.p_name} {ProductInfo.waight}
          </span>

          <Row>
            <Col md={6} className="product-img-col">
              <img
                src={`https://golden.softgenics.in/uploads/${ProductInfo.image}`}
                className="prd-img"
                alt=""
              />
            </Col>
            <Col md={6} className="product-disc-col mt-3">
              <h2>
                {ProductInfo.p_name} {ProductInfo.waight}
              </h2>
              <div className=" mb-3">
                <BsStarFill color="#00d084" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarHalf color="#00d084" className="ms-2" />
                <BsStar color="#00d084" className="ms-2" />
                <span className="ms-2" style={{ fontSize: "0.95rem" }}>
                  (Customer Review)
                </span>
              </div>
              <p className="ms-5 size-text">Size : 500ml</p>
              <div className="size-type d-flex">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="button-tooltip-2">100ml</Tooltip>}
                >
                  <p className="ms-2">&nbsp; 100ml &nbsp;</p>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="button-tooltip-2">500ml</Tooltip>}
                >
                  <p className="ms-2">&nbsp; 500ml &nbsp;</p>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="button-tooltip-2">1 Ltr</Tooltip>}
                >
                  <p className="ms-2">&nbsp; 1 Ltr &nbsp;</p>
                </OverlayTrigger>
                <h3 className="ms-3">
                  ₹ {(ProductInfo.price - ProductInfo.discount) * quantity}
                </h3>
                <h3 className="text-decoration-line-through text-success ms-2">
                  ₹{ProductInfo.price * quantity}
                </h3>
              </div>
              {/* add to cart input field + - button , add cart button in row and col */}
              <p className="clear-btn"> Clear</p>
              <div className="input-fields d-flex">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  style={{
                    border: "1px solid black",
                    borderRadius: "0",
                  }}
                />
                <br></br>
                <button
                  onClick={() => {
                    setQuantity(parseInt(quantity) + 1);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <button
                  className="ms-5 mt-0"
                  style={{
                    width: "60%",
                    backgroundColor: "black",
                    color: "#fff",
                  }}
                  onClick={addToCartHandler}
                >
                  {" "}
                  Add to cart
                </button>
              </div>
              <p className="category-sec mt-3">
                Category : <span className="text-muted"> Safflower Oil</span>
              </p>
              <p className="category-sec-desc mt-3 text-muted">
                {ProductInfo.dics}
              </p>
              <img src={SafflowerOrgatma} alt="" />
            </Col>
          </Row>
        </Container>
      </>
      <div className="did-u-know-main-section mb-4">
        <Container fluid className="did-u-know py-5">
          <h1 className="text-center mb-3 fw-bold">DID YOU KNOW ?</h1>
          <Row>
            <Col md={4} sm={12}>
              <img src={LocalIcon} alt="" />
              <h4>LOCAL NAME</h4>
              <p>
                Safflower&#39;s native names include Karadi and Kusumba, which
                are most popular in Uttar Karnataka, Telangana, and Maharashtra.
              </p>
            </Col>
            <Col md={4} sm={12}>
              <img src={SafflowerIcon} alt="" />
              <h4>SAFFLOWER VS OLIVE OIL</h4>
              <p>
                Both oils are high in unsaturated fats (healthy fats), but only
                safflower oil retains its stability at higher temperatures.
              </p>
            </Col>
            <Col md={4} sm={12}>
              <img src={Memory} alt="" />
              <h4>BODY MAINTENANCE</h4>
              <p>
                Fatty acids are necessary for hormone regulation and memory
                enhancement.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Relaed product slider */}
      <Carousel responsive={responsive} autoPlay>
        {products
          .filter((item) => item.category === ProductInfo.category)
          .map((item) => {
            return (
              <>
                <Card
                  as={Link}
                  to={`/ViewProduct/${item.id}`}
                  className="related-product-slider"
                >
                  <Card.Img
                    src={`https://golden.softgenics.in/uploads/${item.image}`}
                  />

                  <Card.Body>
                    <div className="d-flex justify-content-center mb-3">
                      <BsStarFill color="#00d084" />
                      <BsStarFill color="#00d084" className="ms-2" />
                      <BsStarFill color="#00d084" className="ms-2" />
                      <BsStarHalf color="#00d084" className="ms-2" />
                      <BsStar color="#00d084" className="ms-2" />
                    </div>
                    <Card.Title>
                      {item.p_name} <br></br>
                      {item.waight}{" "}
                    </Card.Title>
                    <Card.Text>
                      ₹ {item.price - item.discount}.00 - ₹ {item.price}.00
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </Carousel>
    </div>

    // <Container className="body" fluid>
    //   <h1 className="heading">All products</h1>
    //   <div className="container-box">
    //     <Row className="prd-col">
    //       <Col xs={12} md={6}>
    //         <div>
    //           <img
    //             src="/item-pics/500ml-safflower-front.jpg"
    //             className="prd-img"
    //             alt=""
    //           />
    //         </div>
    //       </Col>

    //       <Col xs={12} md={6}>
    //         <div>
    //           <h4 className="prd-heading">1ltr safflower oil</h4>
    //           <div className="stars">
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //           </div>
    //           <span>₹ 750.00 - ₹ 546.00</span>

    //           <button className="btn-addToCart" onClick={addToCartHandler}>
    //             Add to cart
    //           </button>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    // </Container>
  );
};

export default ViewProductSection;
