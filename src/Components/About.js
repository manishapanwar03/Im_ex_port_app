import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/About_us.css";
import Footer from "./Footer";
import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div
        style={{
          backgroundImage: `url('https://assets.entrepreneur.com/content/3x2/2000/20190620104308-Examples-of-Business-Consultancy-Business-Ideas-Bigstock-4000pxW-X-2670pxH-copy.jpeg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
          // WebkitBorderBottomLeftRadius:"30%"
          
        }}
        data-aos="fade-up"
        >
        <div
          style={{
            // WebkitBorderBottomLeftRadius:"30%",
            backgroundColor: "rgba(0,80,149,0.8)",
            height: "700px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <div className="row">
              <div className="col-lg-6">
                <br />
                <br />
                <h3 style={{ color: "white", paddingTop: "20px" }}>About Us</h3>
                <br />
                <br />
                <br />
                <p
                  style={{
                    color: "white",
                    textAlign: "left",
                    marginLeft: "100px",
                  }}
                >
                  What started as a zest to change the world for a better place,
                  today stands as the epitome of advancement, prosperity, and
                  development. We have evolved from being a construction company
                  to an integrated player across Education, Construction, FMCG,
                  Regional & Local News, and Healthcare services. For the last
                  two decades we have been growing gradually but consistently,
                  and what kept us going is our commitment to innovation and
                  courage to experiment. ...
                  <br />
                  <br />
                  <br />
                  For millions of Indians, we are delivering happiness by
                  transforming the nation’s landscape with our energy solutions
                  across a spectrum of needs, everyday. With myriad solutions
                  for myriad needs, we have a wide compass of offerings that
                  touch your life. Ours is a world bustling with diverse
                  solutions to cater to your every day energy needs in order to
                  make you happy in every respect
                </p>
                <img
                  src="https://www.hindustanpetroleum.com/images/hpgas_chat_icon.gif"
                  style={{
                    float: "left",
                    height: "150px",
                    width: "150px",
                    marginLeft: "100px",
                  }}
                />
              </div>
              <div className="col-lg-6">
                <img
                  src="https://starpebindia.com/wp-content/uploads/2020/01/team.png"
                  style={{
                    height: "500px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "30px",
                  }}
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
        data-aos="fade-up"
      >
        <div style={{ width: "80%" }} className="offer1" data-aos="fade-up">
          <center>
            <h2 style={{ color: "#3373a9" }}> What We Offer*</h2>
            <div class="loader2"></div>
          </center>
            

          <div className="row" style={{ marginTop: "40px" }} data-aos="fade-up">
            <div className="col-lg-6">
              <img
                src="https://media.istockphoto.com/id/1307557684/photo/a-business-person-who-holds-a-meeting-while-looking-at-a-computer-screen.jpg?s=612x612&w=0&k=20&c=wJ6mib_BmQBzZNj9udeM3JonbVeP1bIEieM5iWrQRAY="
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <h5>
                We offer our best PEB services to our clients, We deliver our
                best PEB products to the Clients, We provide our well qualified
                engineers for your PEB products & services. We provide complete
                solutions for Pre-Engineering Buildings & Industrial Civil
                Constructional services. We offer our best PEB services to our
                clients, We deliver our best PEB products to the Clients, We
                provide our well qualified engineers for your PEB products &
                services. We provide complete solutions for Pre-Engineering
                Buildings & Industrial Civil Constructional services. We offer
                our best PEB services to our clients, We deliver our best PEB
                products to the Clients, We provide our well qualified engineers
                for your PEB products & services. We provide complete solutions
                for Pre-Engineering Buildings & Industrial Civil Constructional
                services.
              </h5>
            </div>
          </div>
          <hr />
          <br />
          <div className="row" style={{ marginTop: "40px" }} data-aos="fade-up">
            <div className="col-lg-6">
              <h5>
                We offer our best PEB services to our clients, We deliver our
                best PEB products to the Clients, We provide our well qualified
                engineers for your PEB products & services. We provide complete
                solutions for Pre-Engineering Buildings & Industrial Civil
                Constructional services. We offer our best PEB services to our
                clients, We deliver our best PEB products to the Clients, We
                provide our well qualified engineers for your PEB products &
                services. We provide complete solutions for Pre-Engineering
                Buildings & Industrial Civil Constructional services. We offer
                our best PEB services to our clients, We deliver our best PEB
                products to the Clients, We provide our well qualified engineers
                for your PEB products & services. We provide complete solutions
                for Pre-Engineering Buildings & Industrial Civil Constructional
                services.
              </h5>
            </div>
            <div className="col-lg-6">
              <img
                src="https://www.ps3g.com/wp-content/uploads/2019/10/PS3G-Technology-Consulting.png"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <hr />
          <br />
          <div className="row" style={{ marginTop: "40px" }} data-aos="fade-up">
            <div className="col-lg-6">
              <img
                src="https://img.freepik.com/premium-vector/buy-sell-stock-market-crypto-currency-trading-investment-decision-wealth-management-financial-concept-businessman-investment-analyst-holding-buy-sell-sign-with-candlestick-chart_212586-1950.jpg?w=2000"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <h5>
                We offer our best PEB services to our clients, We deliver our
                best PEB products to the Clients, We provide our well qualified
                engineers for your PEB products & services. We provide complete
                solutions for Pre-Engineering Buildings & Industrial Civil
                Constructional services. We offer our best PEB services to our
                clients, We deliver our best PEB products to the Clients, We
                provide our well qualified engineers for your PEB products &
                services. We provide complete solutions for Pre-Engineering
                Buildings & Industrial Civil Constructional services. We offer
                our best PEB services to our clients, We deliver our best PEB
                products to the Clients, We provide our well qualified engineers
                for your PEB products & services. We provide complete solutions
                for Pre-Engineering Buildings & Industrial Civil Constructional
                services.
              </h5>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "whitesmoke",
        }}
        data-aos="fade-up"
      >
        <div>
          <center>
            <h2 style={{ color: "black", paddingTop: "20px" }}>OUR WORK</h2>
            <br/>


             <div class="loader3"></div> 
             <br/>

            <b>
              <p>
                We bring together diverse, future-facing industries and
                communities to co-create a positive world, where one
                <center>
                  <p>enables the other to Rise.</p>{" "}
                </center>
              </p>
            </b>
          </center>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <figure>
              <img
                src="https://images.herzindagi.info/image/2023/Oct/electronic-items-online-sale.jpg"
                alt="Mountains"
                className="img_cards"
                style={{ height: "250px" }}
              />
              <figcaption style={{ color: "black" }}>
                Trading and <br />
                services{" "}
              </figcaption>
            </figure>
            <figure style={{ c: "#fff5" }}>
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2022/8/KP/AN/CC/127147413/bank-nifty-service.png"
                alt="Mountains"
                className="img_cards"
                style={{ height: "250px" }}
              />
              <figcaption>Stocks and Services</figcaption>
            </figure>
            <figure style={{ c: "#fff5" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iV8l09Hcw7UD5YobJjBL3U8gKA_Un0S8Uw&usqp=CAU"
                alt="Mountains"
                className="img_cards"
                style={{ height: "250px" }}
              />
              <figcaption>
                It services <br />
                and consulting
              </figcaption>
            </figure>
            <figure style={{ c: "#fff5" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aKXcL0IbmDzkls71tHMzAguzrYf0ihGDhw&usqp=CAU"
                alt="Mountains"
                className="img_cards"
                style={{ height: "250px", width: "500px" }}
              />
              <figcaption style={{ color: "black" }}>
                Fabrication, architure Designer
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          backgroundImage: `url('https://starpebindia.com/wp-content/uploads/2017/07/construction-image48-1-2-free-img.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
          height: "500px",
        }}
        data-aos="fade-up"
      >
        <div
          style={{
            backgroundColor: "#000000c9",
            height: "500px",
            display: "flex",
            justifyContent: "center",
          }}
          data-aos="fade-up"
        >
          <div>
            <div className="row">
              <div style={{ marginTop: "200px" }}>
                <h3 style={{ color: "white" }}>
                  We Provide The Best Service In Industry
                </h3>
                <h3 style={{ color: "white" }}>
                  We Provide All Pre-Engineering Building Solutions, You Can Get
                  Quote Here
                </h3>
                <br />

                <br />

                <Link to="/contact" className="button-5">
                  Contact us Today
                </Link>
                {/* <button class="button-5">Contact us Today</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src="https://starpebindia.com/wp-content/uploads/2020/01/construction-image22-5-free-img.jpg" />
              <ul class="social" >
                <li>
                  <FacebookIcon  style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <TwitterIcon  style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <LinkedInIcon    style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <InstagramIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
              </ul>
            </div>
            <div class="team-content">
              <div class="team-info">
                <h3 class="title">Williamson</h3>
                <span class="post">Web Developer</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src="https://starpebindia.com/wp-content/uploads/2020/01/construction-image22-5-free-img.jpg" />
              <ul class="social">
                <li>
                  <FacebookIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <TwitterIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <LinkedInIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <InstagramIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
              </ul>
            </div>
            <div class="team-content">
              <div class="team-info">
                <h3 class="title">Kristiana</h3>
                <span class="post">Web Designer</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src="https://starpebindia.com/wp-content/uploads/2020/01/construction-image22-5-free-img.jpg" />
              <ul class="social">
                <li>
                  <FacebookIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <TwitterIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <LinkedInIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <InstagramIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
              </ul>
            </div>
            <div class="team-content">
              <div class="team-info">
                <h3 class="title">Kristiana</h3>
                <span class="post">Web Designer</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src="https://starpebindia.com/wp-content/uploads/2020/01/construction-image22-5-free-img.jpg" />
              <ul class="social">
                <li>
                  <FacebookIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <TwitterIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <LinkedInIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
                <li>
                  <InstagramIcon   style={{ color: "White" ,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}/>
                </li>
              </ul>
            </div>
            <div class="team-content">
              <div class="team-info">
                <h3 class="title">Kristiana</h3>
                <span class="post">Web Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
