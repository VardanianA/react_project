import React from "react";
import homeLogo from "../../assets/icons/home_logo.svg";
import homeImage from "../../assets/images/home.png";
import homeAboutImage from "../../assets/images/home_about_image.png";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__inner">
        <img src={homeImage} alt="homeImage" className="home__image" />
        <img src={homeLogo} alt="homeLogo" className="home__logo" />
        <div className="home__about">
          <div className="home__about-left">
            <div className="home__about-border" />
            <div className="home__about-info">
              <h1>իմ մասին</h1>
              <p>Արմեն Կարապետյան</p>
              <p>
                Ունենալով կրթության ամուր հիմք և մասնագիտական բազում փորձ՝ կարող
                եմ վստահ գրառում կատարել, որ կարող եմ օգտակար լինել Ձեզ տվյալ
                բնագավառում:
              </p>
              <p>
                Ունենալով [Դիպլոմ] [Ուսումնառության ոլորտում]
                [Համալսարան/Քոլեջ], ձեռք եմ բերել համապատասխան պատկերացում տվյալ
                բնագավառից:Տարիների ընթացքում կատարելագործել եմ իմ
                հմտությունները տարբեր ընկերություններում, զբաղեցնելով տվյալ
                ոլորտի հաստիքը, այդ թվում՝ [Ընկերության անուն], որտեղ ես
                [կատարող պարտականությունները] օգնել են ինձ համալրել համապատասխան
                հմտությունները։Խնդիրների լուծմանն ուղղված ակտիվ մոտեցմամբ և
                նվիրվածությամբ ունեմ պահանջարկ տվյալ ոլորտում, որպես հմտացած
                մասնագետ։
              </p>
            </div>
          </div>
          <div className="home__about-right">
            <div className="home__about-image">
              <img src={homeAboutImage} alt="homeAboutImage" />
            </div>
            <div className="home__about-bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
