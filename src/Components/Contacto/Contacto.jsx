import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <div className="box" id="contacto">
      <div className="textoContacto">
        ¡Únete a nosotros y comencemos juntos esta maravillosa aventura yogui!
        <br />
        <br />
        Namaste, El Equipo de Yoga Palermo.
      </div>
      <div className="boxMail">
        <input type="text" className="inputContacto" placeholder="name@email.com"/>
        <button className="buttonContacto">Subscribirse</button>
      </div>
    </div>
  );
}

export default Contacto;
