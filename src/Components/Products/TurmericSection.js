import React,{useState, useEffect} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import axios from "axios";
// import Coconut from "../Assets/images/coconut.jpg";
import "./Products.css";
const TurmericSection = () => {
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
      <Link to="/">Home</Link> » Turmeric Powder
    </span>
    <br></br>
    <span
      style={{ fontSize: "0.95rem", textTransform: "none" }}
      className="text-muted mt-5"
    >
      Showing all 1 resuls
    </span>
    <Row className="mt-5">
      {product.map((item)=>
      {
        if(item.category==="turmeric"){
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
    </Row>
  </Container>
  );
};

export default TurmericSection;
