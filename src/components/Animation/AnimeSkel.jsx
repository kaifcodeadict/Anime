import React from "react";
import { Skeleton } from "@mui/material";

function AnimeSkel() {
  return (
    <div className="Anime">
      <div className="Header">
        <div className="headerLeft">
          <Skeleton animation="wave" height={70} width={200} />
        </div>
        <div className="headerRight">
          <Skeleton
            variant="circular"
            animation="wave"
            height={40}
            width={40}
            className={"sidebar__search"}
            style={{ border: "none", top: "25%" }}
          />
          <Skeleton
            variant="circular"
            animation="wave"
            height={40}
            width={40}
            className={"sidebar__search"}
            style={{ border: "none", top: "25%" }}
          />
          <Skeleton
            variant="circular"
            animation="wave"
            height={40}
            width={40}
            className={"sidebar__search"}
            style={{ border: "none", top: "25%" }}
          />
        </div>
      </div>
      <div className="AnimePage">
        <div className="leftAnimepage">
          <Skeleton
            animation="wave"
            variant="rectangular"
            className="leftImage"
            height={500}
            width={400}
          />
          <Skeleton animation="wave" className="trailerBtn" height={50} />
          <Skeleton animation="wave" className="trailerBtn" height={50} />
        </div>
        <div className="RightAnimepage Skelgap">
          <div className="Righttitle">
            <Skeleton animation="wave" height={100} width={400} />
            <div className="movieBtns">
              <Skeleton animation="wave" className="movieBtn" height={100} />
              <Skeleton animation="wave" className="movieBtn" height={100} />
            </div>
          </div>
          <div className="Rightstory">
            <Skeleton animation="wave" height={50} width={200} />
            <Skeleton animation="wave" height={200} width={400} />

            <div className="storyDetails">
              <div className="storyDetail">
                <Skeleton animation="wave" height={50} width={100} />
                <Skeleton animation="wave" height={50} width={100} />
                <Skeleton animation="wave" height={50} width={100} />
                <Skeleton animation="wave" height={50} width={100} />
              </div>
            </div>
          </div>
          <div className="Rightcast">
            <Skeleton animation="wave" height={50} width={200} />
            <div className="casts">
              <Skeleton animation="wave" height={50} width={150} />
              <Skeleton animation="wave" height={50} width={150} />
              <Skeleton animation="wave" height={50} width={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeSkel;
