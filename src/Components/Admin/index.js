import React,{useState} from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import "./style.css";
import { TextField,InputAdornment,InputLabel  } from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
const Index = () => {
    let isLoggedIn=true;
    const authToken = (localStorage.getItem("token1"));
      if(authToken===null){
        isLoggedIn=false
      }
      const navigate = useNavigate();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [validationErrors, setValidationErrors] = useState(false);
      const [validationMessage, setValidationMessage] = useState("");
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const requestParams = {
          email: email,
          password: password,
         
        
          type: "password",
        };
        console.log("email",email)
        axios
          .post("https://golden.softgenics.in/api/adminlogin", requestParams)
          .then((response) => {
            if (response && response.status === 200) {
            
              console.log(response.data)
              if (response.data) {
                setValidationErrors(false);
                const data = response.data;
                console.log(data)
                localStorage.setItem("token1",(data.token));
               navigate("/Dashboard")
              }
            }
          })
          .catch((error) => {
            if (
              error.response &&
              error.response.data &&
              error.response.status
            ) {
              console.log(error.response.data.status);
              setValidationErrors(true);
              setValidationMessage("Invalid Email / Password");
            }
          });
      };
 
    
  return (

    <div className='admin-login' >
        {isLoggedIn?<Navigate to="/admin"/>:<></>}
        <Container className='d-flex justify-content-center' >
            <Card className='form-card'>
                <div className='d-flex justify-content-center mb-3'>
                <LockTwoToneIcon sx={{width:40, height:40}} />
                </div>
            <TextField type="email" id="standard-basic" name='email' variant='standard' label="Username"
              fullWidth 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
               />
             {validationErrors && (
              <InputLabel color="error" error >
                {validationMessage}
              </InputLabel>
            )}
            <TextField type="password" id="standard-basic" name='password' variant='standard' label="Enter Password"
              fullWidth sx={{mt:2}}
              value={password}
              error={validationErrors}
              onChange={(e) => setPassword(e.target.value)}
                />
             {validationErrors && (
              <InputLabel color="error" error>
                {validationMessage}
              </InputLabel>
            )}
              <Button className='mt-4' onClick={handleSubmit}>Login</Button>
            </Card>
        </Container>
    </div>
  )
}

export default Index
