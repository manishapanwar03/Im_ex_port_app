import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllComponent from "./Components/AllComponent";
import Contact from "./Components/Contact";
import Petrolum_pump from "./Components/Business/Fabrication";
import About from "./Components/About";
import ServicesConsulting from "./Components/Business/ServicesConsulting";
import Career from "./Components/Career";
import StockMarket from "./Components/Business/StockMarket";
import TradingServices from "./Components/Business/TradingServices";

const App = () => {
  const NotFound = () => {
    return <h1>404 Not Found</h1>;
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: "100px" }}>
          <Routes>
            <Route exact path="/" element={<AllComponent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/petrolum" element={<Petrolum_pump />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesConsulting />} />
            <Route path="/career" element={<Career />} />
            <Route path="/stock" element={<StockMarket />} />
            <Route path="/trading" element={<TradingServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
