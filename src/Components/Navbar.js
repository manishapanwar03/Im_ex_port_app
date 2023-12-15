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
          class="navbar navbar-expand-lg  fixed-top  "
          style={{
            width: "100%",
            backgroundColor: "whitesmoke",
            color: "black",
            height: "100px",
          }}
        >
          {/* <br/> */}
          <div
            className="col-lg-4
             col-md-6 col-sm-12"
          >
            <a
              href="#"
              class="navbar-brand1"
              style={{ textDecoration: "none" }}
            >
             
              <h3>Burnettbrück </h3>
              <button
                type="button"
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </a>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 navbar_middle">
            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div class="navbar-nav">
                <a href="/" class="button-6">
                  HOME
                </a>
                
                <Link to="/about" className="button-6">
                  ABOUT US
                </Link>

                <div class="nav-item dropdown ">
                  <a
                    href="#"
                    class="nav dropdown-toggle button-6"
                    data-bs-toggle="dropdown"
                    style={{ color: "rgba(0, 0, 0, 0.85)" }}
                  >
                    BUSINESS
                  </a>
                  <div class="dropdown-menu  navbar-brand">
                    <Link to="/trading" className="text-reset">
                      Burnettbrück Trading and services
                    </Link>
                    <br />
                    <Link to="/stock" className="text-reset">
                      Burnettbrück Stock market consultant
                      <br />
                    </Link>

                    <Link to="/services" className="text-reset">
                      Burnettbrück IT Services and consulting
                      <br />
                    </Link>

                    <Link to="/petrolum" className="text-reset">
                      Burnettbrück Fabrication and Architecture Designing
                    </Link>
                  </div>
                </div>

                <Link to="/career" className="button-6">
                  CAREER
                </Link>
                <Link to="/contact" className="button-6">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-12">
            <div className="icons_mui">
             <a href="#" style={{color:"gray"}}><FacebookIcon  /> </a> 
             <a href="#" style={{color:"gray"}}> <TwitterIcon />
              </a>
             <a href="#" style={{color:"gray"}}><InstagramIcon />
              </a> 
            <a href="#" style={{color:"gray"}}><LinkedInIcon />
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
