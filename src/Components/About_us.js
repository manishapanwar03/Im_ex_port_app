// import React from "react";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";


// const About_us = () => {
//   return (
//     <div>
//       <div className="row" height="50%" >
//         <div className="col-lg-6 col-sm-12 col-md-6">
//           <div className="anidiv">
//             <img
//               src="https://img.freepik.com/premium-vector/company-specializing-foreign-products-import-goods-services-import-goods-services-international_566886-3290.jpg"
//               width="100%"
//               height="100%"

//             />
//           </div>
//         </div>

//         <div
//           className="col-lg-6 col-sm-12 col-md-6"
//           style={{ display: "flex", alignItems: "center"}}
//         >
//           <div>
//             <h3 style={{ color: "#ed6626" }}>About us</h3>

//             <h2 style={{ color: "black" }}>Know Who We Are</h2>
//             <p
//               style={{
//                 textAlign: "left",
//                 color: "gray",
//                 textAlignLast: "auto",
//               }}
//             >
//               What started as a zest to change the world for a better place,
//               today stands as the epitome of advancement, prosperity, and
//               development. We have evolved from being a construction company to
//               an integrated player across Education, Construction, FMCG,
//               Regional & Local News, and Healthcare services. For the last two
//               decades we have been growing gradually but consistently, and what
//               kept us going is our commitment to innovation and courage to
//               experiment. ...
//             </p>
//             <div className="row">
//               <div className="col-lg-6 col-md-6 col-sm-12">
//                 <button className="button-25" role="button">
//                   Learn More
//                 </button>
//               </div>
//               <div className="col-lg-4 col-sm-12 col-md-6">
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-evenly",
//                     color: "#5c5151",
//                   }}
//                 >
//                   <TwitterIcon />
//                   <InstagramIcon />
//                   <LinkedInIcon />
//                 </div>
//               </div>
//               <div className="col-lg-2 col-sm-12 col-md-6"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About_us;

import React from "react";
import "../CSS/About_us1.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const About_us = () => {
  return (
    // <div className="container">
      <div
        style={{
          color: "rgb(114 116 119)",
        }}
      
      >
        <div className="col-lg-12 col-sm-12 col-md-6 ">
          <div className="container py-5">
            <header className="text-center mb-5">
              <h1 className="display-4 font-weight-bold">Our Team</h1>
            </header>

            <p className="font-italic text-center mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <div className="row pb-5 mb-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-0">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                      alt=""
                      className="w-100 card-img-top"
                    />
                    <div className="p-4">
                      <h5 className="mb-0">Mark Rockwell</h5>
                      <p className="small text-muted">CEO - Consultant</p>
                      <ul className="social mb-0 list-inline mt-3 logoo ">
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <TwitterIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <InstagramIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <LinkedInIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <FacebookIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-0">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg"
                      alt=""
                      className="w-100 card-img-top"
                    />
                    <div className="p-4">
                      <h5 className="mb-0">Mark Rockwell</h5>
                      <p className="small text-muted">CEO - Consultant</p>
                      <ul className="social mb-0 list-inline mt-3 logoo">
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <TwitterIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <InstagramIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <LinkedInIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <FacebookIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-0">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
                      alt=""
                      className="w-100 card-img-top"
                    />
                    <div className="p-4">
                      <h5 className="mb-0">Mark Rockwell</h5>
                      <p className="small text-muted">CEO - Consultant</p>
                      <ul className="social mb-0 list-inline mt-3 logoo">
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <FacebookIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <TwitterIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <InstagramIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <LinkedInIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-0">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg"
                      alt=""
                      className="w-100 card-img-top"
                    />
                    <div className="p-4">
                      <h5 className="mb-0">Mark Rockwell</h5>
                      <p className="small text-muted">CEO - Consultant</p>
                      <ul className="social mb-0 list-inline mt-3 logoo">
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <FacebookIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <TwitterIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <InstagramIcon />
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="#" className="social-link">
                            <LinkedInIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "600px",
                }}
              >
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div>
                    <img
                      src="https://media.licdn.com/dms/image/C4E12AQFUc0PUZGZMHA/article-cover_image-shrink_720_1280/0/1520155035587?e=2147483647&v=beta&t=eSxlXNZppR2DK6i0OR3gF4qbnbYs8goQ4N7dbJSXLtg"
                      className="about_image"
                    />
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-12"
                  style={{ textAlign: "left" }}
                >
                  <h2
                    style={{
                      color: "gray",
                      fontSize: "50px",
                      fontWeight: "20px",
                    }}
                  >
                    About Us
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.Exports and imports play an important role in
                    determining the overall health of an economy. Countries use
                    the data they acquire from exports and imports to determine
                    if they are experiencing a surplus or a deficit. If you work
                    in logistics, finance or a government position that involves
                    managing shipments between foreign countries, understanding
                    how exports and imports work may benefit you. In this
                    article, we define what exports and imports are, explore how
                    they can influence an economy and list several careers that
                    involve exports and imports.
                  </p>

                  <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-6">
                      <button
                        className="button-25"
                        role="button"
                        style={{ float: "right" }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>

            {/* <h2 className="font-weight-bold mb-2 text-center">
              Latest Statistics
            </h2>
            <p className="font-italic text-muted mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <div className="row pb-5">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card rounded shadow-sm border-0">
                  <div className="card-body p-5">
                    <BarChartIcon style={{ height: "70px", width: "50px" }} />
                    <h5>Products Sales</h5>
                    <p className="small text-muted font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="progress rounded-pill">
                      <div
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "70%" }}
                        className="progress-bar rounded-pill"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card rounded shadow-sm border-0">
                  <div className="card-body p-5">
                    <BarChartIcon style={{ height: "70px", width: "50px" }} />
                    <h5>Completed Tasks</h5>
                    <p className="small text-muted font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="progress rounded-pill">
                      <div
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                        className="progress-bar bg-success rounded-pill"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card rounded shadow-sm border-0">
                  <div className="card-body p-5">
                    <AccountCircleIcon
                      style={{ height: "70px", width: "50px" }}
                    />
                    <h5>New Users</h5>
                    <p className="small text-muted font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="progress rounded-pill">
                      <div
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "70%" }}
                        className="progress-bar bg-info rounded-pill"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card rounded shadow-sm border-0">
                  <div className="card-body p-5">
                    <BarChartIcon style={{ height: "70px", width: "50px" }} />
                    <h5>New Products</h5>
                    <p className="small text-muted font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="progress rounded-pill">
                      <div
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                        className="progress-bar bg-warning rounded-pill"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          
        </div>
      </div>
    // </div>
  );
};

export default About_us;
