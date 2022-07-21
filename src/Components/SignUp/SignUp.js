import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className='signup'>
      <Form>
      <InputGroup className="mb-4 mt-3">
        <InputGroup.Text id="basic-addon1"><i className='fas fa-at' /></InputGroup.Text>
        <Form.Control
          placeholder="E-mail"
          aria-label="email"
          type='email'
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <InputGroup className="mb-4 mt-3">
        <InputGroup.Text id="basic-addon2"><i className='fas fa-user' /></InputGroup.Text>
        <Form.Control
          placeholder="Full Name"
          aria-label="Full Name"
          type='text'
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text id="basic-addon3"><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Password"
          aria-label="Password"
          type='password'
          aria-describedby="basic-addon3"
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text id="basic-addon3"><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Confirm Password"
          aria-label="Password"
          type='password'
          aria-describedby="basic-addon4"
        />
      </InputGroup>
      <Form.Check label="Subscribe to our newsletter" />
      <div className='d-flex'>
      <Form.Check label="I accept the" /> <p className='ms-1'> Terms of Service and Privacy Policy</p>
      </div>
      <button className='btn-signin mt-3'>Sign In</button>
      </Form>
    </div>
  )
}

export default SignUp