import { useEffect, useState } from "react";
import "./Rightbar.css";
import Submovie from "./Submovie";
import { Skeleton } from "@mui/material";

const Sidebar = ({ Animes, isLoading = false }) => {
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
      {isLoading ? (
        <Skeleton
          variant="circular"
          animation="wave"
          height={40}
          width={40}
          className={"sidebar__search"}
          style={{ border: "none" }}
        />
      ) : (
        <div className="sidebar__search">
          <input type="search" placeholder="Search" required />
          <i className="bx bx-search"></i>
        </div>
      )}
      <div className="Rightbar__menu">
        <Submovie
          Movies={popular}
          Title={"Popular Movies"}
          isLoading={isLoading}
        />
        <Submovie
          Movies={favorites}
          Title={"Favorites"}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Sidebar;
