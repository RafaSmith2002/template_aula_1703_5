import React from "react";
import { WrapperLogin } from "./style";

export default function Login() {  
  return ( 
    <WrapperLogin>
      <input type={"email"} placeholder={"e-mail"} />
      <input type={"password"} placeholder={"senha"} />

      <button>ENTRAR</button> 
    </WrapperLogin>
  );
}