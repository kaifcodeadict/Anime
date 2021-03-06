import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimebyId, fetchAnimeChar } from "./../../Api/axios";
import Header from "./Header";
import "./Anime.css";
// Animation of this page
import AnimeSkel from "../Animation/AnimeSkel";

function Anime() {
  const params = useParams();
  const [anime, setAnime] = useState("");
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function fetchMyAnime() {
        // geting anime by id
        const { data } = await fetchAnimebyId(params.animeId);

        // saveing the data to state and change the runningtime from minutes to hours and minutes
        setAnime({
          ...data,
          running_time: `${Math.floor(data.running_time / 60)}hr ${
            data.running_time % 60
          }min`,
        });

        // geting characters in anime by
        let tempt = [];
        for (const url of data.people) {
          const { data } = await fetchAnimeChar(url);
          // sometime the tyeof(data) is  array sometime it's a object so to resolve this :-
          if (Array.isArray(data)) {
            setChar(data);
          } else {
            tempt.push(data);
          }
        }
        tempt.length > 0 && setChar(tempt);
      }

      fetchMyAnime();
    } catch (error) {
      console.log(error);
    }
  }, [anime]);

  useEffect(() => {
    char.length > 0 && setLoading(false);
  }, [char]);

  return (
    <>
      {loading ? (
        <AnimeSkel />
      ) : (
        <div className="Anime">
          <Header />

          <div className="AnimePage">
            <div className="leftAnimepage">
              <div className="Leftimg">
                <img
                  className="leftImage"
                  src={anime.image}
                  alt={anime.title}
                />
              </div>
              <div className="trailerBtn">
                <i className="bx bx-movie-play"></i>
                <h3>Trailer</h3>
              </div>
              <div className="leftIcons">
                <div className="icon">
                  <i className="bx bx-star"></i> Favorite{" "}
                </div>
                <div className="icon">
                  <i className="bx bxs-bookmark-star"></i>Watch later{" "}
                </div>
                <div className="icon">
                  <i className="bx bx-share"></i> Share{" "}
                </div>
              </div>
            </div>
            <div className="RightAnimepage">
              <div className="Righttitle">
                <h1 className="movieTitle">{anime.title}</h1>
                <div className="movieBtns">
                  <div className="movieBtn moviewatchBtn">
                    <i className="bx bx-play"></i> <span>Watch</span>
                  </div>
                  <div className="movieBtn moviedownBtn">
                    <i className="bx bxs-cloud-download"></i>{" "}
                    <span>Download</span>
                  </div>
                </div>
              </div>
              <div className="Rightstory">
                <h3 className="storyTitle">STORYLINE</h3>
                <p className="storyDescripiton">{anime.description}</p>
                <div className="storyDetails">
                  <div className="storyDetail">
                    <span>Rating</span>
                    {anime.rt_score}%
                  </div>
                  <div className="storyDetail">
                    <span>Relase year</span>
                    {anime.release_date}
                  </div>
                  <div className="storyDetail">
                    <span>Director</span>
                    {anime.director}
                  </div>
                  <div className="storyDetail">
                    <span>Producer</span>
                    {anime.producer}
                  </div>
                  <div className="storyDetail">
                    <span>Duration</span>
                    {anime.running_time}
                  </div>
                </div>
              </div>
              <div className="Rightcast">
                <h3 className="castTitle">CAST</h3>
                <div className="casts">
                  {char.map((dt, i) => {
                    return i < 10 ? (
                      <div className="castDetail" key={dt.id}>
                        <h4>{dt.name}</h4>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </div>
                <span className="seeAlltag">See all</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Anime;
