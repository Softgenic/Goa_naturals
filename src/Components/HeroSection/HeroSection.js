import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./HeroSection.css";
import 'animate.css';
const HeroSection = () => {
  AOS.init();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    AOS.refresh();
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          
          <img className="" src="/Banner/safflower.jpg" alt="Safflower" />
          <Carousel.Caption>
            <p className="carousel-head saff-head animate__animated animate__slideInDown animate__delay-1s" >Safflower Oil</p>
            <p className="carousel-desc saff-desc animate__animated animate__slideInDown " >Keeps the Heart Healthy</p>
            <Button className="animate__slideInDown animate__delay-1s">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src="/Banner/turmeric.jpg" alt="Turmeric" />

          <Carousel.Caption>
          <p className="carousel-head tur-head animate__animated animate__slideInDown animate__delay-1s" >Turmeric Powder</p>
          <p className="carousel-desc tur-desc animate__animated animate__slideInDown" >Include Spoonful illusion in your food</p>
            <Button className="tur-btn">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src="/Banner/groundnut.jpg" alt="Groundnut" />

          <Carousel.Caption>
          <p className="carousel-head gnd-head animate__animated animate__slideInDown animate__delay-1s" >Groundnut Oil</p>
          <p className="carousel-desc gnd-desc animate__animated animate__slideInDown" >Dont't Compromise with Health And Taste</p>
            <Button >Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <img className="" src="/Banner/coconut.jpg" alt="Coconut" />
          <Carousel.Caption>
          <p className="carousel-head coco-head animate__animated animate__slideInDown animate__delay-1s" >Coconut Oil</p>
        <p className="carousel-desc coco-desc animate__animated animate__slideInDown " >The Real Super Food From Nature</p>
            <Button >Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
