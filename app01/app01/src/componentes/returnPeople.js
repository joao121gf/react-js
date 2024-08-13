import React from "react";
import Pessoas from "./Pessoas.js";

export default function ReturnPeople() {
    const pessoa1 = 'PEDROO'
    return(
        <section>
            <Pessoas p1={pessoa1}></Pessoas>
        </section>
    )
}