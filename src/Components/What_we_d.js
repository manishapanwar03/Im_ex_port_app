import React from "react";
import "../CSS/About_us.css";
import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
const What_we_d = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <>
      <div>
        {/* <div style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up">
      <div>
        <center>
          <h2 style={{ color: "black" ,paddingTop:"20px"}}>WHAT WE DO</h2>
        
        <b>
          <p>
            We bring together diverse, future-facing industries and communities
            to co-create a positive world, where one
            <center>
              <p>enables the other to Rise.</p>{" "}
            </center>
          </p>
        </b>
          </center>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS731Y9lEPYWRVA2CLUsRtcw4fKUmM5Iij3CA&usqp=CAU" alt="Mountains"  className="img_cards" />
            <figcaption>Fabrication and <br/>assembly </figcaption>
          </figure>
          <figure style={{c:"#fff5"}}>
            <img src="data:image/png;base64,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" alt="Mountains" className="img_cards"/>
            <figcaption>The Mobile</figcaption>
          </figure>
          <figure style={{c:"#fff5"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9P2nxKzKVksZgNk77RYn5HFz9Dn74ENvcw&usqp=CAU" alt="Mountains"   className="img_cards"/>
            <figcaption>It services <br/>and consulting</figcaption>
          </figure>
          <figure style={{c:"#fff5"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHnP6MjTOwh4G4MjJVk5ZPaF1kuWhQXT9IQ&usqp=CAU" alt="Mountains"  className="img_cards"/>
            <figcaption style={{color:"black"}}>Stock market</figcaption>
          </figure>
        </div>
      </div>
      
    </div> */}
       
       
        <br/>
        <br/>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-up"
        >
          <div>
            <center>
              
              <h2 style={{ color: "black" }}>OUR TEAM</h2>
              <br/>
            <br/>
            <div class="loader"></div> 
            <br/>
            <br/>


              <b>
                <p>
                  We bring together diverse, future-facing industries and
                  communities to co-create a positive world, where one
                  <center>
                    <p>enables the other to Rise.</p>{" "}
                  </center>
                </p>
              </b>
            </center>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <figure>
                <img
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
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
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
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
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg"
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
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
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
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4FuW3P9pLDpJPJEYddfbO_qWV_Sf5EbFi58TSIhqHA&s')`,
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
                    We Provide All  Solutions, You Can
                    Get Quote Here
                  </h3>
                  <br />

                  <br />

                  <Link to="/contact" className="button-5">
                    Contact us Today
                  </Link>
                  {/* <button class="button-5">Contact us Today</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br />
        <br />
      </div>
    </>
  );
};

export default What_we_d;
