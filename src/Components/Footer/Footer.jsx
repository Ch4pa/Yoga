import React from "react";
import "./Footer.css";
import logo from "../../../public/logo.png";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerBox">
      <img src={logo} className="imgFooter" />
      <p className="texto"> © 2023 Yogapalermo. Todos los derechos reservados. </p>
      <div className="iconos">
        <Link>
          <BsWhatsapp className="logos"/>
        </Link>
        <Link
          to="https://www.instagram.com/belu_brizzi_yoga/ "
          target="_Blank">
          <BsInstagram className="logos" />
        </Link>
        <Link>
        <BsFacebook className="logos"/>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
