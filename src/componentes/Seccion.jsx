import React, { useState } from 'react';
import { LoremIpsum } from "react-lorem-ipsum";  

function Seccion({ titulo, descripcion, imgSrc, textoAdicional, imgSrcAdicional }) {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje("¡Gracias por tu comentario!");
  };

  return (
    <div className="seccion">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <img src={imgSrc} alt={titulo} className="img-adicional" /> 
      <p className="text-justified">{textoAdicional}</p>

      {imgSrcAdicional && <img src={imgSrcAdicional} alt="Imagen adicional" className="img-adicional" />}

      <div className="text-justified">
        <LoremIpsum p={3} avgSentencesPerParagraph={6} avgWordsPerSentence={12} />
      </div>


      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Comentale algo..." required />
        <button type="submit">Enviar</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Seccion;
