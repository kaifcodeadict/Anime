import React, { useState, useEffect, useRef } from "react";
import Movie from "./Movie";

import "./Rows.css";
import left from "../../Assets/leftArrow.png";
import right from "../../Assets/rightArrow.png";

export default function Rows({ Anime, Title }) {
  const [movies, setMovies] = useState([]);
  const Cards = useRef(null);
  useEffect(() => {
    setMovies(Anime);
  }, [Anime]);

  const scroll = (scrollOffset) => {
    Cards.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div className="row">
        <div className="rowTop">
          <h3> {Title} </h3>
          <div className="rowBtns">
            <div className="btnLeft" onClick={() => scroll(-308)}>
              <img src={left} alt="left" />
            </div>
            <div className="btnRight" onClick={() => scroll(308)}>
              <img src={right} alt="right" />
            </div>
          </div>
        </div>

        <div className="row_posters" ref={Cards}>
          {movies.map((movie, i) => {
            return (
              <div className="" key={i}>
                <Movie movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
