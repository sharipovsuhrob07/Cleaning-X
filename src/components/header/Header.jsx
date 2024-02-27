import React from "react";
import HeaderStyles from "./Header.module.css";
import Logo from "../../images/logo.svg";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className={HeaderStyles.header__container}>
            <div className={HeaderStyles.header__main}>
              <a href="#">
                <img src={Logo} alt="logo" />
              </a>
              <ul className={HeaderStyles.header_nav__list}>
                <li>
                  <a className={HeaderStyles.header_nav_list__item} href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className={HeaderStyles.header_nav_list__item} href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className={HeaderStyles.header_nav_list__item} href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className={HeaderStyles.header_nav_list__item} href="#">
                    Articles
                  </a>
                </li>
                <li>
                  <a className={HeaderStyles.header_nav_list__item} href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className={HeaderStyles.header__left}>
              <a className={HeaderStyles.header__btn_cart_link} href="#">
                Cart ( 0 )
              </a>
              <a className={HeaderStyles.header__btn} href="#">
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
