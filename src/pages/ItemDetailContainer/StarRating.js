import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.scss";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);
  const [ratingLength, setRatingLength] = useState(null);

  return (
    <>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue);
                  setRatingLength(
                    ratingValue ? ratingLength + 1 : ratingLength
                  );
                }}
                disabled={rating > 0}
              />

              <FaStar
                className="star"
                color={
                  ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"
                }
                size={15}
                onMouseEnter={() => setHoverRating(ratingValue)}
                onMouseLeave={() => setHoverRating(null)}
              />
            </label>
          );
        })}
        <span className="a-declarative">
          <a
            id="acrCustomerReviewLink"
            className="a-link-normal"
            href="#customerReviews"
          >
            <span id="acrCustomerReviewText" className="a-size-base">
              {ratingLength === null
                ? ""
                : ratingLength < 2
                ? `(${ratingLength} Rating)`
                : `(${ratingLength} Ratings)`}
            </span>
          </a>
        </span>
      </div>
    </>
  );
};

export default StarRating;
