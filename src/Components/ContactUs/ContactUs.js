import React from 'react'
import Footer from '../Footer/Footer';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import "./ContactUs.css";
import Logo from "../Assets/images/goa-natural-logo.jpg";
import Iframe from 'react-iframe';
const ContactUs = () => {
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
                <div className="contact-address-box row">
                    <div className="col-sm-4 single-contact-address-box text-center">
                        <div className="icon-holder">
                            <span className="icon-clock-1">
                                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span>
                            </span>
                        </div>
                            <img src={Logo} alt="Goa naturals logo" />
                    </div>
                    <div className="col-sm-4 single-contact-address-box main-branch">
                        <h3>Our Details</h3>
                        <div className="inner">
                            <ul>
                                <li>
                                    <div className="title">
                                        <h4>Address:</h4>
                                    </div>
                                    <div className="text">
                                        <p>Plot 34, Kakoda Industrial Estate – Phase III, Kakoda, Curchorem, Goa, India 403706</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">
                                        <h4>Mobile <br></br> E-mail:</h4>
                                    </div>
                                    <div className="text">
                                        <p>9822168979<br></br><small>adwingoa@gmail.com | goanatural2222@gmail.com</small> </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">
                                        <h4><i className="fab fa-facebook" /> <br></br> <i className="fab fa-instagram" /> </h4>
                                    </div>
                                    <div className="text">
                                        <p><br></br></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 single-contact-address-box text-center">
                        <div className="icon-holder">
                            <span className="icon-question-2">
                                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                            </span>
                        </div>
                        <img src={Logo} alt="Goa naturals logo" />
                    </div>

        </div>
    </div>
</section>  
<section className="contact-info-area">
    <div className="container">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="contact-form">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sec-title-style1 float-left">
                                <div className="title">Send Your Message</div>
                                <div className="text"><div className="decor-left"><span></span></div><p>Contact Form</p></div>
                            </div>

                        </div> 
                    </div>   
                    <div className="inner-box">
                        <form id="contact-form" name="contact_form" className="default-form"  >
                            <div className="row">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="input-box">   
                                                <input type="text" name="name" placeholder="Name"  />
                                            </div> 
                                             <div className="input-box"> 
                                                <input type="text" name="phone"  placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="input-box"> 
                                                <input type="email" name="email"  placeholder="Email"  />
                                            </div>
                                            <div className="input-box"> 
                                                <input type="text" name="website" placeholder="Website" />
                                            </div> 
                                        </div>  
                                    </div> 
                                    <div className="row">
                                         <div className="col-xl-12">
                                            <div className="input-box"> 
                                                <input type="text" name="subject"  placeholder="Subject" />
                                            </div>     
                                        </div> 
                                    </div>   
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="input-box">    
                                        <textarea name="message" placeholder="Your Message..." required=""></textarea>
                                    </div>
                                    <div className="button-box">
                                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" />
                                        <button type="submit" data-loading-text="Please wait..." >Send Message<span className="flaticon-next"></span></button>    
                                    </div>         
                                </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
    </div>
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30793.242121330357!2d74.07940021128296!3d15.259326319971318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfac626b8b0a1f%3A0xcbd07e214f77deea!2sKakoda%2C%20Vodlemol%20Cacora%2C%20Goa!5e0!3m2!1sen!2sin!4v1658314484489!5m2!1sen!2sin"
      width='100%'
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        <Footer />
    </div>
  )
}

export default ContactUs