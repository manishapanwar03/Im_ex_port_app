import React, { useEffect } from "react";
import "../CSS/Career.css";
import Footer from "./Footer";
import Contact from "./Contact";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Aos from "aos";
const Career = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });

  return (
    <>
      <br />
      <br />
      <div
        style={{
          backgroundImage: `url('https://bcdn.mindler.com/bloglive/wp-content/uploads/2022/09/23123107/blog-13.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
        }}
        data-aos="fade-up"
      >
        <div
          style={{
            backgroundColor: "#000000ba",
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div className="row">
              <div className="col-lg-12">
                <h3
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Discover the path, where passion follows
                </h3>

                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontFamily: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                >
                  Our team is growing fast. We come to work with energy and
                  enthusiasm, we know how meaningful our work is to our clients,
                  <br />
                  their customers and mobile industry. We’re working tirelessly
                  to make the next century better than the last.
                </p>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="col-sm-12 careerMid p-5 text-center">
          <br />
          <a href="#openingsContainer">
            <div className="btn btn-outline-dark mt-3">Current Openings</div>
          </a>
          <center>
            <div
              className="hr line-at-bot top-0"
              style={{ background: "black", height: "1px", width: "20%" }}
            ></div>
          </center>

          <br />
          <br />
        </div>

        <Footer />
      </div>

      {/* <div
        style={{
          backgroundImage: `url('https://bcdn.mindler.com/bloglive/wp-content/uploads/2022/09/23123107/blog-13.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
        }}
        data-aos="fade-up"
      >
        <div
          style={{
            backgroundColor: "#000000ba",
            height: "700px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="row">
            <div className="col-lg-12">
              <h3 style={{ color: "black" }}>
                Discover the path, where passion follows
              </h3>
              <p>
                Our team is growing fast. We come to work with energy and
                enthusiasm, we know how meaningful our work is to our clients,
                their customers and mobile industry. We’re working tirelessly to
                make the next century better than the last.
              </p>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  );
};

export default Career;
