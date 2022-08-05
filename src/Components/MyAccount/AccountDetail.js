import { TextField } from '@mui/material'
import React,{useState, useEffect} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import "./MyAccount.css"
import axios from 'axios'
const AccountDetail = () => {
  
    const [fname, setName]=useState('');
    const [email, setemail]=useState('');
    const [password, setPassword]=useState('');
    const [number, setNumber]=useState('234567');


const id=localStorage.getItem('id')
    const [BlogData, setBlogData]=useState([])
useEffect(()=>{
const fetchdata=async()=>{
  const res=await axios.get(`https://golden.softgenics.in/api/ViewUser/${id}`);

  setBlogData(res.data[0]);

}
fetchdata();
},[])
const submitform = (e) => {
    e.preventDefault();
    
    axios
      .put(
        `https://golden.softgenics.in/api/updateuser/${id}`,
        {  email:email,
          name: fname,
         number:number,
          password:password,
          
          
        }
       
      )
      .then((res) => {
        if (res && res.status === 200) {
           alert("Account update successfully");
          
        }
        console.log("response", res);
        //navigate("/AddHairsProducts");
      });
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
    localStorage.removeItem("id")
    localStorage.removeItem("name")
    
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
                    <label>Name</label>
                    <br></br>
                    <input
                        type="text"
                        defaultValue={BlogData.name} onChange={e=>setName(e.target.value)}
                        className="mb-2"
                        />
                       
                        <p>This will be how your name will be displayed in the account section and in reviews</p>
                        <label>Email</label>
                            <br></br>
                            <input
                                type="email"
                                Value={BlogData.email}
                                onChange={e=>setemail(e.target.value)}
                                className="mb-2"
                                />
                            <p>Change Your password</p>
                            <label>Old Password</label>
                            <br></br>
                            <input
                            type="password"
                            placeholder="Old Password"
                            className='mb-2'
                            />
                            <br></br>
                            <label>New Password</label>
                            <br></br>
                            <input
                            type="password"
                            placeholder="New Password"
                            className='mb-2'
                            onChange={e=>setPassword(e.target.value)}
                            />
                            <br></br>
                            <label>Confirm New Password</label>
                            <br></br>
                            <input
                            type="password"
                            placeholder="Confirm New Password"
                            className='mb-4'
                            />
                            <br></br>
                            <button onClick={submitform}>upadate account</button>
                    </Col>
                </Row>
            </Container>
        <Footer />
    </div>
  )
}

export default AccountDetail