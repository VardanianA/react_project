import React from "react";
import img1 from "../../assets/images/thinks_img1.png";
import img2 from "../../assets/images/thinks_img2.png";
import img3 from "../../assets/images/thinks_img3.png";
import stars from "../../assets/icons/thinks_stars.svg";
import "./Thinks.scss";

const ITEMS = [
  {
    id: 1,
    title:
      "Միշտ հասանելի և արագընթաց մոտեցում։ Նմանատիպ հարցերում շատ ուշադիր եմ և գնահատում եմ յուրահատուկ մոտեցումը։",
    img: img1,
    stars: stars,
    name: "Մարկ Մելիքսեթյան",
    profession: "Հաշվապահ",
  },
  {
    id: 2,
    title: "Ես իսկապես գնահատում եմ ձեր աշխատանքը այստեղ. որակը հիանալի է:",
    img: img2,
    stars: stars,
    name: "Անահիտ Կիրակոսյան",
    profession: "Հաշվապահ",
  },
  {
    id: 3,
    title:
      "Շնորհակալ եմ մասնագիտական ճիշտ մոտեցման համար։ Հաստատ նորից կօգտվեմ Ձեր ծառայություններից։",
    img: img3,
    stars: stars,
    name: "Աննա Ավագյան",
    profession: "Հաշվապահ",
  },
];

const Thinks = () => {
  return (
    <section className="thinks">
      <div className="thinks__inner">
        <div className="thinks__left" />
        <div className="thinks__slide">
          <h1>Կարծիքներ</h1>

          {ITEMS.map((item) => {
            return (
              // <div className="thinks__items">
              <div className="thinks__item">
                <div className="thinks__bg" />
                <div className="thinks__item-inner">
                  <h1 className="thinks__title">{item.title}</h1>
                  <img
                    src={item.img}
                    alt={item.img}
                    className="thinks__item-img"
                  />
                  <img
                    src={item.stars}
                    alt={item.stars}
                    className="thinks__item-stars"
                  />
                  <p className="thinks__item-name">{item.name}</p>
                  <span className="thinks__item-profession">
                    {item.profession}
                  </span>
                </div>
              </div>
              // </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Thinks;
