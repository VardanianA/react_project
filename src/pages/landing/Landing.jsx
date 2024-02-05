import React from "react";
import Home from "../../sections/home/Home";
import About from "../../sections/about/About";
import Services from "../../sections/services/Services";
import Cooperate from "../../sections/cooperate/Cooperate";
import CooperateCompany from "../../sections/cooperate_company/CooperateCompany";
import Thinks from "../../sections/thinks/Thinks";
import ContactSection from "../../sections/contact/Contact";

const Landing = () => {
  return (
    <div className="landing">
      <Home />
      <About />
      <Services />
      <Cooperate />
      <CooperateCompany />
      {/* <Thinks /> */}
      <ContactSection />
    </div>
  );
};

export default Landing;
