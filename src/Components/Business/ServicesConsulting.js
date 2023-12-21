import React, { useEffect } from "react";
import Aos from "aos";
import "../../CSS/Services.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import bgindustry from "../../Images/bgit.webp";
import animation from "../../Images/animationiamges.gif";
import namaste from "../../Images/namaste.gif";
import bus from "../../Images/bgitservicesss.webp";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import home from "../../Images/home.jpg";
import hpgif from "../../Images/hpgif.gif";

const ServicesConsulting = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <>
     
      <MDBCarousel showControls interval={2000}>
        <MDBCarouselItem itemId={1}>
          <div
            style={{
              backgroundImage: `url('${bgindustry}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="fade-up"
          >
            <div
              style={{
                backgroundColor: "rgb(0 11 21 / 67%)",
                height: "700px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <br />
                    <br />
                    <h3 style={{ color: "white", paddingTop: "20px" }}>
                      Welcome to Burnettbrück IT solutions and services
                    </h3>
                    <br />
                    <br />
                    <br />
                    <p
                      style={{
                        color: "white",
                        textAlign: "left",
                        marginLeft: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                      }}
                    >
                      At Burnettbrück, we are a global software development
                      company dedicated to enabling businesses to achieve their
                      objectives with bespoke, industry-specific software
                      solutions. Our journey began with a fervent desire to
                      transform the world, and today, we stand as a beacon of
                      progress, prosperity, and development. Burnettbrück IT
                      Services and Solutions are designed to propel businesses
                      toward their goals. We specialize in crafting
                      cutting-edge, industry-specific software that elevates
                      operational efficiency, fosters growth, and drives success
                      on a global scale.
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
                    <br/>
                    <br/>
                    <img
                    src={hpgif}
                    style={{
                      float: "left",
                      height: "150px",
                      width: "150px",
                      marginLeft: "100px",
                      float: "right",
                    }}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
        <div
            style={{
              backgroundImage: `url('${bgindustry}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="fade-up"
          >
            <div
              style={{
                backgroundColor: "rgb(0 11 21 / 67%)",
                height: "700px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <br />
                    <br />
                    <h3 style={{ color: "white", paddingTop: "20px" }}>
                      Welcome to Burnettbrück IT solutions and services
                    </h3>
                    <br />
                    <br />
                    <br />
                    <p
                      style={{
                        color: "white",
                        textAlign: "left",
                        marginLeft: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                      }}
                    >
                      At Burnettbrück, we are a global software development
                      company dedicated to enabling businesses to achieve their
                      objectives with bespoke, industry-specific software
                      solutions. Our journey began with a fervent desire to
                      transform the world, and today, we stand as a beacon of
                      progress, prosperity, and development. Burnettbrück IT
                      Services and Solutions are designed to propel businesses
                      toward their goals. We specialize in crafting
                      cutting-edge, industry-specific software that elevates
                      operational efficiency, fosters growth, and drives success
                      on a global scale.
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
                    <br/> <br/>
                    <img
                    src={hpgif}
                    style={{
                      float: "left",
                      height: "150px",
                      width: "150px",
                      marginLeft: "100px",
                      float: "right",
                    }}
                  />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
        <div
            style={{
              backgroundImage: `url('${bgindustry}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="fade-up"
          >
            <div
              style={{
                backgroundColor: "rgb(0 11 21 / 67%)",
                height: "700px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <br />
                    <br />
                    <h3 style={{ color: "white", paddingTop: "20px" }}>
                      Welcome to Burnettbrück IT solutions and services
                    </h3>
                    <br />
                    <br />
                    <br />
                    <p
                      style={{
                        color: "white",
                        textAlign: "left",
                        marginLeft: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                      }}
                    >
                      At Burnettbrück, we are a global software development
                      company dedicated to enabling businesses to achieve their
                      objectives with bespoke, industry-specific software
                      solutions. Our journey began with a fervent desire to
                      transform the world, and today, we stand as a beacon of
                      progress, prosperity, and development. Burnettbrück IT
                      Services and Solutions are designed to propel businesses
                      toward their goals. We specialize in crafting
                      cutting-edge, industry-specific software that elevates
                      operational efficiency, fosters growth, and drives success
                      on a global scale.
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
                    <br/>
                    <br/>
                    <img
                    src={hpgif}
                    style={{
                      float: "left",
                      height: "150px",
                      width: "150px",
                      marginLeft: "100px",
                      float: "right",
                    }}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCarouselItem>
      </MDBCarousel>
      <br />
      <br />
      {/* <div className="line-at-bot top-0" data-aos="zoom-in"></div>
      <br />
      <br />
      <div
        className="row"
        style={{ width: "100%", paddingLeft: "200px" }}
        data-aos="fade-up"
      >
        <div className="col-lg-6">
          <img src={animation} width="100%" height="100%" />
        </div>
        <div className="col-lg-6">
          <h1 style={{ color: "black" }}>
            <b>
              We Consultant to Get
              <br /> Business Plan
            </b>
          </h1>
          <br />
          <h4>
            <i>
              At Burnettbrück Consulting, we recognize the pivotal role a
              business plan plays in any company's success. Our tailored guide
              simplifies the process, ensuring organizations of all sizes and
              stages can create a comprehensive business plan.
            </i>
          </h4>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <button className="button-5">LEARN MORE</button>
            </div>
            <div
              className="col-lg-6"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <div>
                <LinkedInIcon />
              </div>
              <div>
                <LinkedInIcon />
              </div>
              <div>
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <br />
      <br />
      <br />
      <br />
      <br /> */}

      <div
        style={{
          backgroundColor: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "40px",
        }}
        data-aos="fade-up"
      >
        <div  style={{textAlign: "center"}}>
       
         
            <h2>Technologies We Work On</h2>
            <img
              src={namaste}
              style={{
                float: "right",
                height: "150px",
                width: "150px",
                marginLeft: "100px",
              }}
            />

            <div className="line-at-bot top-0"></div>
           
              <p style={{ paddingLeft: "200px" }}>
                At Burnettbrück, our expertise traverses a dynamic spectrum of
                cutting-edge technologies that drive innovation and
                transformation across industries. From the realm of Artificial
                Intelligence and Machine Learning, where predictive analytics
                and automation redefine decision-making, to the implementation
                of Blockchain,cloud Computing, and robust Cybersecurity
                solutions, fortifying businesses with scalable connectivity,
                adaptable resources, and resilient data protection.
              </p>
          
          <div className="ag-format-container">
            <div className="ag-courses_box">
              <div className="ag-courses_item">
                <a
                  href="#"
                  className="ag-courses-item_link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Front-end development&#160;
                  </div>
                  <div className="ag-courses-item_date-box"></div>
                </a>
              </div>
              <div className="ag-courses_item">
                <a
                  href="#"
                  className="ag-courses-item_link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Web development&#160;
                  </div>
                  <div className="ag-courses-item_date-box"></div>
                </a>
              </div>
              <div className="ag-courses_item">
                <a
                  href="#"
                  className="ag-courses-item_link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Python Developer&#160;
                  </div>
                  <div className="ag-courses-item_date-box"></div>
                </a>
              </div>
              <div className="ag-courses_item">
                <a
                  href="#"
                  className="ag-courses-item_link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    React Developer&#160;
                  </div>
                  <div className="ag-courses-item_date-box"></div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a
                  href="#"
                  className="ag-courses-item_link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">Java Developer</div>
                  <div className="ag-courses-item_date-box"></div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a
                  href="#"
                  className="ag-courses-item_link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Full stack Developer
                  </div>

                  <div className="ag-courses-item_date-box"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url('${bus}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            textAlign: "center",
          }}
          data-aos="zoom-in"
        >
          <div
            style={{
              backgroundColor: "#000000a8",
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-4">
              <h2 style={{ color: "white" }}>
                100+
                <br />
                BUSES
              </h2>
            </div>
            <div className="col-lg-4">
              <h2 style={{ color: "white" }}>
                1000+
                <br />
                HAPPY CUSTOMERS
              </h2>
            </div>
            <div className="col-lg-4">
              <h2 style={{ color: "white" }}>
                250+
                <br />
                CITIES TRAVEL
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesConsulting;
