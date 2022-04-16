import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import FooterComponent from "../components/FooterComponent";
import BoxContactComponent from "../components/BoxContactComponent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .email("Enter a valid email address"),
  userMessage: yup.string().required("This field is required"),
});

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_21awfcm", //EMAILJS SERVICE ID
        "template_axiye8e", //EMAILJS TEMPLATE ID
        form.current,
        "0xZVPYZqdy0s1wwKk" //EMAILJS PUBLIC KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Success! We have received your message");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Your message was not sent. Try again.");
          window.location.reload();
        }
      );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "grey.900",
          height: "70%",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            color="grey.50"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "100",
            }}
          >
            Send us a message
          </Typography>
          <Grid container spacing={10} sx={{ marginTop: "10px" }}>
            <Grid item lg={6}>
              <Box
                component="form"
                ref={form}
                onSubmit={handleSubmit(sendEmail)}
              >
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  {...register("name")}
                  error={!!errors?.name}
                  helperText={errors.name?.message}
                />

                <TextField
                  label="Email address"
                  name="email"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  {...register("email")}
                  error={!!errors?.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  label="Message"
                  name="userMessage"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  multiline
                  rows={5}
                  maxRows={5}
                  {...register("userMessage")}
                  error={!!errors?.userMessage}
                  helperText={errors.userMessage?.message}
                />
                <Button
                  variant="contained"
                  color="common"
                  sx={{
                    backgroundColor: "grey.50",
                    padding: "50px, 25px",
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Typography
                variant="h4"
                component="h4"
                color="text.primary"
                gutterBottom
              >
                Foto+
              </Typography>
              <BoxContactComponent
                icon={<LocationOnIcon sx={{ fontSize: 30, color: "#fff" }} />}
                value={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", marginLeft: 3 }}
                    color="common.white"
                  >
                    Manila
                  </Typography>
                }
              />
              <BoxContactComponent
                icon={<PhoneIphoneIcon sx={{ fontSize: 30, color: "#fff" }} />}
                value={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", marginLeft: 3 }}
                    color="common.white"
                  >
                    +63 9xx xxxxxxx
                  </Typography>
                }
              />
              <BoxContactComponent
                icon={<PhoneIcon sx={{ fontSize: 30, color: "#fff" }} />}
                value={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", marginLeft: 3 }}
                    color="common.white"
                  >
                    123456789
                  </Typography>
                }
              />
              <BoxContactComponent
                icon={<EmailIcon sx={{ fontSize: 30, color: "#fff" }} />}
                value={
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", marginLeft: 3 }}
                    color="common.white"
                  >
                    fotoplus@email.com
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ marginTop: "75px" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ marginBottom: "50px", fontWeight: "700" }}
        >
          About
        </Typography>
        <Box sx={{ width: "100%", marginBottom: "30px" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ lineHeight: "75px", textAlign: "left", fontWeight: "100" }}
          >
            In PhotoPlus, we are dedicated to providing excellent service to
            you, our client, to win your condifence.
          </Typography>
        </Box>
        <Button
          component={Link}
          to="/about"
          sx={{
            textTransform: "none",
            "&:hover": { backgroundColor: "transparent" },
          }}
          disableRipple
          disableFocusRipple
        >
          <Typography color="secondary.dark" variant="h5">
            Learn more about us!
          </Typography>
        </Button>
      </Container>
      <FooterComponent marginTop="200px" />
    </React.Fragment>
  );
};

export default Contact;
