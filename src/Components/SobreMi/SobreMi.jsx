import React from "react";
import "./SobreMi.css";
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
    </div>
  );
}

export default SobreMi;
