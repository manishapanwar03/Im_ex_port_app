import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Carosel.css";

const Carosel = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://5.imimg.com/data5/SELLER/Default/2023/2/XN/UA/IX/92821312/anh-gt-500x500.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
        }}
        data-aos="zoom-in"
      >
        <div
          style={{
            backgroundColor: "rgb(0 11 21 / 84%)",
            height: "800px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <div>
              <h3 style={{ color: "white" }}> Business Consulting</h3>
              <br />
              <h3 style={{ color: "white" }}>
                Our Intelligent Technology Solution <br />
                and Services
              </h3>
              <br />
              <p style={{ color: "white", fontSize: "17px" }}>
                Its is a global software development company helping companies
                to achieve their <br />
                goals with world-class industry-specific software solutions.
              </p>
              <br />
              <br />
              <Link to="/contact" className="button-53">
                Enquiry Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
     
    </div>
  );
};

export default Carosel;
