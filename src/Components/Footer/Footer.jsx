import React from "react";
import "./Footer.css";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerBox">
      <div className="logoImg">
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
      <div>
        <p>@2023 Yogapalermo. Todos los derechos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
