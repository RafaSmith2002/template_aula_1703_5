import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { Contador } from './components/Contador/index';

function App() {
  // const [nameButton, setNameButton] = useState(true);
  const [show, setShow] = useState(true);


  return (
    <div className="main">
      <Header 
        logo={"https://i.imgur.com/hWeSc2j.png"} 
        menu={["MeuBarraco", "EhNoiss", "Da1Salve"]}
      />
      
      {/* !nameButton eh oposto, nesse caso de false */}
      <button onClick={() => setShow(!show)}>
      
         {show? "troquis kraiii": "destroquis jegue"}
      </button>  

      {show ? <Post /> : <Contador />}      
    </div>
  );
}

export default App;


 {/* <button onClick={() => setNameButton(false)}></button>   */}
        {/* ternário */}
        {/* {nameButton === true ? "AiSim" : "XiiDeuRuim"} aqui vc pergunta se eh TRUE*/}
        {/* Abaixo sem o === true, vc so pergunta se existe! */}
        {/* {nameButton ? "AiSim" : "XiiDeuRuim"} */}

        /* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */