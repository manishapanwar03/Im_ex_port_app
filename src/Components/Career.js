import React, { useEffect } from "react";
import "../CSS/Career.css";
import Footer from "./Footer";
import bgcarrer from "../Images/carrerbg.png";
import Aos from "aos";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
const Career = () => {
  const [Openings, setOpenings] = React.useState(null);
  const [fullName, setFullname] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Contact, setContact] = React.useState("");
  const [Files, setFiles] = React.useState("");
  const [IsLoading, setIsLoading] = React.useState(false);
  const [KeyWordText, setKeywordText] = React.useState([]);
  const [KeyWord, setKeyword] = React.useState([]);
  const [Job, setJob] =React.useState(1);
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bgcarrer}')`,
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
        </div>

        <div
            className="row ResumeRow p-5 mb-5 mt-5"
            style={{
              // background: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk5Ni0wMDlfMS1rcm9pcjRkay5qcGc.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "300px",
              backgroundColor: "white",
              borderRadius: "20px",

              // boxShadow: "0px 0px 15px #918b84b5",
            }}
          >
            <div
              className="col-lg-8 col-md-8 col-sm-12 "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="ResumeMain">
                <h1 className="text-dark" style={{ fontWeight: 700 }}>
                  We Have Opportunities For You
                </h1>
                <p className="share">Share Your CV With  Burnettbrück</p>
                <p className="team1">Our Team Will Get Back To You Soon</p>
                <p>
                  <EmailIcon className="team"  style={{fontSize:"20px"}}/>
                  &nbsp;&nbsp;
                  <a href="mailto:hr@bridgefix.co" style={{ fontSize: "20px" ,color:"black",textDecoration:"none"}}>
                    {" "}
                    hr@burnettbrück.co{" "}
                  </a>
                </p>
                <p>
                  <CallIcon className="team"  style={{fontSize:"20px"}}/> &nbsp;&nbsp;
                  <a href="tel:+   919838383838" style={{ fontSize: "20px",color:"black" ,textDecoration:"none"}}>
                9838383838
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div
                className="sendResume  p-4"
                style={{
                  width: "100%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  borderRadius: "20px",
                  background: "white",
                }}
              >
                <div className="fullName">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    value={fullName}
                    onChange={(e) => setFullname(e.target.value)}
                    aria-required="true"
                    aria-invalid="false"
                    className="form-control mt-3 mb-3"
                    name=""
                    id=""
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    placeholder="xyz@sample.com*"
                    // onKeyUp={ValidateEmail}
                    // value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mt-3 mb-3"
                    name=""
                    id=""
                  />
                  <p
                    style={{ color: "red", display: "none", fontSize: "14px" }}
                    id="lblError"
                  >
                    Invalid email please use @gmail.com
                  </p>
                </div>
                <div className="mobile">
                  <input
                    type="number"
                    className="form-control mt-3 mb-3"
                    value={Contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Mobile Number*"
                    name=""
                    id=""
                    // onKeyUp={Validatephone}
                  />
                  <p
                    style={{ color: "red", display: "none", fontSize: "14px" }}
                    id="phoneError"
                  >
                    Please put 10 digit mobile number
                  </p>{" "}
                </div>
                <div className="chooseFile">
                  <input
                    type="file"
                      // ref={inputRef}
                    className="form-control mt-3 mb-3"
                    onChange={(e) => {
                      setFiles(e.target.files[0]);
                    }}
                    name=""
                    id=""
                  />
                </div>
                <div
                  className="col-sm-12"
                  id="Error"
                  style={{
                    backgroundColor: "#fff5f2",
                    height: "26px",
                    marginBottom: "10px",
                    display: "none",
                  }}
                >
                  <p style={{ color: "red", fontSize: "14px" }}>
                    Please Fill All The *Required Fields
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                    textAlign: "center",
                    padding: "5px 0px",
                    cursor: "pointer",
                  }}
                  // onClick={handleSubmit}
                >
                  {IsLoading === true ? "Submitting..." : "Submit"}
                </div>
              </div>
            </div>
          </div>



        <Footer />
      </div>
    </>
  );
};

export default Career;
