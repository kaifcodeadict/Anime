import React from 'react'
import { useParams } from "react-router-dom";

function Anime() {
    const params = useParams();
  
  return (
    <div>Anime {params.animeId}</div>
  )
}

export default Anime