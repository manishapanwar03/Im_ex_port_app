import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllComponent from "./Components/AllComponent";
import Contact from "./Components/Contact";
import Petrolum_pump from "./Components/Business/PetrolumPump";
import About from "./Components/About";
import ServicesConsulting from "./Components/Business/ServicesConsulting";
import Career from "./Components/Career";
import StockMarket from "./Components/Business/StockMarket";
import TradingServices from "./Components/Business/TradingServices";
// import Carosel from "./Components/Carosel";
// import Carosel1 from "./Components/Carosel1";
const App = () => {
 
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AllComponent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/petrolum" element={<Petrolum_pump />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<ServicesConsulting/>} />
          <Route path="/career" element={<Career/>}/>
          <Route path="/stock" element={<StockMarket/>}/>
          <Route path="/trading" element={<TradingServices/>}/>
         
        </Routes>
      </BrowserRouter>
      {/* <Carosel1/> */}
    </div>
  );
};

export default App;
