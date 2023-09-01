import React from "react";
import "./SobreMi.css";
function SobreMi() {
  return (
    <div className="cajaMain">
      <div className="caja">
        <p className="titulo">Inicio</p>
        <h1 className="contenido">
          Sumérgete en el mundo del yoga con nuestras emocionantes clases.
          Descubre cómo el yoga puede transformar tu vida, liberar tu estrés y
          llevarte a nuevos niveles de relajación y bienestar. ¡Prepárate para
          una experiencia revitalizante e inolvidable!
        </h1>
      </div>
      <div className="boxCard">
        <div className="card1"></div>
        <div className="card2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          omnis tenetur temporibus, iusto nostrum pariatur deserunt earum
          necessitatibus repudiandae ipsum voluptas! Rerum, iusto ea molestiae
          fugiat provident praesentium voluptates dolore. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Ullam cumque temporibus nobis non,
          obcaecati, consequatur asperiores dignissimos sapiente molestias vero
          distinctio ex? Aspernatur quisquam mollitia magnam eius illo
          laboriosam laborum?
        </div>
        <div className="card2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ex
          veniam deserunt quibusdam nobis! Expedita corrupti architecto ex
          voluptatibus excepturi delectus natus voluptas. Sed quod in, soluta
          neque quas excepturi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias repellat dolor porro soluta dolorum illum
          debitis eum! Expedita maiores temporibus qui consequatur eos officia
          nobis voluptatibus, quidem dolor ducimus magnam.
        </div>
        <div className="card1"></div>
      </div>
      <div className="boxPreguntas">
        <h2 className="tituloPregunta">Preguntas Frecuentes</h2>
        <div className="boxPreguntasTexto">
          <div className="preguntas">
            <h2 className="tituloTexto">¿Qué necesito traer a la clase?</h2>
            <p className="textoPregunta">
              Solo necesitas traer ropa cómoda, tu propia Mat de Yoga y una
              botella de agua.
            </p>
          </div>
          <div className="preguntas">
            <h2 className="tituloTexto">
              ¿Para quiénes están diseñadas las clases?
            </h2>
            <p className="textoPregunta">
              Nuestras clases están diseñadas para todos los niveles. Ofrecemos
              orientación y modificaciones para adaptarnos a tu nivel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
