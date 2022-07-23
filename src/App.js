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
import Checkout from "./Components/Pages/Checkout";
import ViewProduct from "./Components/Pages/ViewProduct";
import ViewCart from "./Components/Pages/ViewCart";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { StoreProvider } from "./utils/Store";

function App() {
  return (
    <StoreProvider>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coconut" element={<Coconuts />} />
            <Route path="/groundnut" element={<Groundnuts />} />
            <Route path="/safflower" element={<Safflowers />} />
            <Route path="/turmeric" element={<Turmerics />} />
            <Route path="/products" element={<Products />} />
            <Route path="/About-Us" element={<AboutUs />} />
            <Route path="/Contact-Us" element={<ContactUs />} />
            <Route path="/ViewProduct" element={<ViewProduct />} />
            <Route path="/ViewCart" element={<ViewCart />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
        <WhatsApp />
      </div>
    </StoreProvider>
  );
}

export default App;
