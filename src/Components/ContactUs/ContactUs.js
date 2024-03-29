import React from 'react'
import Footer from '../Footer/Footer';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import "./ContactUs.css";
import Logo from "../Assets/images/goa-natural-logo.jpg";
import Iframe from 'react-iframe';
import { Button, TextField, Box, MenuItem } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactUs = () => {
    AOS.init();
    const Help=[
        {
            value: "Factory Visit",
            label: "Factory Visit",
          },
          {
            value: "DealerShip Model",
            label: "DealerShip Model",
          },
    ];
    const [help, sethelp] = React.useState([]);

    const handleChange = (event) => {
        sethelp(event.target.value);
    };
  return (
    <div>
        <NavbarMenu />
        <div className='contact'>
        <section className="contact-address-area">
    <div className="container">
        <div className="sec-title-style1 text-center max-width">
            <div className="title">Contact Us</div>
            <div className="text"><div className="decor-left"><span></span></div><p>Quick Contact</p><div className="decor-right"><span></span></div></div>
            <div className="bottom-text">
                <p>Goa Natural produces Cold pressed Coconut oil, Groundnut oil and Safflower
oil.</p>
            </div>
        </div>
</div>
<Container>
        <Row>
            <Col lg={6} className='contact-details' data-aos='fade-right' data-aos-duration='1000'>
                <h2 className=' mt-4'>Contact Details</h2>
                <p>Goa Natural produces Cold pressed Coconut oil, Groundnut oil and Safflower oil. Using cold pressed oils for cooking instead of refined oils could be one of the major answers to these deadly diseases. </p>
                <p ><span><i className='fas fa-map-marker-alt me-2'/></span>
                Plot 34, Kakoda Industrial Estate – Phase III, Kakoda, Curchorem,<br></br> Goa, India 403706

                <br></br><span><i className="fas fa-envelope me-2" /></span>adwingoa@gmail.com | goanatural2222@gmail.com

                <br></br><span><i className="fas fa-phone-alt me-2 mt-2" /></span>9822168979 | 8007774122 | 8605070650</p>
            </Col>
            <Col md={6} data-aos='fade-up' data-aos-duration='1000' >
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30793.242121330357!2d74.07940021128296!3d15.259326319971318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfac626b8b0a1f%3A0xcbd07e214f77deea!2sKakoda%2C%20Vodlemol%20Cacora%2C%20Goa!5e0!3m2!1sen!2sin!4v1658314484489!5m2!1sen!2sin"
                width='100%'
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                
                />
            </Col>
        </Row>
        <Row className='mt-5'>
            <Col md={3}></Col>
            <Col md={6} className="contact-us-form" data-aos='fade-up' data-aos-duration='1000'>
                <h5 className='mt-4 text-center'>Send Us What Your Thought's</h5>
                <TextField type="Name" color="success" variant='standard' label="Name" fullWidth sx={{mb:2}} />
                <TextField type="Email" color="success" variant='standard' label="Email" fullWidth sx={{mb:2}} />
                <TextField type="Mobile No" color="success" variant='standard' label="Mobile No" fullWidth sx={{mb:2}} />
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
                        label="How we Can Help You?"
                        fullWidth
                        variant='standard'
                        value={help}
                        onChange={handleChange}
                       sx={{mb:4}}
                    >
                        {Help.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    </Box>
                <TextField type="Comment" color="success" variant='standard' label="Comment" fullWidth sx={{mb:2}} />
                <Button color='success' sx={{mt:3}} variant='contained'>Send</Button>
            </Col>
            <Col md={3}></Col>
        </Row>
    </Container>
</section>
    </div>

 
        <Footer />
    </div>
  )
}

export default ContactUs