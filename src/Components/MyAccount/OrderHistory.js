import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import "./MyAccount.css"
const OrderHistory = () => {
          // LOGGED IN STATUS CHANGE NAVBAR ITEM FROM LOGIN TO USERNAME
  let isLoggedIn=true;
  const authToken = JSON.parse(localStorage.getItem("token"));
    if(authToken===null){
      isLoggedIn=false
    }
    const name = JSON.parse(localStorage.getItem("name"));
  let navigave = useNavigate();
  const Logout = ()=>{
    localStorage.removeItem("token")
    navigave("/")
   
  }
  return (
    <div>
        {isLoggedIn?<></>:<Navigate to="/"/>}
    <NavbarMenu />
            <Container className='my-account py-5'>
                <Row>
                    <Col md={4}>
                        <Card>
                            <ul>
                                <li><Link to="/My-Account">Dashboard</Link></li>
                                <li><Link to="/Order-History">Order</Link></li>
                                <li><Link to="/User-Address">Address</Link></li>
                                <li><Link to="/Account-Details">Account Details</Link></li>
                                <li onClick={Logout}>logout</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col md={8}>
                       <Card>
                            <p className='text-center mt-3'>You don't have any order History Currently.</p>
                       </Card>
                    </Col>
                </Row>
            </Container>
        <Footer /> 
    </div>
  )
}

export default OrderHistory