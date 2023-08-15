import React from "react";
import "./Footer.css";
import logo from "../../../public/logo.png";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerBox">
      <img src={logo} className="imgFooter" />
      <p className="texto"> © 2023 Yogapalermo. Todos los derechos reservados. </p>
      <div className="iconos">
        <Link>
          <BsWhatsapp />
        </Link>
        <Link
          to="https://www.instagram.com/belu_brizzi_yoga/ "
          target="_Blank"
          className="navItem"
        >
          <BiLogoInstagram className="logoInstagram" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
