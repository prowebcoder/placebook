import React from "react";

function PlaceItem(props) {
  return (
    <div>
      <div>{props.id}</div>
      <div>
        {props.title}: {props.creator}
      </div>
      <div>
        <img src={props.image}></img>
      </div>
      <div>{props.description}</div>
    </div>
  );
}

export default PlaceItem;
