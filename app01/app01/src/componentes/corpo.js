import React from "react";

import Dados from "./Dados.js";

export default function Corpo() {
  const chanel = "CFB CURSOS";
  const ytb = "Playlist react CFB";
  const crs = "Curso React";
  return (
    <section>
      <h1>Hello nice to meet you</h1>
      <p>Im learning english and react framework togheter :)</p>
      <Dados canal={chanel} youtube={ytb} curso={crs}></Dados>
    </section>
  );
}
