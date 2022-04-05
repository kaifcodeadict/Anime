import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Rightbar.css";
import Submovie from "./Submovie";

const Sidebar = ({ Animes }) => {
  const [popular, setPopular] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //set  popular movies according to rt_score  and genrating random favorites movies from the given animes
    var shuffled1 = Animes.filter((val, i) => val.rt_score > 80);
    var selected1 = shuffled1.slice(0, 3);
    setPopular(selected1);
    var shuffled2 = Animes.sort(function () {
      return 0.5 - Math.random();
    });
    var selected2 = shuffled2.slice(0, 3);
    setFavorites(selected2);
  }, [Animes]);

  return (
    <div className="Rightbar">
      <div className="sidebar__search">
        <input type="search" placeholder="Search" required />
        <i className="bx bx-search"></i>
      </div>
      <div className="Rightbar__menu">
        <Submovie Movies={popular} Title={"Popular Movies"} />
        <Submovie Movies={favorites} Title={"Favorites"} />
      </div>
    </div>
  );
};

export default Sidebar;
