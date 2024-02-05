import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import insta from "../../assets/icons/contact_insta.svg";
import fb from "../../assets/icons/contact_fb.svg";
import telegram from "../../assets/icons/contact_telegram.svg";
import phone from "../../assets/icons/contact_phone.svg";
import mail from "../../assets/icons/contact_mail.svg";
import address from "../../assets/icons/contact_address.svg";
import "./Footer.scss";

const SOCIALS = [
  { id: 1, img: insta },
  { id: 2, img: fb },
  { id: 3, img: telegram },
];

const ABOUT = [
  { id: 1, text: "Գլխավոր", url: "" },
  { id: 2, text: "Իմ մասին", url: "about" },
  { id: 3, text: "Կապ Ինձ հետ", url: "contact" },
];

const ITEMS = [
  { id: 1, icon: phone, text: "+374 01 02 03" },
  { id: 2, icon: mail, text: "emailname@gmail.com" },
  { id: 3, icon: address, text: "Amiryan St, Yerevan, Armenia " },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <img src={logo} alt="footer_logo" className="footer__logo" />
          <h1 className="footer__text">Հետևիր Ինձ</h1>
          {SOCIALS.map((item) => {
            return (
              <div className="footer__socials" key={item.id}>
                <img
                  src={item.img}
                  alt={item.img}
                  className="footer__socials-img"
                />
              </div>
            );
          })}
        </div>
        <div className="footer__about">
          <h1 className="footer__about-heading">Իմ Մասին</h1>
          <nav className="footer__about-menu">
            <ul className="footer__about-menu-nav">
              {ABOUT.map((item) => {
                return (
                  <li className="footer__about-menu-item">
                    <Link
                      to={`/${item.url}`}
                      className="footer__about-menu-link"
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="footer__data">
          <div className="footer__data-items">
            <h1 className="footer__data-heading">Տվյալներ</h1>
            {ITEMS.map((item) => {
              return (
                <div className="footer__data-item">
                  <img
                    src={item.icon}
                    alt={item.icon}
                    className="footer__data-img"
                  />
                  <p className="footer__data-text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer__services">
          <h1 className="footer__services-heading">Ծառայություններ</h1>
          <div className="footer__services-text">Ծառայության անվանումը</div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-text">Company  Name 2023. All Rights Reserved</div>
          <div className="footer__bottom-author">
            <p className="footer__bottom-author-text">Designed by </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
