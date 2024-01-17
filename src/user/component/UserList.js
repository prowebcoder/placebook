import React from "react";
import Users from "./Users";
import UserItem from "./UserItem";
function UserList(props) {
  if (props.items.length === 0) {
    return <div>No Users Were Found</div>;
  }
  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placecount={user.placecount}
          />
        );
      })}
    </ul>
  );
}

export default UserList;
