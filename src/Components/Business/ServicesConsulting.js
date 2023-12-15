import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Aos from "aos";
import "../../CSS/Services.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "../Footer";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const ServicesConsulting = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <>
      <div data-aos="fade-up">
        <div
          style={{
            backgroundImage: `url('https://www.opentext.com/assets/images/services-support/opentext-image-ov-service-portfolio-consulting-services-en.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            textAlign: "center",
            // height:"1000px"
            height: "800px",
          }}
          data-aos="fade-up"
        >
          <div
            style={{
              backgroundColor: "#000000b5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "800px",
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
                <h3 style={{ color: "white" }}> IT Design & Consulting</h3>
                <br />
                <h3 style={{ color: "white" }}>
                  Our Intelligent Technology Solution <br />
                  and Services
                </h3>
                <br />
                <p style={{ color: "white" }}>
                  Its is a global software development company helping companies
                  to achieve their <br />
                  goals with world-class industry-specific software solutions.
                </p>
                {/* <button className="button-5" >Enquiry Now</button> */}
                <Link to="/contact" className="button-5">
                  Enquiry Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="line-at-bot top-0" data-aos="zoom-in"></div>
      <br />
      <br />
      <div
        className="row"
        style={{ width: "100%", paddingLeft: "200px" }}
        data-aos="fade-up"
      >
        <div className="col-lg-6">
          <img
            src="https://browseinfopull-1f1ff.kxcdn.com/bi_website/static/src/img/odoo_consultancy.gif"
            width="100%"
            height="100%"
          />
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
              A business plan is the cornerstone of any successful company,
              regardless of
              <br /> size or industry. This step-by-step guide provides
              information on writing a business plan for organizations at any
              stage.
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
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <div className="row" style={{width:"100%",paddingLeft:"200px"}}>
          <div className="col-lg-6">
            <h1 style={{ color: "black" }}>
              <b>Work Planing</b>
            </h1>
            <br />
            <h4>
              <i>
                Work plans show all the tasks involved in a project, <br />
                who is responsible for each task, and when the tasks will be
                completed.
                <br /> Once your project has started the work plan is used as a
                monitoring tool to check whether your project is
                on-track.Project plans help us strategize a path to project
                success, allowing us to consider the factors that will impact
                our project, from stakeholders to budget to schedule delays, and
                plan how to maximize or mitigate these factors.
              </i>
            </h4>
           
            <br/>
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
          <div className="col-lg-6">
            <img
              src="https://bridgefix.co/static/media/buisness3.6c060f7a7cbfc238261f.png"
              width="90%"
            />
          </div>
        </div> */}

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
        <div>
          <center>
            <h2>Technologies We Work On</h2>
            <img
              src="https://www.hindustanpetroleum.com/images/hpgas_chat_icon.gif"
              style={{
                float: "right",
                height: "150px",
                width: "150px",
                marginLeft: "100px",
              }}
            />

            <div className="line-at-bot top-0"></div>
            <center>
              {" "}
              <p style={{ paddingLeft: "200px" }}>
                We help our partners accelerate disruption both within their
                organizations and industries. They strategize new ideas and
                obtain real business value by getting the most out of our
                production-ready custom software development services.
                <br /> Talk to our experts today!
              </p>
            </center>
          </center>
          <div class="ag-format-container">
            <div class="ag-courses_box">
              <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    Front-end development&#160;+ jQuer
                  </div>
                  <div class="ag-courses-item_date-box">
                    {/* Start: */}
                    {/* <span class="ag-courses-item_date">31.10.2022</span> */}
                  </div>
                </a>
              </div>
              <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    Front-end development&#160;+ jQuer
                  </div>
                  <div class="ag-courses-item_date-box">
                    {/* Start: */}
                    {/* <span class="ag-courses-item_date">31.10.2022</span> */}
                  </div>
                </a>
              </div>
              <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    Front-end development&#160;+ jQuer
                  </div>
                  <div class="ag-courses-item_date-box">
                    {/* Start: */}
                    {/* <span class="ag-courses-item_date">31.10.2022</span> */}
                  </div>
                </a>
              </div>
              <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    Front-end development&#160;+ jQuer
                  </div>
                  <div class="ag-courses-item_date-box">
                    {/* Start: */}
                    {/* <span class="ag-courses-item_date">31.10.2022</span> */}
                  </div>
                </a>
              </div>

              <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>
                  <div class="ag-courses-item_title">Digital Marketing</div>
                  <div class="ag-courses-item_date-box">
                    {/* Start: */}
                    {/* <span class="ag-courses-item_date">31.10.2022</span> */}
                  </div>
                </a>
              </div>

              <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">Interior Design</div>

                  <div class="ag-courses-item_date-box">
                    {/* Start: */}
                    {/* <span class="ag-courses-item_date">31.10.2022</span> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('https://www.redtechgroup.com/it-project-management/wp-content/uploads/sites/4/2014/11/our-services-background.jpg)`,
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
            backgroundColor: "rgb(0 0 0 / 46%)",
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
                  We Provide The Best Service In IT Industry
                </h3>
                <h3 style={{ color: "white" }}>
                  We Provide All IT Services and Consultancy , You Can Get Quote
                  Here
                </h3>
                <br />
                <br />
                {/* <button class="button-5">Contact us Today</button> */}
                <Link to="/contact" className="button-5">
                  Contact us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div style={{ height: "80%" }} data-aos="fade-up">
            <Container component="main">
              <Grid
                container
                spacing={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={6}>
                  <img
                    src="https://dqtccm62inm81.cloudfront.net/assets/login/images/LoginImage3.webp"
                    alt="Login Image"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
                <Grid item xs={12} md={6} style={{ height: "auto" }}>
                  <Box
                    sx={{
                      // boxShadow: 2,
                      // borderRadius: 2,
                      px: 4,
                      py: 6,
                      display: "flex",  
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h5"
                      style={{ color: "#3373a9", fontWeight: 600 }}
                    >
                      Get in Touch!
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}s
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Name"
                        name="email"
                        // autoComplete="email"
                        // autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        // autoComplete="email"
                        // autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Subject"
                        type="password"
                        id="password"
                        // autoComplete="current-password"
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="message"
                        rows="7"
                        multiline
                        type="password"
                        id="password"
                        // autoComplete="current-password"
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: "#3373a9" }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
            {/* <div className="container"> */}
              {/* <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://dqtccm62inm81.cloudfront.net/assets/login/images/LoginImage3.webp"
                    style={{ height:"500px" }}
                  />
                </div>
                <div className="col-lg-6">
                <Box
                    sx={{
                      // boxShadow: 2,
                      // borderRadius: 2,
                      px: 4,
                      py: 6,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h5"
                      style={{ color: "#3373a9", fontWeight: 600 }}
                    >
                      Get in Touch!
                    </Typography>
                    <Box
                      component="form"
                      // onSubmit={handleSubmit}s
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Name"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Subject"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="message"
                        rows="7"
                        multiline
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: "#3373a9" }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Box>
                </div>
              </div> */}
            </div>
          {/* </div> */}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default ServicesConsulting;
