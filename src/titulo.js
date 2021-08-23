import React from "react";
import "./titulo.css";
const Titulo = (props) => {
  return (
    <h1 className="titulo">Consumindo Uma API de clima: {props.cidade}</h1>
  );
};

export { Titulo };
