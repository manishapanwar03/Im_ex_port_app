import React, { useEffect } from "react";
// import Carosel1 from "./Carosel1";
// import About_us from "./About_us";
// import Team from "./Team";
import Footer from "./Footer";
import What_we_d from "./What_we_d";
import Carosel from "./Carosel";
import Cardss from "./Cardss";
import CaroselFront from "./CaroselFront";


const AllComponent = () => {
 
  return (
    <div>
      <div>
        {/* <Carosel/> */}
        <CaroselFront/>
      </div>
      <div >
        {/* <Cardss/> */}
        <What_we_d/>
        {/* <Carosel1 /> */}
        {/* <About_us /> */}
      </div>
      <div>
        {/* <Team /> */}
      </div>
      <br/>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AllComponent;
