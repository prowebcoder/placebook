import React from "react";
import UserPlaceList from "../pages/UserPlaceList";
import { DUMMY_PLACES } from "../component/Places";
function UserPlaces() {
  return (
    <>
      <UserPlaceList items={DUMMY_PLACES} />
    </>
  );
}

export default UserPlaces;
