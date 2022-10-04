import "./filtros.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Filtros = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(term);
  };

  return (
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Rick, Morty, Beth, Alien, ...etc"
          name="nome"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Filtros;
