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
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item>
          
          <img className="" src="/Banner/safflower1.jpg" alt="Safflower" />
          <Carousel.Caption className="saff-caption animate__animated animate__slideInLeft">
            <p className="carousel-head saff-head " >Safflower Oil</p>
            <p className="carousel-desc saff-desc  " >Keeps the Heart Healthy</p>
            <Button className="animate__slideInDown animate__delay-1s">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/Banner/turmeric1.jpg" alt="Turmeric" className="tumeric-pic" />

          <Carousel.Caption className="tur-caption animate__animated animate__slideInLeft">
          <p className="carousel-head tur-head " >Turmeric Powder</p>
          <p className="carousel-desc tur-desc " >Include Spoonful illusion in your food</p>
            <Button className="tur-btn">Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src="/Banner/groundnut1.jpg" alt="Groundnut" />

          <Carousel.Caption className="grnd-caption animate__animated animate__slideInLeft">
          <p className="carousel-head gnd-head " >Groundnut Oil</p>
          <p className="carousel-desc gnd-desc " >Dont't Compromise with Health And Taste</p>
            <Button >Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <img className="" src="/Banner/coconut1.jpg" alt="Coconut" />
          <Carousel.Caption className="coco-caption animate__animated animate__slideInLeft">
          <p className="carousel-head coco-head " >Coconut Oil</p>
        <p className="carousel-desc coco-desc " >The Real Super Food From Nature</p>
            <Button >Buy Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
