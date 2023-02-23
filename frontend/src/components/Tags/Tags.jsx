import React from "react";
import "./Tags.css";

const Tags = ({ tagPlaceholder }) => {
  return (
    <div className="tag">
      <p className="tag__text">{tagPlaceholder}</p>
    </div>
  );
};

export default Tags;
