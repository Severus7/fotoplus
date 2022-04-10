import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ServicesBanner from "../components/ServicesBanner";
import FooterComponent from "../components/FooterComponent";
import ServicesAboutBanner from "../components/ServicesAboutBanner";
import sketchPlan from "../assets/sketch_to_2d_before_1.png";
import twoDPlan from "../assets/sketch_to_2d_after_1.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [sketchPlan, twoDPlan];

const ServicesSketchTo2D = () => {
  return (
    <React.Fragment>
      <ServicesBanner service="Sketch to 2D Floor Plan" />
      <Box>
        <Container>
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

export default ServicesSketchTo2D;
