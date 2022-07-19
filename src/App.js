import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Home from "./Components/Pages/Home";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <WhatsApp />
    </div>
  );
}

export default App;
