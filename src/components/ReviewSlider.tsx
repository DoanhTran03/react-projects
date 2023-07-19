import ReviewCard from "./ReviewCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import reviews from "../data/data";
import { useEffect, useState } from "react";

export interface Review {
  id: number;
  image: string;
  name: string;
  quote: string;
  title: string;
}

const ReviewSlider = () => {
  const [selectedindex, setSelectedIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setSelectedIndex((selectedindex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(slider);
  }, [selectedindex]);

  const next = () => {
    setSelectedIndex((selectedindex + 1) % reviews.length);
  };

  const back = () => {
    setSelectedIndex((selectedindex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="review">
      {reviews.map((review, index) => {
        if (index == selectedindex) return <ReviewCard review={review} position={"active"}></ReviewCard>;
        else if (index === ((selectedindex - 1 + reviews.length) % reviews.length)) return <ReviewCard review={review} position={"back"}></ReviewCard>
        else return  <ReviewCard review={review} position={"next"}></ReviewCard>
      })}
      <button onClick={() => back()} className="btn btn-back">
        <BsChevronLeft></BsChevronLeft>
      </button>
      <button onClick={() => next()} className="btn btn-next">
        <BsChevronRight></BsChevronRight>
      </button>
    </div>
  );
};

export default ReviewSlider;
