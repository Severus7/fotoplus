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
import Error from "./pages/Error";
import darkTheme from "./assets/theme.js";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationBar />
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
        <Route path="*" element={<Error />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;