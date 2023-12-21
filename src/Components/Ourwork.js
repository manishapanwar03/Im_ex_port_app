import React from "react";
import "../CSS/About_us.css";
import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import team1 from '../Images/team1.webp';
import team2 from '../Images/Team2.webp';
import team3 from '../Images/Team3.webp';
import team4 from '../Images/Team4.webp';
import bgcards from '../Images/cardsbg.jpg'
const What_we_d = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-up"
        >
          <div>
       
            <div style={{textAlign:"center"}}>
              <br />

              <h2 style={{ color: "black" }}>OUR TEAM</h2>
              <br />
              <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>

              <div className="loader"></div>
              </div>
              <br />
              <br />

              <b>
                <p>
                  We bring together diverse, future-facing industries and
                  communities to co-create a positive world, where one
               
                    <span style={{textAlign:"center",display:"block"}}>enables the other to Rise.</span>{" "}
                
                </p>
              </b>
            </div>
      
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <figure>
                <img
                  src={team1}
                  alt="Mountains"
                  className="img_cards"
                  style={{ height: "300px" }}
                />
                <figcaption>
                  Mark Rockwell
                  <br />
                  CEO - Consultant
                </figcaption>
              </figure>
              <figure style={{ c: "#fff5" }}>
                <img
                  src={team2}
                  alt="Mountains"
                  className="img_cards"
                  style={{ height: "300px" }}
                />
                <figcaption>
                  Mark Rockwell
                  <br />
                  CEO - Consultant
                </figcaption>
              </figure>
              <figure style={{ c: "#fff5" }}>
                <img
                  src={team3}
                  alt="Mountains"
                  className="img_cards"
                  style={{ height: "300px" }}
                />
                <figcaption>
                  Mark Rockwell
                  <br />
                  CEO - Consultant
                </figcaption>
              </figure>
              <figure style={{ c: "#fff5" }}>
                <img
                  src={team4}
                  alt="Mountains"
                  className="img_cards"
                  style={{ height: "300px" }}
                />
                <figcaption>
                  Mark Rockwell
                  <br />
                  CEO - Consultant
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('${bgcards }')`,
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
        <br />
      </div>
    </>
  );
};

export default What_we_d;
