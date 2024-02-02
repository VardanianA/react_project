import React from "react";
import homeLogo from "../../assets/icons/home_logo.svg";
import homeImage from "../../assets/images/home.png";
import "./Home.scss";

const HomeSection = () => {
  return (
    <section className="home">
      <div className="home__inner">
        <img src={homeImage} alt="homeImage" className="home__image" />
        <img src={homeLogo} alt="homeLogo" className="home__logo" />
      </div>
    </section>
  );
};

export default HomeSection;
