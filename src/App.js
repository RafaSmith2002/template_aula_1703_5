/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Post from "./components/Post";
import { ButtonSection, WrapperButton } from "./style";

function App() {
  const [show, setShow] = useState("login");

  return (
    <div className="main">

      <Header
      
        logo={"https://i.imgur.com/hWeSc2j.png"} 
        menu={["MeuBarraco", "EhNoiss", "Da1Salve"]}
      />
      {show === "post" && ( 
      <img 
        style={{ width: "100px" }}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JkVvKTtZs3yuiHCniu97eAHaHa%26pid%3DApi&f=1&ipt=13571790f4e4af7a3c325413017de8f63c8f13641beabe0f9b2d38fa555df0b3&ipo=images"
        alt=""      
      />
      )}
      <WrapperButton>
        <ButtonSection clicado={show === "login"} 
          onClick={() => setShow("login")}>

          LOGIN
        </ButtonSection>      
      
        <ButtonSection clicado={show === "post"} 
          onClick={() => setShow("post")}>
            
          POST
        </ButtonSection>
      </WrapperButton>

      {show === "post" ? <Post /> : <Login />}

    </div>
  );
}

export default App;