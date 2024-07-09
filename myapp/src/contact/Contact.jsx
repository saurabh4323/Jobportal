import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { Menu } from "../Menu/Menu";
import Footer from "../Footer/Footer";

const StyledContainer = styled(Container)({
  marginTop: "4rem",
  padding: "2rem",
  backgroundColor: "#f5f5f5",

  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  border: "1px solid #000",
  borderRadius: "15px",
});

const ContactInfoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
  border: "1px solid #000",
  padding: "1rem",
  backgroundColor: "#fff",
  borderRadius: "30px",
  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.3s",
  "&:hover": {
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
});

const ContactIcon = styled(Box)({
  marginRight: "0.5rem",
});

const SendButton = styled(Button)({
  marginTop: "1rem",
  padding: "1rem 2rem",
  borderRadius: "8px",
  fontWeight: "600",
  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: "#2980b9",
    color: "#fff",
  },
});

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Menu></Menu>
      <StyledContainer maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          style={{
            fontFamily: "Arial",
            textAlign: "center",
            borderBottom: "1px solid red",
            marginBottom: "1rem",
            paddingBottom: "0.5rem",
          }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <ContactInfoBox>
              <ContactIcon>
                <LocationOnIcon color="primary" />
              </ContactIcon>
              <Typography variant="body1">India , Noida</Typography>
            </ContactInfoBox>
            <ContactInfoBox>
              <ContactIcon>
                <PhoneIcon color="primary" />
              </ContactIcon>
              <Typography variant="body1">+123 456 7890</Typography>
            </ContactInfoBox>
            <ContactInfoBox>
              <ContactIcon>
                <EmailIcon color="primary" />
              </ContactIcon>
              <Typography variant="body1">jobportal@gmail.com</Typography>
            </ContactInfoBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Feedback
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Box textAlign="right">
                <SendButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                   borderRadius:"50px",
                   backgroundColor:"#3C65F5"
                  }}
                  endIcon={<SendIcon />}
                >
                  Send
                </SendButton>
              </Box>
            </form>
          </Grid>
        </Grid>
      </StyledContainer>

      <Footer></Footer>
    </>
  );
};

export default Contact;
