import React from "react";
import "./Textinvitation.css";
import Modalmap from "./Modalmap";

const Textinvitation = () => {
  return (
    <div className="font-text animate__animated animate__bounceInLeft animate__slower">
      <p>
        El día 28/10 celebro mi primer cumpleaños y quiero compartirlo con vos.
        Festejaremos en el salón "Maria E" a las 18:00. Por favor, confirmá tu
        presencia.
      </p>
      <Modalmap />
      <p>TE ESPERAMOS!</p>
    </div>
  );
};

export default Textinvitation;
