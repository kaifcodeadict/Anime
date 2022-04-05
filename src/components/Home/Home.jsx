import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchAnime } from "./../../Api/axios";
import "./Home.css";
import Banner from "./Banner";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Rows from "./Rows";

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

function Home() {
  const [activeCat, setActiveCat] = useState(0);
  const [animes, setAnimes] = useState([]);
  const location = useLocation();
  useEffect(() => {
    try {
      async function fetchMyAnime() {
        const { data } = await fetchAnime();

        setAnimes(data);
      }
      fetchMyAnime();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeCat = Categories.findIndex((item) => item.section === curPath);
    setActiveCat(curPath.length === 0 || activeCat < 0 ? 1 : activeCat);
  }, [location]);

  return (
    <>
      <Leftbar />
      <Rightbar Animes={animes} />

      <div className="categories">
        {Categories.map((item, index) => (
          <Link to={item.to} key={index}>
            <span className={activeCat === index ? "activeCat" : ""}>
              {item.display}
            </span>
          </Link>
        ))}
      </div>

      <Banner Animes={animes} />
      <Rows
        Anime={animes.filter((val, i) => val.release_date < 2000)}
        Title={"Anime from 90s"}
      />

      <Rows
        Anime={animes.filter(
          (val, i) => val.release_date > 2000 && val.release_date < 2010
        )}
        Title={"Anime from 20s"}
      />

      <Rows
        Anime={animes.filter((val, i) => val.release_date > 2010)}
        Title={"Anime from 2010s"}
      />

      <Rows
        Anime={animes.filter((val, i) => val.producer === "Toshio Suzuki")}
        Title={"Anime  by Studio Ghibli"}
      />
      <Rows
        Anime={animes.filter((val, i) => val.director === "Hayao Miyazaki")}
        Title={"Anime Direct by Hayao Miyazaki"}
      />

      <Rows
        Anime={animes.filter((val, i) => val.director === "Isao Takahata")}
        Title={"Anime Direct by Isao Takahata"}
      />
    </>
  );
}

export default Home;
