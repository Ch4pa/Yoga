import React from "react";
import logo from "../../../public/logo.png";
import "./Home.css";
import SobreMi from "../SobreMi/SobreMi";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div  id="inicio">
      <header className="body">
        <section className="cajaNav">
          <div className="logoImg">
            <a href="#">
              <img src={logo} className="imgLogo" alt="logo" title="Logo" />
            </a>
          </div>
          <nav className="navegacion">
            <ul className="box_navegacion">
              <li className="nav_Items underline-hover">
                <a href="#inicio" className="navItem">
                  Inicio
                </a>
              </li>
              <li className="nav_Items underline-hover">
                <a href="#sobre_mi" className="navItem">
                  Sobre Mi
                </a>
              </li>
              <li className="nav_Items underline-hover">
                <a href="#contacto" className="navItem">
                  Contacto
                </a>
              </li>
            </ul>
            <li className="nav_Items clasesOnline boxClasesOnline">
              <a to="#" className="navItem ">
                Clases Online
              </a>
            </li>
          </nav>
        </section>
        <section className="main">
          <div className="cajaHome"></div>
          <SobreMi />
          <Contacto />
          <Footer />
        </section>
      </header>
    </div>
  );
}

export default Home;
