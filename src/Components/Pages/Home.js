import React from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import FarmToFork from "../FarmToFork/FarmToFork";
import Why from "../Why/Why";
import Benefits from "../Benefits/Benefits";

const Home = () => {
  return (
    <div>
      <NavbarMenu />
      <HeroSection />
      <FarmToFork />
      <Why />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;
