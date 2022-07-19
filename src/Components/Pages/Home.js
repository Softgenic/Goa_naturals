import React from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import FarmToFork from "../FarmToFork/FarmToFork";
import Why from "../Why/Why.jsx";

const Home = () => {
  return (
    <div>
      <NavbarMenu />
      <HeroSection />
      <FarmToFork />
      <Why />
      <Footer />
    </div>
  );
};

export default Home;
