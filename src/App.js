import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import Home from "./Components/Pages/Home";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import Coconuts from "./Components/Pages/Coconuts";
import Groundnuts from "./Components/Pages/Groundnuts";
import Safflowers from "./Components/Pages/Safflowers";
import Turmerics from "./Components/Pages/Turmerics";
import Products from "./Components/Pages/Products";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Cart from "./Components/Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coconut" element={<Coconuts />} />
          <Route path="/groundnut" element={<Groundnuts />} />
          <Route path="/safflower" element={<Safflowers />} />
          <Route path="/turmeric" element={<Turmerics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <WhatsApp />
    </div>
  );
}

export default App;
