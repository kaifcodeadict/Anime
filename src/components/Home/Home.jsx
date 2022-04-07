import React, { useEffect, useState } from "react";
import { fetchAnime } from "./../../Api/axios";
import Banner from "./Banner";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Rows from "./Rows";
import CategoriesEle from "./Categories";
import { Skeleton } from "@mui/material";

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
  const [loading, setLoading] = useState(false);
  var stylingObject = {
    HomeCatgre: {
      marginLeft: "var(--sidebar-width)",
      padding: "2rem 1rem 0rem 1.5rem",
    },
  };

  useEffect(() => {
    try {
      async function fetchMyAnime() {
        setLoading(true);
        const { data } = await fetchAnime();
        setAnimes(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      fetchMyAnime();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Leftbar />
      <Rightbar Animes={animes} isLoading={loading} />
      {!loading && (
        <CategoriesEle
          Categories={Categories}
          Style={stylingObject.HomeCatgre}
        />
      )}
      {loading ? (
        <Skeleton
          variant="rectangle"
          animation="wave"
          height={400}
          className={"banner"}
        />
      ) : (
        <Banner Animes={animes} />
      )}

      <Rows
        Anime={animes.filter((val, i) => val.release_date < 2000)}
        Title={"Anime from 90s"}
        isLoading={loading}
      />

      <Rows
        Anime={animes.filter(
          (val, i) => val.release_date > 2000 && val.release_date < 2010
        )}
        Title={"Anime from 20s"}
        isLoading={loading}
      />

      <Rows
        Anime={animes.filter((val, i) => val.release_date > 2010)}
        Title={"Anime from 2010s"}
        isLoading={loading}
      />

      <Rows
        Anime={animes.filter((val, i) => val.producer === "Toshio Suzuki")}
        Title={"Anime  by Studio Ghibli"}
        isLoading={loading}
      />
      <Rows
        Anime={animes.filter((val, i) => val.director === "Hayao Miyazaki")}
        Title={"Anime Direct by Hayao Miyazaki"}
        isLoading={loading}
      />

      <Rows
        Anime={animes.filter((val, i) => val.director === "Isao Takahata")}
        Title={"Anime Direct by Isao Takahata"}
        isLoading={loading}
      />
    </>
  );
}

export default Home;
