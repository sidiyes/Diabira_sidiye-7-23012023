import React from "react";
import "./Banner.css";

const Banner = ({ img, alt, title }) => {
  return (
    <div className="banner">
      <img src={img} alt={alt} />
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
