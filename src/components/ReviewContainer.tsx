import ReviewCard from "./ReviewCard"
import reviews from "../datas/data"
import { useState } from "react";

export interface Review {
    id: number;
    image: string;
    job: string;
    name: string;
    text: string;
}

const ReviewContainer = () => {
    const [curIndex, setCurIndex] = useState(0);
    const curReview = reviews[curIndex];
  return (
    <div key={curReview.id} className="reviewContainer">
        <div className="reviewContainer__heading">
            <h1>Our Reviews</h1>
            <div className="reviewContainer__line"></div>
        </div>
        <ReviewCard review={curReview}></ReviewCard>
    </div>
  )
}

export default ReviewContainer