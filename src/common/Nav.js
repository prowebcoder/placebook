import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Avatar from "./Avatar";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
function Nav() {
  const image =
    "https://prowebcoder.com/cdn/shop/files/logo.png?v=1619583060&width=500";
  return (
    <>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks></NavLinks>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="logo main-navigation__title">
          <Link to="/">
            <Avatar image={image} className="logo"></Avatar>
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </>
  );
}

export default Nav;
