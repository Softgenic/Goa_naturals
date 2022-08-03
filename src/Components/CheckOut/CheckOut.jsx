import React, { useContext, useState,useEffect } from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Footer from "../Footer/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CheckOut.css";
import { Box, MenuItem, TextField } from "@mui/material";
import { Store } from "../../utils/Store";

//table components @mui

const CheckOut = () => {
  const [checked, setchecked] = useState();
  const handleChecked=()=>setchecked(!checked)
  const { state, dispatch } = useContext(Store);

  const { promoCode, promoAmount, vatAmount, totalPrice } =
    state?.cart?.cartCheckOutDetails;

  //need to fetch from database
  const shippingFee = 100;

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
  
  return (
    <div>
      <NavbarMenu />
      <Container className="checkout">
        <Row>
          <Col md={6}>
            <h2 className="mb-5">Billing Detail</h2>
            <label>Name</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="mb-2"
            />
            <br></br>
            <label>Address</label>
            <br></br>
            <input
              className="mb-2"
              placeholder="House number and street name"
              required
            />
            <br></br>
            <label>City</label>
            <br></br>
            <input
              className="mb-2"
              placeholder="Enter your city"
              required
            />
            <br></br>
            <label className="mb-2">State</label>
            <br></br>
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
            <label>Postcode / ZIP</label>
            <br></br>
            <input
              placeholder="Enter your Pin code"
              required
              className="mb-2"
            />
            <br></br>
            {/* phone and email field in row col*/}
            {/* start row */}
            <Row>
              <Col md={6}>
                <label>Phone</label>
                <br></br>
                <input
                  
                  placeholder="Enter Phone number"
                  className="mb-2"
                />
                <br></br>
              </Col>
              <Col md={6}>
                <label>Input</label>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter Email address"
                  required
                  className="mb-2"
                />
                <br></br>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div className="d-flex">
            <input type="checkbox" 
            style={{width:"20px"}} 
            className="me-2 mt-3"
            onClick={handleChecked}
            />
            <h2 className="mb-5">Ship to a different address?</h2>
            </div>
            {checked?
            <>
            <label>Name</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="mb-2"
              
            />
            
            <br></br>
            
            <label>Address</label>
            <br></br>
            <input
              className="mb-2"
              placeholder="House number and street name"
              required
            />
            <br></br>
            <label>City</label>
            <br></br>
            <input
              className="mb-2"
              placeholder="Enter your city"
              required
            />
            <br></br>
            <label className="mb-2">State</label>
            <br></br>
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
            <label>Postcode / ZIP</label>
            <br></br>
            <input
              placeholder="Enter your Pin code"
              required
              className="mb-2"
            />
            <br></br>
            </>:<></>}
          </Col>
        </Row>

        <div class="col-md-8">
          <div class="card mb-4 px-4">
            <div className="card-header py-3">
              <h5 className="mb-0 nt-2">Order Summary</h5>
            </div>
            <div className=" list-group-item d-flex justify-content-between align-items-center border-0 p-4 pb-0">
              Products
              <span>Sub total</span>
            </div>
            <hr />
            <div className="card-body ">
              <ul className="list-group list-group-flush">
                {state?.cart?.cartItems?.map((item, index) => {
                  return (
                    <li
                      key={`item${index}`}
                      className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                    >
                      {item.p_name} * {item.quantity}
                      <span>₹{item.price * item.quantity}</span>
                    </li>
                  );
                })}
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pt-4 pb-0">
                  Total Price
                  <span>₹{totalPrice}</span>
                </li>

                {promoAmount != 0 && (
                  <li class="list-group-item d-flex justify-content-between border-0 align-items-center px-0">
                    Coupon code:{promoCode}
                    <span>- ₹{promoAmount}</span>
                  </li>
                )}
                <li class="list-group-item d-flex justify-content-between border-0 align-items-center px-0">
                  Vat(0.14%)
                  <span>₹{vatAmount}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping fee:
                  <span>₹{shippingFee}</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>

                  <span>
                    <strong>
                      ₹{totalPrice - promoAmount + vatAmount + shippingFee}
                    </strong>
                  </span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              class="btn btn-success btn-block btn-lg mb-5"
              //onClick={ProceedToPayment}
              style={{ width: "100%" }}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CheckOut;
