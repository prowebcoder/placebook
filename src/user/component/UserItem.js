import React from "react";
import "./UserItem.css";
function UserItem(props) {
  return (
    <li className="user-item">
      <div className="user-item-content">
        <div className="user-item-image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <div className="user-item-name">Name: {props.name}</div>
          <div className="user-item-placecount">Place: {props.placecount}</div>
        </div>
      </div>
    </li>
  );
}

export default UserItem;
