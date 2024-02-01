import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Questions from "./sections/questions/Questions";
import Services from "./sections/services/Services";
import Contact from "./sections/contact/Contact";
import NotFound from "./sections/notFound/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Routers = () => {
  return (
    <Router>
      <Header />
      <section className="sections">
        <Routes>
          <Route exact path="/">
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="questions" element={<Questions />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </section>
      <Footer />
    </Router>
  );
};

export default Routers;
