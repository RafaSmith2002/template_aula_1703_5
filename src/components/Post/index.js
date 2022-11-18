/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { WrapperPhoto } from './style';

export default function Post() {
const [titulo, setTitulo] = useState("titulo");  
const [photo, setPhoto] = useState("");
const [seeData, setSeeData] = useState(false);

  return (
    <div>

      {seeData && ( 
        <WrapperPhoto>
          <span>{titulo}</span>
          <img src={photo} alt="imagem_upload" />
        </WrapperPhoto>     
      )}

      <input onChange={(e) => setTitulo(e.target.value)} />
      <input onChange={(e) => setPhoto(e.target.value)} />

      <button onClick={() => setSeeData(!seeData)}>
        {seeData ? "DELETE" : "ENVIAR"}
      </button>
    </div>
  );
}