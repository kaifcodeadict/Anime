import React from "react";
import CategoriesEle from "../Home/Categories";
import "./Header.css";

const Categories = [
  {
    display: "TV Series",
    to: "/series",
    section: "series",
  },
  {
    display: "Animes",
    to: "/animes",
    section: "animes",
  },
  {
    display: "Movies",
    to: "/movies",
    section: "movies",
  },
];

function Header() {
  return (
    <>
      <div className="Header">
        <div className="headerLeft">
          <div className="anime__logo">
            <i className="bx bx-camera-movie"></i> <h5>Zetflix.</h5>
          </div>
          <CategoriesEle Categories={Categories} />
        </div>
        <div className="headerRight">
          <div className="sidebar__search" style={{ top: "28%" }}>
            <input type="search" placeholder="Search" required />
            <i className="bx bx-search"></i>
          </div>
          <div className="bellIcon">
            <i className="bx bx-bell" />
          </div>
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
