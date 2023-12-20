import React from "react";
import Footer from "./Footer";
import What_we_d from "./Ourwork";
import CaroselFront from "./CaroselFront";

const AllComponent = () => {
  return (
    <div>
      <div>
        <CaroselFront />
     
      </div>
      <div>
        <What_we_d />
      </div>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AllComponent;
