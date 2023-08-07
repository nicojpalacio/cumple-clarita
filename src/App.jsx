import "./App.css";

import Textinvitation from "./components/Textinvitation";
import Card from "./components/card";
import imagemanuelita from "./img/b6b890dd9efba7232ece72d8b53b56c537133b66.gif";
const App = () => {
  
  return (
    <>
      <div className="app container">
        <p className="font-tittle text-center">Cumpleaños de Clarita</p>
        <Card className="card" />
        <Textinvitation />
        <div className=" animate__animated animate__bounceInRight animate__slower">
          <img className="" src={imagemanuelita} alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
