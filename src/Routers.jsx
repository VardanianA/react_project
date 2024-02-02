import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Questions from "./pages/questions/Questions";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import NotFound from "./sections/notFound/NotFound";

import Footer from "./components/footer/Footer";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/">
          <Route path="" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="questions" element={<Questions />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
