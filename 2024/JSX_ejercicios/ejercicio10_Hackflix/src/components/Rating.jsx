import ReactStars from "react-rating-stars-component";
import React from "react";

function Rating({ handleFilterByRating }) {
  const ratingChanged = (newRating) => {
    handleFilterByRating(newRating);
  };

  return (
    <ReactStars
      Filtra
      las
      películas
      por
      su
      Rating
      count={5}
      onChange={ratingChanged}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
}
export default Rating;
