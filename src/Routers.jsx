import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Questions from "./sections/questions/Questions";
import Services from "./sections/services/Services";
import Contact from "./sections/contact/Contact";
import NotFound from "./sections/notFound/NotFound";

const Routers = () => {
  return (
    // <BrowserRouter>
      <Router>
        <Routes>
            <Route exact path="/">
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="questions" element={<Questions />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      // </BrowserRouter>
  );
};

export default Routers;
