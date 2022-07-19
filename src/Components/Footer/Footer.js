import React from 'react'
import { 
    Container,
    Row,
    Col
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import "./Footer.css";
//  flipkart amazon mini icon
import Amzaon from "../Assets/Goa-natural/mini-amazon.png";
import Flipkart from "../Assets/Goa-natural/mini-flipkart.png";
const Footer = () => {
  return (
    <div>
        <Container fluid className="footer py-5">
            <Row>
                <Col md={4}>
                    <h5>GOA NATURAL</h5>
                    <p>The Original Cold Pressed Oil from Goa, India</p>
                    <span className="mt-2"><i className="fas fa-map-marker-alt"></i></span>
                    <p>Plot 34, Kakoda Industrial Estate – Phase III, Kakoda, Curchorem, Goa, India 403706</p>
                    <span className="mt-2"><i className="fas fa-envelope"></i></span>
                    <p>adwingoa@gmail.com | goanatural2222@gmail.com</p>
                    <span className="d-flex mt-2"><i className="fas fa-phone-alt me-2 mt-2"></i> <p>9822168979 | 8007774122 | 8605070650</p></span>
                </Col>
                <Col md={4}>
                    <h5>QUICK LINKS</h5>
                    <ul>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                        <li><Link to="/">View all products</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Rewards</Link></li>
                    </ul>
                    <h5>Follow us on Social Media</h5>
                    <div className="d-flex social-icon mb-3">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter ms-2"></i>
                    <i className="fab fa-instagram ms-2"></i>
                    </div>
                </Col>
                <Col md={4}>
                    <h5>NEWSLETTER</h5>
                    <p>Subscribe to our newsletter & stay updated about latest products, offers and blogs</p>
                    <input type="email" placeholder="Enter Email Addres" />
                    <br></br>
                    <button>Subscribe</button>
                    <h5 className='mt-3'>We are also available on…</h5>
                    <div className='d-flex affiliate'>
                        <img src={Amzaon} alt='amazon'/>
                        <img src={Flipkart} alt='flipkart'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer