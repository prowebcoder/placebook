import React from "react";
import { NavLink } from "react-router-dom";
function NavLinks() {
  return (
    <ul className="navbar nav-links">
      <li>
        <NavLink to="/users">All Users</NavLink>
      </li>
      <li>
        <NavLink to="/places">Places</NavLink>
      </li>
      <li>
        <NavLink to="/:user/places">User Places</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
