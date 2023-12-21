import React, { useEffect } from "react";
import "../CSS/Navbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{
            width: "100%",
            position: "fixed",
            backgroundColor: "whitesmoke",
            color: "black",
            height: "100px",
            zIndex: 1,
          }}
        >
          <div
            className="col-lg-4
             col-md-6 col-sm-12 navbar-brand1"
          >
            {/* <a
              href="#"
              className="navbar-brand1"
              style={{ textDecoration: "none" }}
            > */}
              <Link to="/" target="_top" className="text-reset">
                <h3>Burnettbrück </h3>
                <h3 style={{ color: "#4b505e", fontSize: "15px" }}>PVT LTD</h3>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            {/* </a>   */}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 navbar_middle">
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                <Link to="/" target="_top" className="button-6">
                  HOME
                </Link>

                <Link to="/about" target="_top" className="button-6">
                  ABOUT US
                </Link>

                <div className="dropdown">
                    <a
                    href="#"
                    className="nav dropdown-toggle button-6"
                  
                    style={{ color: "rgba(0, 0, 0, 0.85)" }}
                  >
                    BUSINESS
                  </a>
                  <div className="dropdown-menu  navbar- dropdown-options" > 
                    <Link to="/trading" target="_top"  className="link" >
                      Burnettbrück Trading and services
                    <br />
                    </Link>
                    <Link to="/stock" target="_top"  className="link"   >
                      Burnettbrück Stock market consultant
                      <br />
                    </Link>

                    <Link to="/services" target="_top"  className="link"  >
                      Burnettbrück IT Services and consulting
                      <br />
                    </Link>

                    <Link to="/petrolum" target="_top"   className="link" >
                      Burnettbrück Fabrication and Architecture Designing
                    </Link>
                  </div>
                </div>

                <Link to="/career" target="_top" className="button-6">
                  CAREER
                </Link>
                <Link to="/contact" target="_top" className="button-6">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-12">
            <div className="icons_mui">
              <a href="#" style={{ color: "gray" }}>
                <FacebookIcon />{" "}
              </a>
              <a href="#" style={{ color: "gray" }}>
                {" "}
                <TwitterIcon />
              </a>
              <a href="#" style={{ color: "gray" }}>
                <InstagramIcon />
              </a>
              <a href="#" style={{ color: "gray" }}>
                <LinkedInIcon />
              </a>
            </div>

            <div color="gray" style={{ fontSize: "13px", paddingTop: "10px" }}>
              CALL: 0755-2423736 |
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                  paddingLeft: "10px",
                }}
              >
                WORK WITH US
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
