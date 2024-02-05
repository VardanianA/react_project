import React from "react";
import phone from "../../assets/icons/contact_phone.svg";
import mail from "../../assets/icons/contact_mail.svg";
import address from "../../assets/icons/contact_address.svg";
import insta from "../../assets/icons/contact_insta.svg";
import fb from "../../assets/icons/contact_fb.svg";
import telegram from "../../assets/icons/contact_telegram.svg";
import "./Contact.scss";

const ITEMS = [
  { id: 1, icon: phone, text: "+374 01 02 03" },
  { id: 2, icon: mail, text: "emailname@gmail.com" },
  { id: 3, icon: address, text: "Amiryan St, Yerevan, Armenia " },
];

const SOCIAL_MEDIA = [
  { id: 1, img: insta },
  { id: 2, img: fb },
  { id: 3, img: telegram },
];

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact__inner">
        <div className="contact__form">
          <h1 className="contact__form-title">ՈՒղարկիր ինձ Հաղորդագրություն</h1>
          <form className="contact__form-inner">
            <input
              type="text"
              placeholder="Անուն"
              className="input contact__form-name"
            />
            <input
              type="text"
              placeholder="Ազգանուն"
              className="input contact__form-lastName"
            />
            <input
              type="number"
              placeholder="հեռախոսահամար"
              className="input contact__form-phone"
            />
            <input
              type="email"
              placeholder="Էլ. հասցե"
              className="input contact__form-mail"
            />
            <textarea
              placeholder="Հաղորդագրություն"
              className="contact__form-msg"
              rows="2"
              cols="4"
            />
            <input
              type="submit"
              value="ՈՒղարկել"
              className="contact__form-btn"
            />
          </form>
        </div>
        <div className="contact__right">
          <div className="contact__right-icons">
            <h1 className="contact__right-title">Կապ Ինձ Հետ</h1>
            {ITEMS.map((item) => {
              return (
                <div className="contact__right-icon">
                  <img
                    src={item.icon}
                    alt={item.icon}
                    className="contact__right-icon-img"
                  />
                  <p className="contact__right-text">{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className="contact__right-bottom">
            {SOCIAL_MEDIA.map((item) => {
              return (
                <img
                  src={item.img}
                  alt={item.img}
                  key={item.id}
                  className="contact__right-bottom-img"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
