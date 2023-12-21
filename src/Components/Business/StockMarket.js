import React, { useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer";
import bus from "../../Images/stockmarketbg.jpg";
import stockbg from "../../Images/stockbg.gif";
import banknifty from "../../Images/banknifty.jpg";
import niftybank from "../../Images/niftybank.png";
import market from "../../Images/stockmarket.png";
import trading from "../../Images/tardinggif.gif";
import banknift1 from "../../Images/banknifty1.png";
import stock2 from "../../Images/stock2.png";
import stock3 from "../../Images/stock3.png";
import Aos from "aos";
import hpgif from "../../Images/hpgif.gif";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../../CSS/Stockmarket.css";
import { Link } from "react-router-dom";

const StockMarket = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <>
      {/* <MDBCarousel showControls interval={2000}>
        <MDBCarouselItem itemId={1}>
          <div
            style={{
              backgroundImage: `url('${stockbg}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="zoom-in"
          >
            <div
              style={{
                backgroundColor: "#000b15b8",
                height: "800px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="col-lg-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "100px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ color: "white", paddingTop: "20px" }}>
                    Welcome to the World of Burnettbrück Stock Market!!!
                  </h3>
                  <br />
                  <p style={{ color: "white", textAlign: "left" }}>
                    Nestled in the heart of financial prowess lies the
                    Burnettbrück Stock Market, an ecosystem where financial
                    mettle meets technological innovation. Established on
                    principles of transparency, dynamism, and adaptability, this
                    market stands as a beacon for investors seeking an
                    exhilarating journey through the realms of finance.... At
                    Burnettbrück, every trading day is an expedition through the
                    ebbs and flows of the global economy, where volatility
                    sparks excitement and stability fosters trust. Here, the
                    amalgamation of financial wisdom, technological prowess, and
                    ethical consciousness converges to create an unparalleled
                    marketplace that beckons the bold and the discerning alike.
                  </p>
                  <br />
                  <button className="button-61">Get in touch</button>
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
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <div
            style={{
              backgroundImage: `url('${stockbg}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="zoom-in"
          >
            <div
              style={{
                backgroundColor: "#000b15b8",
                height: "800px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="col-lg-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "100px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ color: "white", paddingTop: "20px" }}>
                    Welcome to the World of Burnettbrück Stock Market!!!
                  </h3>
                  <br />
                  <p style={{ color: "white", textAlign: "left" }}>
                    Nestled in the heart of financial prowess lies the
                    Burnettbrück Stock Market, an ecosystem where financial
                    mettle meets technological innovation. Established on
                    principles of transparency, dynamism, and adaptability, this
                    market stands as a beacon for investors seeking an
                    exhilarating journey through the realms of finance.... At
                    Burnettbrück, every trading day is an expedition through the
                    ebbs and flows of the global economy, where volatility
                    sparks excitement and stability fosters trust. Here, the
                    amalgamation of financial wisdom, technological prowess, and
                    ethical consciousness converges to create an unparalleled
                    marketplace that beckons the bold and the discerning alike.
                  </p>
                  <br />
                  <button className="button-61">Get in touch</button>
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
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <div
            style={{
              backgroundImage: `url('${stockbg}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              textAlign: "center",
            }}
            data-aos="zoom-in"
          >
            <div
              style={{
                backgroundColor: "#000b15b8",
                height: "800px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="col-lg-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "100px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ color: "white", paddingTop: "20px" }}>
                    Welcome to the World of Burnettbrück Stock Market!!!
                  </h3>
                  <br />
                  <p style={{ color: "white", textAlign: "left" }}>
                    Nestled in the heart of financial prowess lies the
                    Burnettbrück Stock Market, an ecosystem where financial
                    mettle meets technological innovation. Established on
                    principles of transparency, dynamism, and adaptability, this
                    market stands as a beacon for investors seeking an
                    exhilarating journey through the realms of finance.... At
                    Burnettbrück, every trading day is an expedition through the
                    ebbs and flows of the global economy, where volatility
                    sparks excitement and stability fosters trust. Here, the
                    amalgamation of financial wisdom, technological prowess, and
                    ethical consciousness converges to create an unparalleled
                    marketplace that beckons the bold and the discerning alike.
                  </p>
                  <br />
                  <button className="button-61">Get in touch</button>
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
        </MDBCarouselItem>
      </MDBCarousel> */}
      <MDBCarousel showControls interval={2000}>
        <MDBCarouselItem itemId={1}>
          <div
            style={{
             backgroundImage: `url('${stockbg}')`,
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
                      Welcome to Burnettbrück Stock Market Consultant!!!
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
                      Nestled in the heart of financial prowess lies the
                    Burnettbrück Stock Market, an ecosystem where financial
                    mettle meets technological innovation. Established on
                    principles of transparency, dynamism, and adaptability, this
                    market stands as a beacon for investors seeking an
                    exhilarating journey through the realms of finance.... At
                    Burnettbrück, every trading day is an expedition through the
                    ebbs and flows of the global economy, where volatility
                    sparks excitement and stability fosters trust. Here, the
                    amalgamation of financial wisdom, technological prowess, and
                    ethical consciousness converges to create an unparalleled
                    marketplace that beckons the bold and the discerning alike. ...
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
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
             backgroundImage: `url('${stockbg}')`,
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
                      Welcome to Burnettbrück Stock Market Consultant!!!
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
                      Nestled in the heart of financial prowess lies the
                    Burnettbrück Stock Market, an ecosystem where financial
                    mettle meets technological innovation. Established on
                    principles of transparency, dynamism, and adaptability, this
                    market stands as a beacon for investors seeking an
                    exhilarating journey through the realms of finance.... At
                    Burnettbrück, every trading day is an expedition through the
                    ebbs and flows of the global economy, where volatility
                    sparks excitement and stability fosters trust. Here, the
                    amalgamation of financial wisdom, technological prowess, and
                    ethical consciousness converges to create an unparalleled
                    marketplace that beckons the bold and the discerning alike. ...
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
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
              backgroundImage: `url('${stockbg}')`,
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
                      Welcome to Burnettbrück Stock Market Consultant!!!
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
                      Nestled in the heart of financial prowess lies the
                    Burnettbrück Stock Market, an ecosystem where financial
                    mettle meets technological innovation. Established on
                    principles of transparency, dynamism, and adaptability, this
                    market stands as a beacon for investors seeking an
                    exhilarating journey through the realms of finance.... At
                    Burnettbrück, every trading day is an expedition through the
                    ebbs and flows of the global economy, where volatility
                    sparks excitement and stability fosters trust. Here, the
                    amalgamation of financial wisdom, technological prowess, and
                    ethical consciousness converges to create an unparalleled
                    marketplace that beckons the bold and the discerning alike. ...
                    </p>
                    <Link to="/contact" className="button-5">
                      Get in Touch
                    </Link>
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
      <div>
        <section className="pt-5 pb-5">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-aos="zoom-in"
          >
            <div className="row">
              <div className="col-12">
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="images_2"
                              alt="100%x280"
                              src={banknifty}
                            />
                            <div className="card-body">
                              <h4 className="card-title">
                                Bank Nifty by Burnettbrück Tech
                              </h4>
                              <p className="card-text">
                                Bank Nifty by Burnettbrück Tech offers investors
                                a comprehensive overview of the banking sector's
                                Real-time tracking and analysis enable investors
                                to make informed decisions based on current
                                market dynamics.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="images_2"
                              alt="100%x280"
                              src={niftybank}
                            />
                            <div className="card-body">
                              <h4 className="card-title">
                                Nifty Bank By Burnettbrück Tech
                              </h4>
                              <p className="card-text">
                                Nifty bank by Burnettbrück Tech offers investors
                                a comprehensive overview of the banking sector's
                                Real-time tracking and analysis enable investors
                                to make informed decisions based on current
                                market dynamics..
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card">
                            <img
                              className="images_2"
                              alt="100%x280"
                              src={market}
                            />
                            <div className="card-body">
                              <h4 className="card-title">
                                Market By Burnettbrück Tech
                              </h4>
                              <p className="card-text">
                                Market by Burnettbrück Tech offers investors a
                                comprehensive overview of the banking sector's
                                Real-time tracking and analysis enable investors
                                to make informed decisions based on current
                                market dynamics.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="container-fluid" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 style={{ color: "rgb(108 145 172)" }}>Burnettbrück.com</h1>
                <br />
                <p style={{ textAlign: "left" }}>
                  Burnettbrück.com stands at the forefront as the top-ranked
                  website for stock market news in India, surpassing
                  expectations with its ranking at number one globally.
                  Garnering a remarkable country rank of 188 and an impressive
                  global standing of 317, it has emerged as the ultimate source
                  for comprehensive financial market news. This platform, housed
                  at Burnettbrück.com, offers an extensive suite of
                  user-friendly tools, consolidating essential market analysis
                  resources within an intuitive and accessible interface. Its
                  feature set includes charts, screeners, an economic calendar,
                  and real-time market updates, empowering traders with
                  invaluable insights on a single platform. Burnettbrück's
                  seamless usability extends across both its website and mobile
                  app, ensuring accessibility anytime, anywhere. Widely
                  recognized as an indispensable resource in technical analysis
                  courses, it consistently receives rave reviews from students
                  benefiting immensely from its comprehensive resources. Explore
                  the power of Burnettbrück.com and witness firsthand why it
                  remains a cornerstone in financial education and market
                  analysis, delivering unparalleled value to investors
                  navigating the complexities of the stock market.
                </p>
              </div>
              <div className="col-lg-6">
                <img src={trading} style={{ height: "80%" }} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "80%" }} className="offer1"
          >
            <div  style={{textAlign: "center"}}>

              <h2 style={{ color: "#3373a9" }}>
                Burnettbrück Trading and services
              </h2>
            </div>
          
          
            <div className="row" style={{ marginTop: "40px" }}>
              <div className="col-lg-6" data-aos="fade-right">
                <img
                  src={banknift1}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <h5>
                  Bank Nifty by Burnettbrück Tech emerges as a transformative
                  index, reshaping the landscape of financial analysis within
                  the banking sector. This innovative index represents a
                  culmination of Burnettbrück's technological prowess and
                  financial expertise, providing investors with unparalleled
                  insights into the dynamic world of banking stocks. Bank Nifty
                  by Burnettbrück Tech symbolizes the synergy between
                  technological innovation and financial acumen. Beyond being an
                  index, it represents Burnettbrück's commitment to empowering
                  investors with invaluable insights, guiding them toward
                  informed investment decisions within the dynamic banking
                  sector.
                </h5>
              </div>
            </div>
            <hr />
            <br />
            <div
              className="row"
              style={{ marginTop: "40px" }}
              data-aos="fade-up"
            >
              <div className="col-lg-6" data-aos="fade-right">
                <h5>
                  Trading by Burnettbrück Tech emerges as a transformative
                  index, reshaping the landscape of financial analysis within
                  the banking sector. This innovative index represents a
                  culmination of Burnettbrück's technological prowess and
                  financial expertise, providing investors with unparalleled
                  insights into the dynamic world of banking stocks. Bank Nifty
                  by Burnettbrück Tech symbolizes the synergy between
                  technological innovation and financial acumen. Beyond being an
                  index, it represents Burnettbrück's commitment to empowering
                  investors with invaluable insights, guiding them toward
                  informed investment decisions within the dynamic banking
                  sector.
                </h5>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <img src={stock2} style={{ height: "100%", width: "100%" }} />
              </div>
            </div>
            <hr />
            <br />
            <div
              className="row"
              style={{ marginTop: "40px" }}
              data-aos="fade-up"
            >
              <div className="col-lg-6" data-aos="fade-right">
                <img src={stock3} style={{ height: "100%", width: "100%" }} />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <h5>
                  stcok by Burnettbrück Tech emerges as a transformative index,
                  reshaping the landscape of financial analysis within the
                  banking sector. This innovative index represents a culmination
                  of Burnettbrück's technological prowess and financial
                  expertise, providing investors with unparalleled insights into
                  the dynamic world of banking stocks. Bank Nifty by
                  Burnettbrück Tech symbolizes the synergy between technological
                  innovation and financial acumen. Beyond being an index, it
                  represents Burnettbrück's commitment to empowering investors
                  with invaluable insights, guiding them toward informed
                  investment decisions within the dynamic banking sector.
                  Burnettbrück Tech symbolizes the synergy between technological
                  innovation and financial acumen. Beyond being an index, it
                  represents Burnettbrück's commitment to empowering investors
                  with invaluable insights, guiding them toward informed
                  investment decisions within the dynamic banking sector.
                </h5>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div>
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
      </div>
      <Footer />
    </>
  );
};

export default StockMarket;
