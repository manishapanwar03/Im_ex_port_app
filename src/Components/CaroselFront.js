import React from "react";
import "../CSS/CaroselFront.css";
import bg1 from "../Images/firstbackgroundimages.jpg";
import bg2 from "../Images/bgpetrolum.jpg";
import bg3 from "../Images/bg2.jpg";
import html from "../Images/html.jpg";
import htmljscss from "../Images/htmljscss.jpg";
import css from "../Images/css.jpg";
import python1 from "../Images/pythoniamges.jpg";
import net from "../Images/net.png";
import java from "../Images/java.png";
import multiplereact from "../Images/multiplereact.png";
import react from "../Images/React.jpg";
import allec from "../Images/allec.jpg";
import camera from "../Images/camera.jpg";
import header from "../Images/header.webp";
import iphone from "../Images/iphone.jpg";
import laptop from "../Images/laptop.jpg";
import speaker from "../Images/speaker.webp";
import stockmarket from "../Images/stock2.png";
import stock1 from "../Images/stock3.png";
import stock2 from "../Images/stock4.jpg";
import stock3 from "../Images/stock5.webp";
import petrolump from "../Images/petrolum.jpg";
import petrolumpump from "../Images/petrolumpump.webp";
import housecontainer from "../Images/containerhuse.jpg";
import busstop from "../Images/bushouse.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const CaroselFront = () => {
  return (
    <div>
      <MDBCarousel showControls interval={2000}>
        <MDBCarouselItem itemId={1}>
          <div
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="fade-up"
          >
            <div
              style={{
                backgroundColor: "rgb(0 11 21 / 84%)",
                height: "650px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="row">
                <h2
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                 <a href="/trading" style={{color:"white",textDecoration:"none"}}>
                 Burnettbrück Trading and services
                  </a> 
                </h2>
                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ paddingBottom: "20px", paddingTop: "10px" }}
                  >
                    <div className="col-lg-6">
                      <img src={speaker} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={camera} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={allec} className="images_1" />
                    </div>
                    <br />
                    <div className="col-lg-6">
                      <img src={laptop} className="images_1" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={iphone} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={header} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={speaker} className="images_1" />
                    </div>
                    <br />
                    <div className="col-lg-6">
                      <img src={iphone} className="images_1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <div
            style={{
              backgroundImage: `url('${bg3}')`,
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
                height: "650px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="row">
                <h2
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
              <a href="/stock" style={{color:"white",textDecoration:"none"}}>  Burnettbrück Stock and Services
                </a>  
                </h2>
                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ paddingBottom: "20px", paddingTop: "10px" }}
                  >
                    <div className="col-lg-6">
                      <img src={stockmarket} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={stock1} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={stock3} className="images_1" />
                    </div>
                    <br />
                    <div className="col-lg-6">
                      <img src={stock2} className="images_1" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={stock1} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={stock2} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={stock3} className="images_1" />
                    </div>
                    <br />
                    <div className="col-lg-6">
                      <img src={stockmarket} className="images_1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <div
            style={{
              backgroundImage: `url(${bg1})`,
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
                height: "650px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="row">
                <h1 style={{ color: "white", paddingTop: "20px" }}>
               <a href="/services" style={{color:"white",textDecoration:"none"}} > Burnettbrück IT services and consulting
                </a>  
                </h1>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={html} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={htmljscss} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={css} className="images_1" />
                    </div>
                    <br />
                    <div className="col-lg-6">
                      <img src={python1} className="images_1" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={net} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={react} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={java} className="images_1" />
                    </div>
                    <br />
                    <div className="col-lg-6">
                      <img src={multiplereact} className="images_1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <div
            style={{
              backgroundImage: `url('${bg2}')`,
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
                height: "650px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="row">
                <h1 style={{ color: "white", paddingTop: "20px" }}>
              <a href="/petrolum" style={{color:"white",textDecoration:"none"}}> Burnettbrück Fabrication reaction and assembly
                </a>   
                </h1>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={petrolumpump} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={petrolump} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={housecontainer} className="images_1" />
                    </div>
                    <br />
                    <div className="col-lg-6">
                      <img src={busstop} className="images_1" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={petrolumpump} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={busstop} className="images_1" />
                    </div>
                    <div className="col-lg-6">
                      <img src={petrolump} className="images_1" />
                    </div>
                    <br />
                    <div className="col-lg-6">
                      <img src={petrolumpump} className="images_1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
};

export default CaroselFront;
