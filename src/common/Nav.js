import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Avatar from "./Avatar";
function Nav() {
  const image =
    "https://prowebcoder.com/cdn/shop/files/logo.png?v=1619583060&width=500";
  return (
    <header className="header">
      <div className="logo">
        <Avatar image={image} className="logo"></Avatar>
      </div>
      <div className="navbar">
        <Link to="/users">All Users</Link>
        <Link to="/places">Places</Link>
        <Link to="/:user/places">User Places</Link>
      </div>
    </header>
  );
}

export default Nav;
