import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

// import Coconut from "../Assets/images/coconut.jpg";
import "./Products.css";
const SafflowerSection = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container className="Product mb-5">
      <span><Link to="/">Home</Link> » SunFlower Oil</span>
      <br></br>
      <span style={{fontSize:"0.95rem", textTransform:"none"}} className="text-muted mt-5">Showing all 2 resuls</span>
      <Row className="mt-5">
        <Col lg={3} sm={6} className='Product-col'>
          <Card as={Link} to="/ViewProduct">
            <Card.Img src="/item-pics/500ml-safflower-front.jpg" />
          
          <Card.Body>
            <div className="d-flex justify-content-center mb-3">
               <BsStarFill color="#00d084"  />
               <BsStarFill color="#00d084" className="ms-2" />
               <BsStarFill color="#00d084" className="ms-2" />
               <BsStarHalf color="#00d084" className="ms-2" />
               <BsStar color="#00d084"  className="ms-2"/>
             </div>
            <Card.Title>Safflower Oil <br></br>500ml </Card.Title>
            <Card.Text>₹ 287.00 - ₹ 325.00</Card.Text>
          </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className='Product-col'>
          <Card as={Link} to="/ViewProduct">
            <Card.Img src="/item-pics/1ltr-safflower-front.jpg" />
          
          <Card.Body>
            <div className="d-flex justify-content-center mb-3">
               <BsStarFill color="#00d084"  />
               <BsStarFill color="#00d084" className="ms-2" />
               <BsStarFill color="#00d084" className="ms-2" />
               <BsStarFill color="#00d084" className="ms-2" />
               <BsStarFill color="#00d084"  className="ms-2"/>
             </div>
            <Card.Title> Safflower Oil <br></br>1 Ltr </Card.Title>
            <Card.Text>₹ 546.00 - ₹ 750.00 </Card.Text>
          </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    // <Container className="body" fluid>
    //   <h1 className="heading">ColdPressed Safflower oil</h1>
    //   <div className="container-box" >
    //     <Row>
    //       <Col xs={12} md={3} as={Link} to="/ViewProduct">
    //         <div className="prd-col" >
    //           <img
    //             src="/item-pics/500ml-safflower-front.jpg"
    //             className="prd-img"
    //             alt=""
    //           />
    //           <h4 className="prd-heading">500ml safflower oil</h4>
    //           <div className="stars">
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //             <BsStarHalf color="green" className="star" />
    //             <BsStar color="green" className="star" />
    //           </div>
    //           <span>₹ 325.00 - ₹ 287.00</span>
    //         </div>
    //       </Col>

    //       <Col xs={12} md={3}>
    //         <div className="prd-col">
    //           <img
    //             src="/item-pics/1ltr-safflower-front.jpg"
    //             className="prd-img"
    //             alt=""
    //           />
    //           <h4 className="prd-heading">1ltr safflower oil</h4>
    //           <div className="stars">
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //             <BsStarFill color="green" className="star" />
    //           </div>
    //           <span>₹ 750.00 - ₹ 546.00</span>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    // </Container>
  );
};

export default SafflowerSection;
