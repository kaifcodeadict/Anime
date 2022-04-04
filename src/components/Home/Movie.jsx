import React from 'react'
import "./Rows.css";
import {  useNavigate } from "react-router-dom";



function Movie({movie}) {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/anime/${movie.id}`)
  }

    return (
        <div className='movies'  onClick={handleClick} >
            <img
              className={`row_poster`}
              src={movie.image}
              alt={movie.title}
              
              /> 
              <div className="movie-content">
                  <h2 className="movie-title">Rating: {movie.rt_score}%  </h2>
                  <h2 className="movie-btn Btn">Know More</h2>
              </div>
        </div>
    )
}

export default Movie
