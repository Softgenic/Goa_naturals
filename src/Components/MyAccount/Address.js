import React,{useState} from 'react'
import { Card, Col, Container, Row, Modal, Button } from 'react-bootstrap'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import "./MyAccount.css"
import { Box, MenuItem, TextField } from "@mui/material";
const Address = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const States = [
        {
          value: "Bihar",
          label: "Bihar",
        },
        {
          value: "Jharkhand",
          label: "Jharkhand",
        },
        {
          value: "Delhi",
          label: "Delhi",
        },
        {
          value: "Maharastra",
          label: "Maharastra",
        },
      ];
      const [indstate, setindstate] = React.useState([]);
    
      const handleChange = (event) => {
        setindstate(event.target.value);
      };
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
                        <p>The following addresses will be used on the checkout page by default.</p>
                        <Row>
                            <Col md={6}>
                                <h4>Billing Address</h4>
                                <p className='text-primary' onClick={handleShow}>Edit</p>
                                <p>Address Detail</p>
                            </Col>
                            <Col md={6}>
                                <h4>Shipping Address</h4>
                                <p className='text-primary' onClick={handleShow1}>Edit</p>
                                <p>Address Detail</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* Modal for Billing address */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Billing Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <TextField
              id="outlined-textarea"
              label="Full Name"
              placeholder="Enter your full name"
              required
              fullWidth
              color="success"
              sx={{ mb: "2rem" }}
              multiline
            />

            <TextField
              id="outlined-textarea"
              label="Address"
              placeholder="House number and street name"
              required
              fullWidth
              sx={{ mb: "2rem" }}
              color="success"
              multiline
            />
            <TextField
              id="outlined-textarea"
              label="City"
              placeholder="Enter your city"
              required
              fullWidth
              sx={{ mb: "2rem" }}
              color="success"
              multiline
            />
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mb: 2 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                color="success"
                select
                label="Select state"
                fullWidth
                value={indstate}
                onChange={handleChange}
                helperText="Please select your State"
              >
                {States.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <TextField
              id="outlined-textarea"
              label="Postcode / ZIP"
              placeholder="Enter your Pin code"
              required
              fullWidth
              color="success"
              sx={{ mb: "2rem" }}
              multiline
            />
            {/* phone and email field in row col*/}
            {/* start row */}
            <Row>
              <Col md={6}>
                <TextField
                  id="outlined-textarea"
                  label="Phone"
                  placeholder="Enter Phone number"
                  required
                  fullWidth
                  color="success"
                  sx={{ mb: "2rem" }}
                  multiline
                />
              </Col>
              <Col md={6}>
                <TextField
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Enter Email address"
                  required
                  fullWidth
                  color="success"
                  sx={{ mb: "2rem" }}
                  multiline
                />
                </Col>
                </Row>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-success border-0'>UPDATE</button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Shipping address */}
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                <Modal.Title>Shipping Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <TextField
              id="outlined-textarea"
              label="Full Name"
              placeholder="Enter your full name"
              required
              fullWidth
              color="success"
              sx={{ mb: "2rem" }}
              multiline
            />

            <TextField
              id="outlined-textarea"
              label="Address"
              placeholder="House number and street name"
              required
              fullWidth
              sx={{ mb: "2rem" }}
              color="success"
              multiline
            />
            <TextField
              id="outlined-textarea"
              label="City"
              placeholder="Enter your city"
              required
              fullWidth
              sx={{ mb: "2rem" }}
              color="success"
              multiline
            />
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mb: 2 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                color="success"
                select
                label="Select state"
                fullWidth
                value={indstate}
                onChange={handleChange}
                helperText="Please select your State"
              >
                {States.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <TextField
              id="outlined-textarea"
              label="Postcode / ZIP"
              placeholder="Enter your Pin code"
              required
              fullWidth
              color="success"
              sx={{ mb: "2rem" }}
              multiline
            />
  
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-success border-0'>UPDATE</button>
                </Modal.Footer>
            </Modal>
        <Footer />
    </div>
  )
}

export default Address