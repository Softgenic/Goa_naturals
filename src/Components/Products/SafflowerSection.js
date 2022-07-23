import React,{useEffect, useState} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
// import Coconut from "../Assets/images/coconut.jpg";
import "./Products.css";
const SafflowerSection = () => {
  // for store all data of product table in product state
  const [product, SetProduct] = useState([]);
  
  const totalProduct = product.map((item)=> item.category==='sunflower')
  console.log("all item here",totalProduct)
// Fetching data from mysql table using useEffect
  useEffect(() => {
    const fetchProduct = async () =>{
      const res = await axios.get("https://golden.softgenics.in/api/allProduct");
      SetProduct(res.data)
    }
    fetchProduct();
  },[]);
  return (
    <Container className="Product mb-5">
      <span>
        <Link to="/">Home</Link> » SunFlower Oil
      </span>
      <br></br>
      <span
        style={{ fontSize: "0.95rem", textTransform: "none" }}
        className="text-muted mt-5"
      >
        Showing all 2 resuls
      </span>
      <Row className="mt-5">
        {product.map((item)=>
        {
          if(item.category==="sunflower"){
          return(<>
        <Col lg={3} sm={6} className="Product-col">
          <Card as={Link} to={`/ViewProduct/${item.id}`}>
            <Card.Img src={`https://golden.softgenics.in/uploads/${item.image}`} />

            <Card.Body>
              <div className="d-flex justify-content-center mb-3">
                <BsStarFill color="#00d084" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarHalf color="#00d084" className="ms-2" />
                <BsStar color="#00d084" className="ms-2" />
              </div>
              <Card.Title>
                {item.p_name} <br></br>{item.waight}{" "}
              </Card.Title>
              <Card.Text>₹ {item.price-item.discount}.00 - ₹ {item.price}.00</Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
        </>)}})}
        <Col lg={3} sm={6} className="Product-col">
          <Card as={Link} to="/ViewProduct">
            <Card.Img src="/item-pics/1ltr-safflower-front.jpg" />

            <Card.Body>
              <div className="d-flex justify-content-center mb-3">
                <BsStarFill color="#00d084" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
                <BsStarFill color="#00d084" className="ms-2" />
              </div>
              <Card.Title>
                {" "}
                Safflower Oil <br></br>1 Ltr{" "}
              </Card.Title>
              <Card.Text>₹ 546.00 - ₹ 750.00 </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SafflowerSection;
