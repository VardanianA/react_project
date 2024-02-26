import React from "react";
// import homeLogo from "../../assets/icons/home_logo.svg";
import homeImage from "../../assets/images/home_bg_img.png";
import rightBtn from "../../assets/icons/home_rigtht_btn.svg";
import "./Home.scss";

const HomeSection = () => {
  return (
    <section className="home">
      <div className="home__inner">
        <img src={homeImage} alt="homeImage" className="home__image" />
        {/* <img src={homeLogo} alt="homeLogo" className="home__logo" /> */}
        <div className="home__heading">
          <div className="home__title">Efficient Cargo Delivery Services</div>
          <div className="home__text">We operate globally, connecting major cilies and remote locations alike. No matter where your cargo needs to go. we have the infrastructure to deliver it efficiently.</div>
          <button className="home__btn">View More<img src={rightBtn} className="home__icon" /></button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
