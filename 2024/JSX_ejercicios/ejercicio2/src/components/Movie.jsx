import React from "react";

function Title({ title }) {
  return <h1>{title}</h1>;
}
function Subtitle({ subtitle }) {
  return <h2>{subtitle}</h2>;
}
function Description({ name }) {
  return <p>Mi nombre es {name}.</p>;
}

export default Movie;
