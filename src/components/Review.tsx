import React from "react";
import ReviewCard from "./ReviewCard";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

const Review = () => {
  return (
    <div className="review">
      <article className="reviewCard reviewCard--next"><ReviewCard></ReviewCard></article>
      <article className="reviewCard reviewCard--active"><ReviewCard></ReviewCard></article>
      <article className="reviewCard reviewCard--active"><ReviewCard></ReviewCard></article>
      <article className="reviewCard reviewCard--active"><ReviewCard></ReviewCard></article>
      <button className="btn btn-back">
        <BsChevronLeft></BsChevronLeft>
      </button>
      <button className="btn btn-next">
        <BsChevronRight></BsChevronRight>
      </button>
    </div>
  );
};

export default Review;
