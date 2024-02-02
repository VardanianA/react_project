import React from "react";
import homeAboutImage from "../../assets/images/home_about_image.png";
import "./About.scss";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__bg" />
        <div className="about__left">
          <div className="about__left-border" />
          <div className="about__left-info">
            <div className="about__left-name_info">
              <h1 className="about__left-name_heading">իմ մասին</h1>
              <span className="about__left-name_text">Արմեն Կարապետյան</span>
            </div>
            <div className="about__left-text-1">
              Ունենալով կրթության ամուր հիմք և մասնագիտական բազում փորձ՝ կարող
              եմ վստահ գրառում կատարել, որ կարող եմ օգտակար լինել Ձեզ տվյալ
              բնագավառում:
            </div>
            <div className="about__left-text-2">
              Ունենալով [Դիպլոմ] [Ուսումնառության ոլորտում] [Համալսարան/Քոլեջ],
              ձեռք եմ բերել համապատասխան պատկերացում տվյալ բնագավառից:Տարիների
              ընթացքում կատարելագործել եմ իմ հմտությունները տարբեր
              ընկերություններում, զբաղեցնելով տվյալ ոլորտի հաստիքը, այդ թվում՝
              [Ընկերության անուն], որտեղ ես [կատարող պարտականությունները] օգնել
              են ինձ համալրել համապատասխան հմտությունները։Խնդիրների լուծմանն
              ուղղված ակտիվ մոտեցմամբ և նվիրվածությամբ ունեմ պահանջարկ տվյալ
              ոլորտում, որպես հմտացած մասնագետ։
            </div>
          </div>
        </div>
        <div className="about__right-image">
          <img
            src={homeAboutImage}
            alt="homeAboutImage"
            className="about__right-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
