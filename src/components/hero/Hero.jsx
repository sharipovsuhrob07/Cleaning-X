import React, { Component } from "react";
import "./Hero.scss";
import HeroContact from "../../images/hero_contact.svg";
import HeroImg from "../../images/hero_img.svg";

class Hero extends Component {
  render() {
    return (
      <>
        <div className="hero">
          <div className="container">
            <div className="hero__main">
              <div className="hero__content">
                <h1 className="hero__content_title">
                  Quality cleaning for your home
                </h1>
                <p className="hero__content_text">
                  Condimentum mauris sit cursus amet id non neque pharetra nulla
                  ornare sed facilisis senectus dapibus nibh ultrices eget
                  suscipit aliquet et nulla magna lacus penatibus.
                </p>
                <div className="hero__content_contact">
                  <a className="hero__content_contact_btn" href="#">
                    Get a free quote
                  </a>
                  <img
                    className="hero__content_contact_logo"
                    src={HeroContact}
                    alt="logo"
                  />
                  <div>
                    <p className="hero__content_contact_call">Call us now</p>
                    <strong className="hero__content_contact_call_number">
                      (414) 567 - 2109
                    </strong>
                  </div>
                </div>
              </div>
              <img src={HeroImg} alt="img" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
