import React, { useState, useEffect, useRef } from "react";
import Movie from "./Movie";

import "./Rows.css";
import left from "../../Assets/leftArrow.png"
import right from "../../Assets/rightArrow.png"


export default function Rows({Anime,Title}) {
  const [movies, setMovies] = useState([]);
  const Cards = useRef(null);
  useEffect(() => {
  setMovies(Anime)
    
  }, [Anime])

  const scroll = (scrollOffset) =>{
    Cards.current.scrollLeft += scrollOffset;
  }
 



  


  return (
  <>
    <div className="row" >
      <div className="rowTop">
    <h2> {Title} </h2>
       <div className="rowBtns">
         <div className="btnLeft" onClick={() => scroll(-310)}>
           <img src={left}/> 
         </div>
         <div className="btnRight" onClick={() => scroll(310)}>
        <img src={right} />
         </div>
       </div>
        </div>

      <div className="row_posters" ref={Cards}>
        {movies.map((movie,i) => {
          return  (
            <div className="" key={i}>
            <Movie   movie={movie} />
            </div>
          )
        })}
      </div>

    </div>
   
        </>
  );
}
