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

    const checkIndex = (index: number) => {
        if(index >= reviews.length) return 0;
        else if (index < 0) return reviews.length -1;
        else return index;
    }
    const goBack = () => {
        setCurIndex(checkIndex(curIndex-1));
    }
    const goForward = () => {
        setCurIndex(checkIndex(curIndex+1));
    }
    const playRandom = () => {
        let randomNum = Math.floor(Math.random() * reviews.length - 1);
        setCurIndex(checkIndex(randomNum));
    }

  return (
    <div key={curReview.id} className="reviewContainer">
        <div className="reviewContainer__heading">
            <h1>Our Reviews</h1>
            <div className="reviewContainer__line"></div>
        </div>
        <ReviewCard goBack={goBack} goForward={goForward} playRandom={playRandom} review={curReview}></ReviewCard>
    </div>
  )
}

export default ReviewContainer