import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import "./MyAccount.css"
const MyAccount = () => {
  return (
    <div>
        <NavbarMenu />
            <Container className='my-account'>
                <Row>
                    <Col md={4}>
                        <Card>
                            <ul>
                                <li><Link to="/My-Account">Dashboard</Link></li>
                                <li><Link to="/Order-History">Order</Link></li>
                                <li><Link to="/">Address</Link></li>
                                <li><Link to="/">Account Details</Link></li>
                                <li><Link to="/">logout</Link></li>
                            </ul>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <p>Hello <strong>Pk</strong> (not <strong>pk?</strong> Logout)</p>
                        <p>From your Dashboard you can your Account Details, Edit Billing and Shipping Address, View recent order and change your password.</p>
                    </Col>
                </Row>
            </Container>
        <Footer />
    </div>
  )
}

export default MyAccount