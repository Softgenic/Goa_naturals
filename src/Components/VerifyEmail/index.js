import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./style.css";
import { TextField, InputAdornment, InputLabel } from "@mui/material";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestParams = {
      email: email,
      verifyEmail: verifyEmail,
    };
    console.log("email", email);
    axios
      .post("http://localhost:5000/api/verifyEmail", requestParams)
      .then((response) => {
        if (response && response.status === 200) {
          console.log(response.data);
          if (response.data) {
            const data = response.data;
            console.log(data);
            localStorage.setItem("token1", data.token);
            navigate("/Dashboard");
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.status) {
          console.log(error.response.data.status);
        }
      });
  };

  return (
    <div className="email-verification">
      <Container className="d-flex justify-content-center">
        <Card className="form-card">
          <Button className="mt-4" onClick={handleSubmit}>
            Login
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Index;
