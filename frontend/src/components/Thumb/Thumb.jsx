import React from "react";
import "./Thumb.css";
import { Link } from "react-router-dom";

const Thumb = ({ id, image, title }) => {
  return (
    <Link to={`/apartment/${id}`}>
      <div className="thumb">
        <img src={image} alt="" className="thumb__img" />
        <div className="thumb__overlay"></div>
        <h2 className="thumb__title">{title}</h2>
      </div>
    </Link>
  );
};

export default Thumb;
