import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../CSS/Contact.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import Footer from "./Footer";
import loginimage from "../Images/LoginImage3.png";
export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    " Burnettbrück Trading and services",
    " Burnettbrück Stock market consultant",
    " Burnettbrück IT Services and consulting",
    " Burnettbrück Fabrication and Architecture Designing",
    "  Burnettbrück Carrer",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  useEffect(() => {
    // window.scrollTo(0, 0);
    Aos.init({
      duration: 1200,
    });
  });

  return (
    <>
      <div style={{ height: "80%" }} data-aos="fade-up">
        <Container component="main">
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <img
                src={loginimage}
                alt="Login Image"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ height: "auto" }}>
              <Box
                sx={{
                  px: 4,
                  py: 6,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ color: "#3373a9", fontWeight: 600 }}
                >
                  Get in Touch!
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    select
                    margin="normal"
                    required
                    fullWidth
                    value={selectedOption}
                    onChange={handleOptionChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="message"
                    rows="7"
                    multiline
                    type="password"
                    id="password"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ backgroundColor: "#3373a9" }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <br/>

          <div className="col-lg-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7358.9310805554!2d75.8935003!3d22.7480983!3m2!1i1024!2i768!4f13.1!2m1!1s388%2C%201st%20Floor%2C%20Pu4%2C%20Scheme%20Number%2054%2C%20In%20front%20of%20Retina%20Speciality%20Hospital%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%2C%20452010!5e0!3m2!1sen!2sin!4v1703151059024!5m2!1sen!2sin" width="1200" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
          <br/>
          <br/>
          
        </Container>
      </div>
     

      <Footer />
    </>
  );
}
