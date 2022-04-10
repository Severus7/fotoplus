import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { Box, Container, Typography, Card, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ServicesBanner from "../components/ServicesBanner";
import ServicesAboutBanner from "../components/ServicesAboutBanner";
import FooterComponent from "../components/FooterComponent";
import uneditedHouse1 from "../assets/unedited_house_1.jpg";
import editedHouse1 from "../assets/edited_house_1.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [uneditedHouse1, editedHouse1];

const ServicesVirtualStaging = () => {
  return (
    <React.Fragment>
      <ServicesBanner service="Virtual Staging" />
      <Box>
        <Container>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "100",
              lineHeight: "75px",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            By including fashionable furnishings with your listing, you can
            assist your client in visualizing their dream home.
          </Typography>
          <Card>
            <Swiper
              slidesPerView={1}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              grabCursor
              keyboard={{ enabled: true }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              loop
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <CardMedia component="img" width="100%" image={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>
        </Container>
      </Box>
      <ServicesAboutBanner />
      <FooterComponent />
    </React.Fragment>
  );
};

export default ServicesVirtualStaging;
