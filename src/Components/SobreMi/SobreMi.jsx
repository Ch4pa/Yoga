import React from "react";
import "./SobreMi.css";
import "../Home/Home.css";
import CardIntegral from "../../../public/card2.jpg";
import CardFlow from "../../../public/card2.jpg";
import CardPower from "../../../public/card2.jpg";
function SobreMi() {
  return (
    <div className="cajaMain">
      <div className="boxNaranja">
        <p className="textoBoxNaranja">
          Clases De Yoga Personalizadas de YOGA Flow, Yoga Power y Yoga
          Deportivo.
        </p>
      </div>

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
      <section className="main">
        <div className="mainHome">
          <h1 className="tituloHome">Yoga</h1>
          <h2 className=" subtituloHome">& Meditacion</h2>
          <p className="textoImg">
            El objetivo de practicar yoga es cultivar la armonía entre la mente,
            el cuerpo y el espíritu, promoviendo la salud, la relajación y el
            bienestar físico y mental.
          </p>
        </div>
        <div className="cajaHome"></div>
      </section>
    </div>
  );
}

export default SobreMi;
