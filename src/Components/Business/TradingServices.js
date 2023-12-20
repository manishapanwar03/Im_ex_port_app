import React, { useEffect } from "react";
import "../../CSS/Trading.css";
import { Link } from "react-router-dom";
import bus from "../../Images/bgtrading.jpg";
import bg1 from "../../Images/firstbackgroundimages.jpg";
import backgroundImage from "../../Images/export_import.webp";
import ecall from "../../Images/allec1.jpg";
import receiver from "../../Images/receiver.jpg";
import header from "../../Images/header.jpg";
import a1 from "../../Images/a1.jpg";
import iphonee from "../../Images/iphonee.jpg";
import maclaptop from "../../Images/maclaptop.webp";
import mac2 from "../../Images/pexels-life-of-pix-7974 (1).jpg";
import Footer from "../Footer";
import Aos from "aos";
import hpgif from "../../Images/hpgif.gif";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const TradingServices = () => {
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
              backgroundImage: `url('${bg1}')`,
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
                      Welcome to Burnettbrück Trading and Services!!!
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
                      We are your gateway to a world of global possibilities and
                      seamless trade experiences. At Burnettbrück, we take pride
                      in facilitating international trade, bridging continents,
                      and fostering partnerships that transcend boundaries. Our
                      commitment to excellence in import and export services is
                      matched only by our dedication to meeting and exceeding
                      your business needs. ...
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
                    <br />
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
              backgroundImage: `url('${bg1}')`,
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
                      Welcome to Burnettbrück Trading and Services!!!
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
                      We are your gateway to a world of global possibilities and
                      seamless trade experiences. At Burnettbrück, we take pride
                      in facilitating international trade, bridging continents,
                      and fostering partnerships that transcend boundaries. Our
                      commitment to excellence in import and export services is
                      matched only by our dedication to meeting and exceeding
                      your business needs. ...
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
                    <br />
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
              backgroundImage: `url('${backgroundImage}')`,
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
                      Welcome to Burnettbrück Trading and Services!!!
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
                      We are your gateway to a world of global possibilities and
                      seamless trade experiences. At Burnettbrück, we take pride
                      in facilitating international trade, bridging continents,
                      and fostering partnerships that transcend boundaries. Our
                      commitment to excellence in import and export services is
                      matched only by our dedication to meeting and exceeding
                      your business needs. ...
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
                    <br />
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
      <header>
        <h1 style={{ textAlign: "center" }}>Electronic Equipments</h1>
      </header>
      <br />
      <div className="band_trading">
        <div className="item_1_1" data-aos="fade-up">
          <a
            href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
            className="card_trading"
          >
            <div
              className="thumb_trading"
              style={{
                backgroundImage: `url('${ecall}')`,
              }}
            ></div>
            <article className="article">
              <h1>Electronic: - The Next Evolution</h1>
              <span>By Burnettbrück Tech</span>
            </article>
          </a>
        </div>
        <div className="item_2_2" data-aos="fade-up">
          <a
            href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045"
            className="card_trading"
          >
            <div
              className="thumb_trading"
              style={{
                backgroundImage: `url('${receiver}')`,
              }}
            ></div>
            <article className="article">
              <h1>Television Receiver</h1>
              <p>
                Stream Plus Full Hd Free To Air Dth Mpeg-4 Direct To Home
                Digital Satellite Receiver Media Streaming Device!!
              </p>
              <span>By Burnettbrück Techl</span>
            </article>
          </a>
        </div>
        <div className="item-3" data-aos="fade-up">
          <a
            href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
            className="card_trading"
          >
            <div
              className="thumb_trading"
              style={{
                backgroundImage: `url('${header}')`,
              }}
            ></div>
            <article className="article">
              <h1>Burnettbrück Rockerz 370</h1>
              <p>
                About this item Burnettbrück Rockerz 370 is a wireless headset
                that has been ergonomically designed to meet the needs of music
                lovers!!!.
              </p>
              <span>By Burnettbrück Tech</span>
            </article>
          </a>
        </div>
        <div className="item-4" data-aos="fade-up">
          <a
            href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826"
            className="card_trading"
          >
            <div
              className="thumb_trading"
              style={{
                backgroundImage: `url('${a1}')`,
              }}
            ></div>
            <article className="article">
              <h1>Burnettbrück laptop</h1>
              <p>
                Lenovo V15 Intel Core i3 12th Gen 15.6" (39.62 cm) FHD
                (1920x1080) Antiglare 250 Nits Thin and Light Laptop (8GB
                RAM/512GB SSD/Windows 11 Home/Iron Grey/1Y Onsite + 1Y ADP Add
                On/1.7 kg), 82TTA00VIH
              </p>
              <span>By Burnettbrück Tech</span>
            </article>
          </a>
        </div>
        <div className="item-5" data-aos="fade-up">
          <a
            href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139"
            className="card_trading"
          >
            <div
              className="thumb_trading"
              style={{
                backgroundImage: `url('${iphonee}')`,
              }}
            ></div>
            <article className="article">
              <h1>Apple iPhone 13 (128GB) - Blue</h1>
              <p>
                Cinematic mode adds shallow depth of field and shifts focus
                automatically in your videos Advanced dual-camera system with
                12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR
                4, Night mode, 4K Dolby Vision HDR recording
              </p>
              <span>By Burnettbrück Tech</span>
            </article>
          </a>
        </div>
        <div className="item-6" data-aos="fade-up">
          <a
            href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
            className="card_trading"
          >
            <div
              className="thumb_trading"
              style={{
                backgroundImage: `url('${maclaptop}')`,
              }}
            ></div>
            <article className="article">
              <h1>Burnettbrück mac</h1>
              <p>
                Cinematic mode adds shallow depth of field and shifts focus
                automatically in your videos Advanced dual-camera system with
                12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR
                4, Night mode, 4K Dolby Vision HDR recording
              </p>

              <span>By Burnettbrück Tech</span>
            </article>
          </a>
        </div>
        <div className="item-7" data-aos="fade-up">
          <a
            href="https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281"
            className="card_trading"
          >
            <div
              className="thumb_trading"
              style={{
                backgroundImage: `url('${mac2}')`,
              }}
            ></div>
            <article className="article">
              <h1>Burnettbrück Laptop</h1>
              <p>
                Cinematic mode adds shallow depth of field and shifts focus
                automatically in your videos Advanced dual-camera system with
                12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR
                4, Night mode, 4K Dolby Vision HDR recording
              </p>
              <span>By Burnettbrück Tech</span>
            </article>
          </a>
        </div>
      </div>
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

      <Footer />
    </>
  );
};

export default TradingServices;
