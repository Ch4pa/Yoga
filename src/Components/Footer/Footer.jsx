import React from "react";
import logo from "../../../public/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerBox">
      <div className="logoImg">
        <a href="#">
          <img src={logo} className="imgLogo" alt="logo" title="Logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
