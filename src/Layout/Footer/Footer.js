import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          <p className="footer__number">+38 (050) 237-76-63</p>
          <p className="footer__number">hello@google.com</p>
          <div className="footer__icon"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
