import React from "react";
import "../CSS/About_us.css";
import Footer from "./Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgabout from "../Images/bgabout.jpeg";
import hpgif from "../Images/hpgif.gif";
import aboutusimage from "../Images/aboutusimage.png";
import laptopgroup from "../Images/laptopgroup.jpg";
import technology from "../Images/technologyconsulting.png";
import buysell from "../Images/buysell.jpg";
import laptop from "../Images/laptop.jpg";
import banknifty from "../Images/banknifty1.png";
import itservices from "../Images/itservices.jpg";
import petrolumpump from "../Images/petrolum.jpg";
import aboutbg from "../Images/aboutbg1.jpg";
import { CirlceChart } from "./ApexChart";
import Aos from "aos";
const About = () => {


  
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('${bgabout}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
        }}
        data-aos="fade-up"
      >
        <div
          style={{
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
                  src={hpgif}
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
                  src={aboutusimage}
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
            <div className="loader2"></div>
          </center>

          {/* <div className="row" style={{ marginTop: "40px" }} data-aos="fade-up">
            <div className="col-lg-6">
              <img
                src={laptopgroup}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <h5>
                At Burnettbrück, our IT services and consulting arm stands as a
                beacon of innovation and strategic guidance for businesses
                navigating the ever-evolving technological landscape. With a
                commitment to delivering cutting-edge solutions, we offer a
                comprehensive suite of IT services tailored to address the
                diverse needs of our clients. From infrastructure optimization
                and cybersecurity fortification to software development and
                digital transformation strategies, our consulting expertise
                spans across the entire technological spectrum. We collaborate
                closely with our clients, understanding their unique challenges
                and objectives to provide customized roadmaps that streamline
                operations, drive growth, and ensure resilience in an
                increasingly digital world. Our team of seasoned professionals
                is dedicated to delivering excellence, leveraging emerging
                technologies, and fostering a seamless convergence between
                business objectives and technological advancements
              </h5>
            </div>
          </div>
          <hr />
          <br /> */}
          <div className="row" style={{ marginTop: "40px" }} data-aos="fade-up">
            <div className="col-lg-6">
              <h5 style={{ fontSize: "18px" ,textAlign:"justify"}}>
                At BurnettbrückData Representation The CircleChart component,
                stands as a powerful visualization tool utilizing Google Charts
                and ApexCharts to depict the intricate composition of our
                business. With meticulously curated data representing distinct
                segments—ranging from trading and consultancy to IT services and
                architecture—the CircleChart succinctly captures the allocation
                of resources and efforts across these pivotal domains. Through
                its seamless integration with React, this component offers a
                dynamic and intuitive representation, allowing stakeholders to
                effortlessly grasp the distribution of activities within our
                organization. Customizable features embedded within, such as
                adjustable chart areas and pie hole sizes, empower us to tailor
                the visualization to our specific needs. This CircleChart serves
                not just as a visual aid but as a strategic tool, providing
                invaluable insights into our business landscape, enabling
                informed decision-making and fostering a deeper understanding of
                our operational dynamics......................................
              </h5>
            </div>
            <div className="col-lg-6">
              <CirlceChart />
            </div>
          </div>
          <hr />
          <br />
          {/* <div className="row" style={{ marginTop: "40px" }} data-aos="fade-up">
            <div className="col-lg-6">
              <img src={buysell} style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="col-lg-6">
              <h5>
                At Burnettbrück, our approach to buying and selling is anchored
                in meticulous analysis, strategic insights, and a commitment to
                excellence. When it comes to buying, we prioritize understanding
                the unique needs and goals of our clients. Our tailored approach
                involves comprehensive market research, identifying optimal
                opportunities, and executing purchases aligned with our clients'
                objectives. On the selling front, we leverage our expertise to
                position offerings effectively, ensuring maximum visibility and
                value. Our strategies encompass market trends, audience
                targeting, and innovative marketing approaches to facilitate
                seamless transactions and optimize returns for our clients.
                Whether it's assisting in acquisitions or facilitating sales,
                our focus remains steadfast on delivering value-driven solutions
                tailored to our clients' specific requirements."
              </h5>
            </div>
          </div>
          <br />
          <br /> */}
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
            <br />

            <div className="loader3"></div>
            <br />

            <b>
              <p>
                We bring together diverse, future-facing industries and
                communities to co-create a positive world, where one
                  <span style={{display:"block"}}>enables the other to Rise.</span>
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
                src={laptop}
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
                src={banknifty}
                alt="Mountains"
                className="img_cards"
                style={{ height: "250px" }}
              />
              <figcaption>Stocks and Services</figcaption>
            </figure>
            <figure style={{ c: "#fff5" }}>
              <img
                src={itservices}
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
                src={petrolumpump}
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
          backgroundImage: `url(' ${aboutbg} ')`,
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
                  We Provide All Solutions, You Can Get Quote Here
                </h3>
                <br />

                <br />

                <Link to="/contact" className="button-5">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default About;
