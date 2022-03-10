import React from "react";
import './card.styles.css'
export const Card = (props) => {
  return (
    <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`} />
      <h1> {props.user.name} </h1>
      <small> {props.user.email} </small>
    </div>
  );
};
