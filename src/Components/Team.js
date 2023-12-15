import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import "../CSS/Team.css";
import Aos from "aos";
const Team = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1200,
    })
    
  })
  return (
    <div>
      <div  data-aos="fade-up" >
        <h2
          className="font-weight-bold mb-2 text-center"
          style={{ color: "black"}}
        >
          Latest Statistics
        </h2>
        <p className="font-italic text-muted mb-4 text-center" style={{ color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>

     <center>
      <div style={{width:"80%"}}>
          <div className="row pb-5">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-5" style={{color:"black"}}>
                  <BarChartIcon style={{ height: "70px", width: "50px"  ,color:"gray"}} />
                  <h5 >Products Sales</h5>
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
                <div className="card-body p-5" style={{color:"black"}}>
                  <BarChartIcon style={{ height: "70px", width: "50px" ,color:"gray"}} />
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
                <div className="card-body p-5" style={{color:"black"}}>
                  <AccountCircleIcon
                    style={{ height: "70px", width: "50px"  ,color:"gray"}}
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
                <div className="card-body p-5" style={{color:"black"}}>
                  <BarChartIcon style={{ height: "70px", width: "50px" ,color:"gray" }} />
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
          </div>
        </div>
      </center>  
      </div>
    </div>
  );
};

export default Team;
