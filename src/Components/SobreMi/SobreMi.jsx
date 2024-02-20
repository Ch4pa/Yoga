import React from "react";
import "./SobreMi.css";
import "../Home/Home.css";
import CardIntegral from "../../../public/card2.jpg";
import CardFlow from "../../../public/card2.jpg";
import CardPower from "../../../public/card2.jpg";
function SobreMi() {
  return (
    <div className="cajaMain">
      <section className="boxWaves">
        <div className="waves1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ff6201"
              fill-opacity="1"
              d="M0,192L60,192C120,192,240,192,360,208C480,224,600,256,720,234.7C840,213,960,139,1080,128C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="boxNaranja">
          <p className="textoBoxNaranja">
            Clases De Yoga Personalizadas de YOGA Flow, Yoga Power y Yoga
            Deportivo.
          </p>
        </div>
        <div className="waves2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="waves2"
          >
            <path
              fill="#ff6201"
              fill-opacity="1"
              d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,101.3C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>
      <div className="clasesYoga">
        <h1>
          Clases de <span>Yoga</span>
        </h1>
        <p>Estos son los estilos de Yoga que brindamos en Yoga Palermo</p>

        <div className="cards">
          <div className="cardFlow">
            <img src={CardFlow} alt="" className="imgFlow" />
            <p>
              Yoga <span>Flow</span>
            </p>
          </div>
          <div className="cardPower">
            <img src={CardIntegral} alt="" className="imgPower" />
            <p>
              Yoga <span>Power</span>
            </p>
          </div>
          <div className="cardIntegral">
            <img src={CardPower} alt="" className="imgIntegral" />
            <p>
              Yoga <span>Integral</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
