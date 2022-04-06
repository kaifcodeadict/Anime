import React, { useEffect, useState } from "react";
import { fetchAnime } from "./../../Api/axios";
import Banner from "./Banner";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Rows from "./Rows";
import CategoriesEle from "./Categories";

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
  const [animes, setAnimes] = useState([]);
  var stylingObject = {
    HomeCatgre: {
      marginLeft: "var(--sidebar-width)",
      padding: "2rem 1rem 0rem 1.5rem",
    },
  };
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

  return (
    <>
      <Leftbar />
      <Rightbar Animes={animes} />
      <CategoriesEle Categories={Categories} Style={stylingObject.HomeCatgre} />

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
