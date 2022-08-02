import React, {useState} from 'react'
import { Form, InputGroup, Button, Modal} from 'react-bootstrap';
import "./SignUp.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const SignUp = () => {
     //MODAL FOR TERMS AND CONDITION
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
  const [email,setemail]=useState([]);
  const [fname, setfname]= useState([]);
  const [password, setpassword] = useState([]);
  const [confirmpassword, setconfirmpassword] = useState([]);
  const [number ,setnumber] = useState("125637");
  console.log(setnumber)
  const handleSignUp =(e)=>{
 
    e.preventDefault();
    axios.post('https://golden.softgenics.in/api/addUser',{
      email:email,  
      name:fname,
      number:number,
      password:password
    }).then((res)=>{
      if(password===confirmpassword){
      if(res && res.status===200){
        alert('signup success')
      }else(
        alert("failed")
      )
    }else{
      toast.warning("Pasword & Confirm password not matched")
    }})
  }

  return (
    <div className='signup'>
      <ToastContainer position='top-center' />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms And Condition</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Terms and Condition........</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Form onSubmit={(e)=>handleSignUp(e)}>
      <InputGroup className="mb-4 mt-3">
        <InputGroup.Text ><i className='fas fa-user' /></InputGroup.Text>
        <Form.Control
          placeholder="Full Name"
          type='text'
          value={fname}
          onChange={(e)=>setfname(e.target.value)}
          
        />
      </InputGroup>
      <InputGroup className="mb-4 mt-3">
        <InputGroup.Text ><i className='fas fa-at' /></InputGroup.Text>
        <Form.Control
          placeholder="E-mail"
          type='email'
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3 ">
        <InputGroup.Text><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Password"
          type='password'
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text ><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Confirm Password"
          aria-label="Password"
          type='password'
          value={confirmpassword}
          onChange={(e)=>setconfirmpassword(e.target.value)}
        
        />
      </InputGroup>
      <Form.Check label="Subscribe to our newsletter" />
      <div className='d-flex'>
      <Form.Check value="terms" /><lable htmlFor="terms" className="ms-2" >I accept the <span onClick={handleShow}>Terms of Service and Privacy Policy</span></lable>
      
      </div>
      <button className='btn-signin mt-3' onClick={handleSignUp}>Sign In</button>
      </Form>
      
    </div>

  )
}

export default SignUp