import React from "react";
import { Skeleton } from "@mui/material";

function SubmovieSkel() {
  return (
    <>
      <Skeleton
        animation="wave"
        className=".subMovieTitle"
        height={50}
        width={140}
      />
      {[...Array(4)].map((e, i) => (
        <div className="subMovie" key={i}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={60}
            width={40}
            className="subMovieImg"
          />
          <div className="subMovieTexts">
            <Skeleton animation="wave" width={50} />
            <Skeleton animation="wave" width={20} />
          </div>
        </div>
      ))}
    </>
  );
}

export default SubmovieSkel;
