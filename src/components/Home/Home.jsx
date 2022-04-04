import React, { useEffect, useState } from "react";
import { fetchAnime } from "./../../Api/axios";
import Banner from "./Banner";
import Sidebar from "./Leftbar";
import Rows from "./Rows";
function Home() {
  const [animes, setAnimes] = useState([]);
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
    animes.forEach((ani) => {
      console.log(ani.rt_score);
    });
  }, []);

  return (
    <>
      {/* <Sidebar/> */}
      <Banner Animes={animes}/>
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
