import ReactStars from "react-rating-stars-component";
import { useState } from "react";

function Rating({ setRating }) {
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };
  return (
    <ReactStars
      count={5}
      onChange={handleRating}
      size={24}
      // isHalf={true}
      // emptyIcon={<i className="far fa-star"></i>}
      // halfIcon={<i className="fa fa-star-half-alt"></i>}
      // fullIcon={<i className="fa fa-star"></i>}
      // activeColor="#ffd700"
    />
  );
}
export default Rating;
