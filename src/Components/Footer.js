import React from "react";
import "../CSS/Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block"></div>
          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          {/* <MDBContainer className="text-center text-md-start mt-5"> */}
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className=" fw-bold mb-4 " style={{ fontSize: "20px" }}>
                {/* <MDBIcon color="secondary" icon="gem" className="me-3" /> */}
                Burnettbrück
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
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
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <h5>Contact Info</h5>
              <div className="contact_info">
                <p style={{ display: "flex" }}>
                  <LocationOnOutlinedIcon
                    className="icon"
                    style={{ marginTop: "4px" }}
                  />{" "}
                  <span style={{ marginLeft: "5px" }}>
                    388, 1st Floor, Pu4, Scheme Number 54, In front of Retina
                    Speciality Hospital, Vijay Nagar, Indore, Madhya Pradesh,
                    452010
                  </span>
                </p>
                <p style={{ display: "flex" }}>
                  <WifiCalling3OutlinedIcon
                    className="icon"
                    style={{ marginTop: "4px" }}
                  />
                  <p href="tel:+919425960946">
                    <span style={{ marginLeft: "10px", color: "gray" }}>
                      +91 9425960946
                    </span>
                  </p>
                </p>
                <p style={{ display: "flex" }}>
                  <DraftsOutlinedIcon
                    className="icon"
                    style={{ marginTop: "4px" }}
                  />
                  <pf href="mailto:hr@bridgefix.co">
                    <span style={{ marginLeft: "10px", color: "gray" }}>
                      hr@burnettbrück.co
                    </span>
                  </pf>
                </p>
              </div>
            </div>
          </MDBRow>
          {/* </MDBContainer> */}
        </section>
      </MDBFooter>
    </div>
  );
};

export default Footer;
