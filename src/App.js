import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import Home from "./Components/Pages/Home";
import Coconuts from "./Components/Pages/Coconuts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coconut" element={<Coconuts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
