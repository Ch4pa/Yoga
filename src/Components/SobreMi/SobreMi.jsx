import React from "react";
import "./SobreMi.css";
function SobreMi() {
  return (
    <div>
      <div className="caja">
        <p className="titulo">Bienvenidos</p>
        <h1 className="contenido">
          Sumérgete en el mundo del yoga con nuestras emocionantes clases.
          Descubre cómo el yoga puede transformar tu vida, liberar tu estrés y
          llevarte a nuevos niveles de relajación y bienestar. ¡Prepárate para
          una experiencia revitalizante e inolvidable!
        </h1>
      </div>
      <div className="boxCard">
        <div className="card1">
          <h1 className="Titulo">Yoga Artistico</h1>
          <div className="fotoCard"></div>
        </div>
        <div className="card2"></div>
        <div className="card2"></div>
        <div className="card1"></div>
      </div>
      <div className="boxPreguntas">
        <h2 className="tituloPregunta">Preguntas Frecuentes</h2>
        <div className="boxPreguntasTexto">
          <div className="preguntas">
            <h2 className="tituloTexto">¿Qué necesito traer a la clase?</h2>
            <p className="textoPregunta">
              Solo necesitas traer ropa cómoda, tu propia esterilla y bloque si
              lo prefieres, y una botella de agua. También ofrecemos esterillas
              para alquilar si lo necesitas.
            </p>
          </div>
          <div className="preguntas">
            <h2 className="tituloTexto">¿Para quiénes están diseñadas las clases?</h2>
            <p className="textoPregunta">
              Nuestras clases están diseñadas para todos los niveles. Ofrecemos orientación y
              modificaciones para adaptarnos a tu nivel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
