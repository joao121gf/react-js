import React from "react";
import Age from "./Age";

export default function Hello(props) {
  return (
    <section>
      <p>Hello, welcome {props.nome}</p>
      <p>
        I see in the databse that you have {props.idade}
        <Age idade="24 "></Age>
        years old
      </p>
    </section>
  );
}
