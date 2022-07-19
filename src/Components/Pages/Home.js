import React from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import FarmToFork from "../FarmToFork/FarmToFork";
const Home = () => {
  return (
    <div>
      <NavbarMenu />
      <HeroSection />
      <FarmToFork />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
