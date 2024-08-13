import React from "react";
import Anuncio from "./imgs/anuncio.png";

export default function Header() {
  return (
    <header>
        <img src={Anuncio} alt="Anuncio" />
        <h1>Web Stones Criação de sites</h1>
    </header>
  )
}
