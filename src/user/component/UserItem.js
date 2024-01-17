import React from "react";

function UserItem(props) {
  return (
    <li>
      <div className="user-item">
        <div className="user-item-content">
          <div className="user-item-image">
            <img src="{props.image}" alt="{props.name}" />
          </div>
          <div className="user-item-name">{props.name}</div>
          <div className="user-item-placecount">{props.placecount}</div>
        </div>
      </div>
    </li>
  );
}

export default UserItem;
