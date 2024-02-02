import classNames from "classnames";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import "./Header.scss";

const MENU_ITEMS = [
  { id: "1", url: "", menuName: "Գլխավոր" },
  { id: "2", url: "about", menuName: "Իմ մասին" },
  { id: "3", url: "questions", menuName: "Հաճախ տրվող հարցեր" },
  { id: "4", url: "services", menuName: "Ծառայություններ" },
  { id: "5", url: "contact", menuName: "Կապ Ինձ Հետ" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((currentState) => !currentState);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <img className="header__logo" src={logo} alt="logo" onClick={() => navigate('/')}/>
        <nav className="header__menu">
          <div className="header__menu-toggle">
            <div className="hamburger" onClick={handleClick}>
              <div
                className={classNames({
                  "hamburger__menu line1": menuOpen,
                  hamburger__menu: !menuOpen,
                })}
              ></div>
              <div
                className={classNames({
                  "hamburger__menu line2": menuOpen,
                  hamburger__menu: !menuOpen,
                })}
              ></div>
              <div
                className={classNames({
                  "hamburger__menu line3": menuOpen,
                  hamburger__menu: !menuOpen,
                })}
              ></div>
            </div>
          </div>
          <ul
            className={classNames({
              "header__menu-open": menuOpen,
              "header__menu-close": !menuOpen,
            })}
          >
            {MENU_ITEMS.map((item) => {
              return (
                <li className="header__menu-item" key={item.id}>
                  <Link
                    to={`/${item.url}`}
                    className={classNames(
                      location.pathname !== `/${item.url}`
                        ? "header__menu-link"
                        : "header__menu-link--active"
                    )}
                  >
                    {item.menuName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="header__btn">ՈւՂԱՐԿԵԼ ՀԱՅՏ</button>
      </div>
    </header>
  );
};

export default Header;
