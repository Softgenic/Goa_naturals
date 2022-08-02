import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Products.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const GroundnutSection = () => {
  AOS.init();
  // for store all data of product table in product state
  const [product, SetProduct] = useState([]);

  // Fetching data from mysql table using useEffect
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        "https://golden.softgenics.in/api/allProduct"
      );
      let data = res.data.filter((item) => item?.category === "groundnut");
      SetProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <Container className="Product mb-5">
      <span>
        <Link to="/">Home</Link> » Groundnut Oil
      </span>
      <br></br>
      <span
        style={{ fontSize: "0.95rem", textTransform: "none" }}
        className="text-muted mt-5"
      >
        Showing all {product?.length} results
      </span>
      <Row className="mt-5">
        {product.map((item) => {
          return (
            <>
              <Col lg={3} sm={6} className="Product-col" data-aos='fade-up' data-aos-duration='1000'>
                <Card as={Link} to={`/ViewProduct/${item.id}`}>
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
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default GroundnutSection;
