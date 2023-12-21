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
          
        </Container>
      </div>
     

      <Footer />
    </>
  );
}
