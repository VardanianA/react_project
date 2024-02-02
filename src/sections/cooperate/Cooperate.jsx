import React from "react";
import bgImage from "../../assets/images/cooperate_img.png";
import "./Cooperate.scss";

const ITEMS = [
  { id: 1, heading: "4+", text: "Աշխատանքային փորձ" },
  { id: 2, heading: "2000+", text: "Գոհ հաճախորդներ" },
  { id: 3, heading: "184+", text: "Համագործակցում" },
  { id: 4, heading: "3+", text: "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ" },
];

const Cooperate = () => {
  return (
    <section className="cooperate">
      <div className="cooperate__inner">
        <div className="cooperate__inner-item">
          <h1 className="cooperate__heading">ինչու համագործակցել ինձ հետ</h1>
          <div className="cooperate__items">
            {ITEMS.map((item) => {
              return (
                <div className="cooperate__item" key={item.id}>
                  <div className="cooperate__item-heading">{item.heading}</div>
                  <div className="cooperate__item-text">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <img src={bgImage} alt="cooperate__img" className="cooperate__img" />
      </div>
    </section>
  );
};

export default Cooperate;
