import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CategoriesEle({ Categories, Style }) {
  const [activeCat, setActiveCat] = useState(0);
  const location = useLocation();
  var stylingObject = {
    categorie: {
      display: "flex",
      gap: "2rem",
    },
    active: {
      color: "#000",
    },
    notActive: {
      color: "#5555",
    },
  };

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeCat = Categories.findIndex((item) => item.section === curPath);
    setActiveCat(curPath.length === 0 || activeCat < 0 ? 1 : activeCat);
  }, [location]);
  return (
    <div style={{ ...stylingObject.categorie, ...Style }}>
      {Categories.map((item, index) => (
        <Link to={item.to} key={index}>
          <span
            style={
              activeCat === index
                ? stylingObject.active
                : stylingObject.notActive
            }
          >
            {item.display}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default CategoriesEle;
