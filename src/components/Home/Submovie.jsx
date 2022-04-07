import React, { useEffect, useState } from "react";
import "./Submovie.css";
import { useNavigate } from "react-router-dom";
import SubmovieSkel from "../Animation/SubmovieSkel";
function Submovie({ Movies, Title, isLoading = false }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(Movies);
  }, [Movies]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/anime/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <SubmovieSkel />
      ) : (
        <>
          <h3 className="subMovieTitle">{Title}</h3>
          <div className="subMoviecontain">
            {movies.map((movie, i) => (
              <div
                className="subMovie"
                key={i}
                onClick={() => handleClick(movie.id)}
              >
                <img
                  className="subMovieImg"
                  src={movie.image}
                  alt={movie.title}
                />
                <div className="subMovieTexts">
                  <h5 className="subMovieTit">{movie.title}</h5>
                  <span className="subMovieRate">
                    Rateing:- {movie.rt_score}%
                  </span>
                  <span className="btn-sub">
                    <i className="bx bx-right-arrow-alt"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Submovie;
