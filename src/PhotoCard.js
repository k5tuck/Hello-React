import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="card-frame">
      <h4>{props.title}</h4>
      <img src={props.url} />
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
