import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesREVirtualAsssistant from "./pages/ServicesREVirtualAsssistant";
import Services2DTo3D from "./pages/Services2DTo3D";
import ServicesImageEnhancement from "./pages/ServicesImageEnhancement";
import ServicesVirtualStaging from "./pages/ServicesVirtualStaging";
import ServicesItemRemoval from "./pages/ServicesItemRemoval";
import ServicesWebDesign from "./pages/ServicesWebDesign";
import ServicesSketchTo2D from "./pages/ServicesSketchTo2D";
import Error from "./pages/Error";
import darkTheme from "./assets/theme.js";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationBar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services/real-estate-virtual-assistant"
            element={<ServicesREVirtualAsssistant />}
          />
          <Route
            path="/services/2D-floor-plan-to-3D-floor-plan"
            element={<Services2DTo3D />}
          />
          <Route
            path="/services/image-enhancement"
            element={<ServicesImageEnhancement />}
          />
          <Route
            path="/services/virtual-staging"
            element={<ServicesVirtualStaging />}
          />
          <Route
            path="/services/item-removal"
            element={<ServicesItemRemoval />}
          />
          <Route
            path="/services/sketch-to-2d-floor-plan"
            element={<ServicesSketchTo2D />}
          />
          <Route
            path="/services/web-design-and-development"
            element={<ServicesWebDesign />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </ScrollToTop>
    </ThemeProvider>
  );
}

export default App;
