import React from "react";
import bgImage from "../../assets/images/cooperate_img.png";
import inecoImg from "../../assets/icons/cooperate_company_ineco.svg";
import idImg from "../../assets/icons/cooperate_company_id.svg";
import acbaImg from "../../assets/icons/cooperate_company_acba.svg";
import ameriaImg from "../../assets/icons/cooperate_company_ameria.svg";
import conversImg from "../../assets/icons/cooperate_company_convers.svg";
import "./CooperateCompany.scss";

const ITEMS = [
  { id: 1, img: inecoImg },
  { id: 2, img: idImg },
  { id: 3, img: acbaImg },
  { id: 4, img: ameriaImg },
  { id: 5, img: conversImg },
];

const CooperateCompany = () => {
  return (
    <section className="cooperateCompany">
      <div className="cooperateCompany__inner">
        <div className="cooperateCompany__inner-item">
          <h1 className="cooperateCompany__heading">
            համագործակցող ընկերություններ
          </h1>
          <div className="cooperateCompany__items">
            {ITEMS.map((item) => {
              return (
                <div className="cooperateCompany__item">
                  <img
                    src={item.img}
                    alt={item.img}
                    className="cooperateCompany__item-img"
                  />
                  ;
                </div>
              );
            })}
          </div>
        </div>
        <img
          src={bgImage}
          alt="cooperateCompany__img"
          className="cooperateCompany__img"
        />
      </div>
    </section>
  );
};

export default CooperateCompany;
