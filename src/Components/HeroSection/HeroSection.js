import React,{useState} from 'react'
import { Button, Carousel } from 'react-bootstrap';
// Background hero images
import Sunflower from "../Assests/images/safflower.jpg";
import Turmeric from "../Assests/images/turmeric.jpg";
import Groundnut from "../Assests/images/groundnut.jpg";
import Coconut from "../Assests/images/coconut.jpg";
import "./HeroSection.css";
const HeroSection = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Sunflower}
          alt="SunFlower"
        />
        <Carousel.Caption>
            <Button>Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Turmeric}
          alt="Turmeric"
        />

        <Carousel.Caption>
        <Button>Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Groundnut}
          alt="Groundnut"
        />

        <Carousel.Caption>
        <Button>Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Coconut}
          alt="Coconut"
        />

        <Carousel.Caption>
        <Button>Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HeroSection