import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { Box, Container, Typography, Card, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ServicesBanner from "../components/ServicesBanner";
import ServicesAboutBanner from "../components/ServicesAboutBanner";
import FooterComponent from "../components/FooterComponent";
import itemRemovalBefore1 from "../assets/item_removal_1_before.jpg";
import itemRemovalAfter1 from "../assets/item_removal_1_after.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [itemRemovalBefore1, itemRemovalAfter1];

const ServicesItemRemoval = () => {
  return (
    <React.Fragment>
      <ServicesBanner service="Item Removal" />
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
            We eliminate any distracting things from the shot so that your
            listing can show off everything it has to offer.
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
                  <CardMedia component="img" image={image} />
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

export default ServicesItemRemoval;
