import React from "react";
import "../cards/Cards.css";
function Card(props) {
  return (
    <div className="card">
      <div className="card_body">
        <img className="card_image" src={props.img} alt="Hello" />
        <h2 className="card_title"> {props.title} </h2>
        <p className="card_description"> {props.description} </p>
      </div>
    </div>
  );
}

export default Card;
