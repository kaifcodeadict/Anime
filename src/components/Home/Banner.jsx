import React, { useState, useEffect } from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

export default function Banner({ Animes }) {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setMovie(Animes[Math.floor(Math.random() * Animes.length)]);
  }, [Animes]);

  const handleClick = () => {
    navigate(`/anime/${movie.id}`);
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${movie?.movie_banner || movie?.image}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">{movie?.title}</h1>
          <span>{movie?.release_date}</span>
          <h4 className="banner_sub">Direct By :- {movie?.director}</h4>

          <div className="banner_buttons">
            <button className="Btn" onClick={handleClick}>
              Know More
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
