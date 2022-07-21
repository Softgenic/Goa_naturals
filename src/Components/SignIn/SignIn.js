import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import './SignIn.css';
const SignIn = () => {
  return (
    <div className='signin'>
        <Form>
        <InputGroup className="mb-4 mt-3">
        <InputGroup.Text id="basic-addon1"><i className='fas fa-user' /></InputGroup.Text>
        <Form.Control
          placeholder="Username/E-mail"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text id="basic-addon2"><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Password"
          aria-label="Password"
          type='password'
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <div className='d-flex'>
      <Form.Check label="Remember Me" />
      <p className='ms-auto'>Forgot password ?</p>
      </div>
      <button className='btn-signin mt-3'>Sign In</button>
      </Form>
    </div>
  )
}

export default SignIn