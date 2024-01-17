import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <div className="navbar">
      <Link to="/user">User</Link>
      <Link to="/place">Place</Link>
    </div>
  );
}

export default Nav;
