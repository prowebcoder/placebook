import React from "react";
import PlaceItem from "./PlaceItem";

function PlaceList(props) {
  if (props.items.length === 0) {
    return <div>No Places Found</div>;
  }
  return (
    <div className="">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            description={place.description}
            image={place.image}
            title={place.title}
            creator={place.creator}
          ></PlaceItem>
        );
      })}
    </div>
  );
}

export default PlaceList;
