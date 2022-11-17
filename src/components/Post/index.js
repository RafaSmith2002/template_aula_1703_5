import React, { useState } from "react";

export default function Post() {
const [titulo, setTitulo] = useState("titulo");  

  return (
    <div>
      <h1>Clika nu</h1>
      <span>{titulo}</span>
      <input onChange={(e) => setTitulo(e.target.value)} />
      <input />  
      <button> Butaumm </button>
    </div>
  );
}

// arrow function
// const Post = () => {};