import React from "react";
import "./Textinvitation.css";
import Modalmap from "./Modalmap";

const Textinvitation = () => {
  return (
    <div className="font-text animate__animated animate__bounceInLeft animate__slower">
    <p >
      El dia 28/10 celebro mi primer cumpleaños y queria informarte que estas
      invitado al mismo. Solo te pido que me confirmes tu asistencia.
      Te esperamos en el salon "Maria E" a las 18:00
    </p>
    <Modalmap/>
    <p>TE ESPERAMOS!</p>
    </div>
  );
};

export default Textinvitation;
