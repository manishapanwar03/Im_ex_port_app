import React, { useEffect } from "react";
import Aos from "aos";
import "../../CSS/Fabrication.css";
import bus from "../../Images/bus1 (1).jpg";
import home from "../../Images/home.jpg";
import petrolum from "../../Images/petrolumpump.webp";
import containerhoouse from "../../Images/containerhuse.jpg";
import bushouse from "../../Images/bushouse.jpg";
import indianoil from "../../Images/indaianoil.jpg";
import Footer from "../Footer";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import hpgif from "../../Images/hpgif.gif";
import warehouse from '../../Images/warehouse.jpg'
const PetrolumPump = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <div>
      <MDBCarousel showControls interval={2000}>
        <MDBCarouselItem itemId={1}>
          <div
            style={{
              backgroundImage: `url('${petrolum}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="fade-up"
          >
            <div
              style={{
                backgroundColor: "rgb(0 11 21 / 84%)",
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
                      Welcome to Burnettbrück Fabrication and reaction assembly !!!
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
                      At Burnettbrück Petroleum Pump, we take pride in
                      delivering not just fuel but a service experience marked
                      by efficiency, reliability, and convenience. Our stations
                      are meticulously designed to cater to diverse customer
                      needs, ensuring a seamless refueling process. Quality
                      Fuel: We understand the significance of quality fuel for
                      your vehicle's performance. That's why we guarantee only
                      the finest, meticulously tested fuel options, ensuring
                      optimal engine performance and efficiency for every
                      journey. ...
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
              backgroundImage: `url('${petrolum}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="fade-up"
          >
            <div
              style={{
                backgroundColor: "rgb(0 11 21 / 84%)",
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
                      Welcome to Burnettbrück Fabrication and reaction assembly!!!
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
                      At Burnettbrück Petroleum Pump, we take pride in
                      delivering not just fuel but a service experience marked
                      by efficiency, reliability, and convenience. Our stations
                      are meticulously designed to cater to diverse customer
                      needs, ensuring a seamless refueling process. Quality
                      Fuel: We understand the significance of quality fuel for
                      your vehicle's performance. That's why we guarantee only
                      the finest, meticulously tested fuel options, ensuring
                      optimal engine performance and efficiency for every
                      journey. ...
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
        <MDBCarouselItem itemId={3}>
          <div
            style={{
              backgroundImage: `url('${petrolum}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="fade-up"
          >
            <div
              style={{
                backgroundColor: "rgb(0 11 21 / 84%)",
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
                      Welcome to Burnettbrück Fabrication and reaction assembly!!!
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
                      At Burnettbrück Petroleum Pump, we take pride in
                      delivering not just fuel but a service experience marked
                      by efficiency, reliability, and convenience. Our stations
                      are meticulously designed to cater to diverse customer
                      needs, ensuring a seamless refueling process. Quality
                      Fuel: We understand the significance of quality fuel for
                      your vehicle's performance. That's why we guarantee only
                      the finest, meticulously tested fuel options, ensuring
                      optimal engine performance and efficiency for every
                      journey.. ...
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "100px",
        }}
      >
        <div className="col-lg-6">
          <h1 style={{ color: "#155289" }}> Burnettbrück FUEL STATION </h1>
          <div className="hropenings"></div>
          <br />
          <p>
            We are Petrol Pump Canopy Manufacturer in MP, and Also Deal In PAN
            India. Our Petrol Pump Canopy Manufacturing work and Assemble
            material of Petrol Pump Canopy dispatch fro Bhopal, Madhya Pradesh
            to site location in PAN India. Petrol Pump Canopy Fabrication or
            Petrol Pump Canopy Manufacturing done as per the design & drawing
            approve by the company or dealer of the Petrol Pump. The Designing
            of Fuel Station Canopy as per Standard IS Code with verification of
            all forces & loads which is applicable on a Petrol Pump Canopy. We
            have our Self Product Unit & Man-Power for the Petrol Pump Canopy
            manufacturing. We are Manufacturing Petrol Pump Canopy for Indian
            Oil Corporation Limited (IOCL), Bharat Petroleum Corporation Limited
            (BPCL), Hindustan Petroleum Corporation Limited, (HPCL), and ESSAR
            Oil Limited, we are Providing our Petrol Pump Canopies for other
            petroleum Company Like Hindustan Bio Diesel, Indizel MEE, etc. The
            Specific material of Petrol Pump Canopy is as per Make list of
            company or decided by the company parameters.
            <br />
            <br />
            Also we will provide you civil foundation work for your Canopy Work.
            We have complete package of canopy construction.Gallery –
            <p style={{ color: "#155289" }}> Petrol Pump Canopies</p>
          </p>
        </div>
        <div className="col-lg-6">
          <div style={{ display: "flex" }}>
            <div className="col-lg-6">
              <img
                src={indianoil}
                style={{ height: "150px", paddingLeft: "20px" }}
              />
            </div>
            <div className="col-lg-6">
              <img src={indianoil} style={{ height: "150px" }} />
            </div>
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <div className="col-lg-6">
              <img
                src={indianoil}
                style={{ height: "150px", paddingLeft: "20px" }}
              />
            </div>
            <div className="col-lg-6">
              <img src={indianoil} style={{ height: "150px" }} />
            </div>
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <div className="col-lg-6">
              <img
                src={indianoil}
                style={{ height: "150px", paddingLeft: "20px" }}
              />
            </div>
            <div className="col-lg-6">
              <img src={indianoil} style={{ height: "150px" }} />
            </div>
          </div>
        </div>
      </div>

      <br />
      <hr />
      

      <div  
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "100px",
        }}
        data-aos="zoom-in"
      >
        <div className="col-lg-6">
          <img src={containerhoouse} style={{ height: "80%", width: "80%" }} />
        </div>
        <div className="col-lg-6">
          <h1 style={{ color: "rgb(70 105 111)" }}>
            Burnettbrück Container House
          </h1>
          <div className="hropenings1"></div>

          <br />
          <p>
            Containerhouse has been doing the impossible with containers for
            over forty years. We convert (repurpose) existing ISO shipping
            containers and also fabricate buildings and structures from the
            ground up. Our customers include oil & gas, subsea, defense,
            petrochemical, industrial, and construction. We also sell containers
            to the public! Other notables: (BPCL), Hindustan Petroleum
            Corporation Limited, (HPCL), and ESSAR Oil Limited, we are Providing
            our Petrol Pump Canopies for other petroleum Company Like Hindustan
            Bio Diesel, Indizel MEE, etc. The Specific material of Petrol Pump
            Canopy is as per Make list of company or decided by the company
            parameters.
            <br />
            <br />
            Also we will provide you civil foundation work for your Canopy Work.
            We have complete package of canopy construction.Gallery –
            <p style={{ color: "#155289" }}> Petrol Pump Canopies</p>
          </p>
        </div>
      </div>
      <br />
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "100px",
        }}
        data-aos="zoom-in"
      >
        <div className="col-lg-6">
          <h1 style={{ color: "rgb(109 188 255)" }}>Burnettbrück Bus Stop</h1>
          <div className="hropenings2"></div>
          <br />
          <p>
            Traveling with FlixBus is simple and hassle-free, thanks to our
            frequent bus connections, reliable schedules, and modern vehicles.
            With over 400,000 bus routes across the globe, including Europe and
            South America, you can easily find the perfect option for your trip.
            Additionally, FlixBus offers train travel in Sweden and Germany with
            FlixTrain, providing even more travel options to suit your needs.
            Our extensive network spans 40+ countries and over 3,000
            destinations worldwide, making it easy to plan and book your trip
            online or through our user-friendly app. Plus, stay connected on the
            go with free WiFi on most of our buses and trains, and track your
            journey in real-time with our advanced tracking system.
            <br />
            <br />
            Also we will provide you civil foundation work for your Canopy Work.
            We have complete package of canopy construction.Gallery –
            <p style={{ color: "#155289" }}> Petrol Pump Canopies</p>
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src={bushouse}
            style={{ height: "80%", width: "80%", paddingLeft: "30px" }}
          />
        </div>
      </div>
      <hr />
      

      <div  
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "100px",
        }}
        data-aos="zoom-in"
      >
        <div className="col-lg-6">
          <img src={warehouse} style={{ height: "80%", width: "80%" }} />
        </div>
        <div className="col-lg-6">
          <h1 style={{ color: "rgb(70 105 111)" }}>
            Burnettbrück  Ware house
          </h1>
          <div className="hropenings1"></div>

          <br />
          <p>
            Containerhouse has been doing the impossible with containers for
            over forty years. We convert (repurpose) existing ISO shipping
            containers and also fabricate buildings and structures from the
            ground up. Our customers include oil & gas, subsea, defense,
            petrochemical, industrial, and construction. We also sell containers
            to the public! Other notables: (BPCL), Hindustan Petroleum
            Corporation Limited, (HPCL), and ESSAR Oil Limited, we are Providing
            our Petrol Pump Canopies for other petroleum Company Like Hindustan
            Bio Diesel, Indizel MEE, etc. The Specific material of Petrol Pump
            Canopy is as per Make list of company or decided by the company
            parameters.
            <br />
            <br />
            Also we will provide you civil foundation work for your Canopy Work.
            We have complete package of canopy construction.Gallery –
            <p style={{ color: "#155289" }}> Petrol Pump Canopies</p>
          </p>
        </div>
      </div>
      <br />
      
      <br />

      {/* <div>
        <div style={{ backgroundColor: "#155289" }} data-aos="zoom-in">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <div>
              <h2 style={{ color: "white" }}>
                <i>"Quality, Material, Set Inside A Goal Of The Company."</i>
              </h2>
              <br />
              <p style={{ color: "white" }}>
                <i>
                  It was an real incredible experience for me. The quality of
                  canopy was only matched by the quality of service I got.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />

      <br />
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
      <br />
      <Footer />
    </div>
  );
};

export default PetrolumPump;
