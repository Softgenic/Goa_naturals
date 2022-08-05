import React,{useState, useEffect} from 'react'
import { Card, Col, Container, Row, Modal, Button } from 'react-bootstrap'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import "./MyAccount.css"
import axios from 'axios'
import { Box, MenuItem, TextField } from "@mui/material";
const Address = () => {
  const id=localStorage.getItem('id')
  const email=localStorage.getItem('email');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //view address by Id
const [address,setAddress]=useState([])
    useEffect(()=>{
      const fetchdata=async()=>{
        const res=await axios.get(`https://golden.softgenics.in/api/ViewAddress/${id}`);
      if(res.data[0]){
        setAddress(res.data[0]);
        setfullname(res.data[0].fullname)
        setaddress(res.data[0].address)
        setcity(res.data[0].city)
        setstate(res.data[0].state)
        setpostcode(res.data[0].postcode)
        setphone(res.data[0].phone)
        
      }else{
      setAddress("");
    }
      }
      fetchdata();
      },[])
      // post api
      const [fullname, setfullname]=useState('')
      const [Address, setaddress]=useState('')
      const [city, setcity]=useState('')
      const [state, setstate]=useState('')
      const [postcode, setpostcode]=useState('')
      const [phone, setphone]=useState('')
      console.log(fullname)

      const submitform = () => {
        // e.preventDefault();
       
        axios
          .post(
            `https://golden.softgenics.in/api/adduseraddress`,
            {
              userId:id,
             fullname:fullname,
             address:Address,
             city:city,
             state:state,
             postcode:postcode,
             phone:phone,
             

            },
           
          )
          .then((res) => {
            if (res && res.status === 200) {
               alert("address update successfully");
            
            }
            console.log("response", res);
            //navigate("/AddHairsProducts");
          });
      };



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
        setstate(event.target.value);
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
                  <form>
                <TextField
              id="outlined-textarea"
              label="Full Name"
              value={fullname}
              onChange={e=>setfullname(e.target.value)}
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
              defaultValue={Address}
              onChange={e=>setaddress(e.target.value)}
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
              defaultValue={city}
              onChange={e=>setcity(e.target.value)}
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
                Value={state}
                onChange={e=>setstate(e.target.value)}
              
               
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
              defaultValue={postcode}
              onChange={e=>setpostcode(e.target.value)}
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
                  defaultValue={phone}
                  onChange={e=>setphone(e.target.value)}
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
                  value={email}
                  
                  color="success"
                  sx={{ mb: "2rem" }}
                  multiline
                />
                </Col>
                </Row>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-success border-0' onClick={submitform}><i className='fas fa-save me-2' />Save</button>
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
                    <button className='btn btn-success border-0' >UPDATE</button>
                </Modal.Footer>
            </Modal>
        <Footer />
    </div>
  )
}

export default Address