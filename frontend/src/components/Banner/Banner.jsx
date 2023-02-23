import React from "react";
//import PropTypes from "prop-types";
import "./Banner.css";

const Banner = ({ img, alt, title }) => {
  return (
    <div className="banner">
      <img src={img} alt={alt} />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
