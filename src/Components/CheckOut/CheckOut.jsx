import React, { useContext } from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Footer from "../Footer/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CheckOut.css";
import { Box, MenuItem, TextField } from "@mui/material";
import { Store } from "../../utils/Store";

//table components @mui

const CheckOut = () => {
  const { state, dispatch } = useContext(Store);

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
          </Col>
          <Col md={6}>
            <h2 className="mb-5">Ship to a different address?</h2>
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
          </Col>
        </Row>
        {/* Product Table */}
        <h2>Your order</h2>
        <Card>
          <Card.Body>
            {/* HEADING OF SUBTOTAL */}
            <Row>
              <Col xs={6}>
                <h5>Product</h5>
              </Col>
              <Col xs={6}>
                <h5>Subtotal</h5>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col xs={6}>
                <h5>Product Name+ qnty</h5>
              </Col>
              <Col xs={6}>
                <h5>1000</h5>
              </Col>
            </Row>
            <hr></hr>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default CheckOut;
