import React from "react";
import "../CSS/Footer.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

import {
  MDBFooter,
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
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <a href="/" className="text-reset">
                <h6 className=" fw-bold mb-4 " style={{ fontSize: "20px" }}>
                  Burnettbrück
                </h6>
              </a>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <Link to="/trading" target="_top" className="text-reset">
                Trading and services
              </Link>
              <br />
              
              <Link to="/stock" target="_top"  className="text-reset">
                Stock market consultant
                <br />
              </Link>

              <Link to="/services" target="_top"  className="text-reset">
                IT Services and consulting
                <br />
              </Link>

              <Link to="/petrolum" target="_top"  className="text-reset">
                Fabrication and Architecture Designing
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
                <Link to="/contact" className="text-reset">
                  Help
                </Link>
              </p>
            </MDBCol>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <h5>Contact Info</h5>
              <div className="contact_info">
                <p style={{ display: "flex" }}>
                  <a href="" className="text-reset">
                    <LocationOnOutlinedIcon
                      className="icon"
                      style={{ marginTop: "4px" }}
                    />
                  </a>
                  <span style={{ marginLeft: "5px" }}>
                    <a href="https://maps.app.goo.gl/Yn24EnrqawSPk8qX9" style={{textDecoration:"none",color:"gray"}}>
                    388, 1st Floor, Pu4, Scheme Number 54, In front of Retina
                    Speciality Hospital, Vijay Nagar, Indore, Madhya Pradesh,
                    452010
                    </a>
                  </span>
                </p>
                <p style={{ display: "flex" }}>
                  <WifiCalling3OutlinedIcon
                    className="icon"
                    style={{ marginTop: "4px" }}
                  />
                  <span href="tel:+919425960946">
                    <span style={{ marginLeft: "10px", color: "gray" }}>
                      +91 9425960946
                    </span>
                  </span>
                </p>
                <p style={{ display: "flex" }}>
                  <a href="mailto:hr@burnettbrück.co" className="text-reset">
                    <DraftsOutlinedIcon
                      className="icon"
                      style={{ marginTop: "4px" }}
                    />
                    <span style={{ marginLeft: "10px", color: "gray" }}>
                      hr@burnettbrück.co
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </MDBRow>
        </section>
      </MDBFooter>
    </div>
  );
};

export default Footer;
