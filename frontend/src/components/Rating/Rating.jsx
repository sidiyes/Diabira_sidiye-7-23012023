import React from "react";
import "./Rating.css";
import likeStar from "../../images/likeStar.svg";
import dislikeStar from "../../images/dislikeStar.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img key={star} className="rating__icon" src={likeStar} alt="like" />
        ) : (
          <img
            key={star}
            className="rating__icon"
            src={dislikeStar}
            alt="dislike"
          />
        )
      )}
    </div>
  );
};

export default Rating;
