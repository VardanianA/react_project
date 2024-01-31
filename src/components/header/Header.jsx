import React, { useState } from "react";
import classNames from "classnames";
import logo from '../../assets/icons/logo.svg';
import './Header.scss';
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { id: '1', url: 'home', menuName: 'Գլխավոր' },
  { id: '2', url: 'about', menuName: 'Իմ մասին' },
  { id: '3', url: 'questions', menuName: 'Հաճախ տրվող հարցեր' },
  { id: '4', url: 'services', menuName: 'Ծառայություններ' },
  { id: '5', url: 'contact', menuName: 'Կապ Ինձ Հետ' }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((currentState) => !currentState);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <img className="header__logo" src={logo} alt="logo"/>
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
        <ul className={classNames({'header__menu-open' : menuOpen, 'header__menu-close' : !menuOpen})}>
          {MENU_ITEMS.map(item =>{
            console.log(item);
            return(
              <li className="header__menu-item" key={item.id}>
                <Link href={`/${item.url}`} className="header__menu-link" activeClassName="active">
                  {item.menuName}
                </Link>
              </li>
            )
          })}
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
