import React from "react";
// import homeAboutImage from "../../assets/images/home_about_image.png";
import aboutImg from "../../assets/images/home_about_img.png";
import "./About.scss";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__inner">
        {/* <div className="about__bg" />
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
        </div> */}
        <h1 className="about__heading">About Our <span className="about__blueHeading">Logistics</span> Company</h1>
        <div className="about__column">
          <img src={aboutImg} className="about__img" />
          <div className="about__row">
            <div className="about__row1">
              <h1 className="about__row1-heading">About Our Logistics Company</h1>
              <div className="about__row1-text">Welcome to <span className="about__blueText">In</span><span className="about__boldText">:Logic</span>, where precision meets reliability in the world of logistics. With a steadfast commitment to excellence, we have emerged as a leading force in the transportation and supply chain industry.</div>
            </div>

            <div className="about__underline" />

            <div className="about__row2">
              <h1 className="about__row2-heading">Our Mission</h1>
              <div className="about__row2-text">At <span className="about__blueText">In</span><span className="about__boldText">:Logic</span>, our mission is to seamlessly connect businesses to global opportunities by delivering innovative, efficient, and tailored logistics solutions. We strive to exceed expectations, creating value for our clients and fostering sustainable growth in every partnership.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
