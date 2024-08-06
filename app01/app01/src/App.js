import React from "react";
import Eu from "./componentes/imgs/eu.jpeg";
import Anuncio from "./componentes/imgs/anuncio.png";

export default function App() {
  const agency = "Web Stones";
  const client = "Macedo Treinamentos";
  const data = () => {
    return "03/08/2024";
  };
  return (
    <>
      <h1>{"Bem vindo à " + agency}</h1>
      <p>{"Muito prazer " + client}</p>
      <p>{"Hoje é dia : " + data()}</p>
      <img src={Eu} alt="Eu" />
      <img src={Anuncio} alt="Anuncio " />
    </>
  );
}


