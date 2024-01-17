import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <div className="navbar">
      <Link to="/users">All Users</Link>
      <Link to="/places">Places</Link>
      <Link to="/:user/places">User Places</Link>
    </div>
  );
}

export default Nav;
