import React from "react";
import item1Img from "../../assets/images/services_box4.png";
import item2Img from "../../assets/images/services_box2.png";
import item3Img from "../../assets/images/services_box3.png";
import item4Img from "../../assets/images/services_box4.png";
import "./Services.scss";

const BOXES = [
  {
    id: 1,
    img: item1Img,
    heading: "Ծառայության անվանումը",
    text: "Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է։ ",
  },
  {
    id: 2,
    img: item2Img,
    heading: "Ծառայության անվանումը",
    text: "Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է։ ",
  },
  {
    id: 3,
    img: item3Img,
    heading: "Ծառայության անվանումը",
    text: "Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է։ ",
  },
  {
    id: 4,
    img: item4Img,
    heading: "Ծառայության անվանումը",
    text: "Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է։ ",
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services__inner">
        <div className="services__items">
          {BOXES.map((item) => {
            return (
              <div className="services__item" key={item.id}>
                <div className="services__item-image">
                  <img
                    src={item.img}
                    alt={item.img}
                    className="services__item-img"
                  />
                </div>
                <div className="services__item-title">
                  <div className="services__item-heading">{item.heading}</div>
                  <div className="services__item-text">{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
