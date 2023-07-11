import ReviewCard from "./ReviewCard"

const ReviewContainer = () => {
  return (
    <div className="reviewContainer">
        <div className="reviewContainer__heading">
            <h1>Our Reviews</h1>
            <div className="reviewContainer__line"></div>
        </div>
        <ReviewCard></ReviewCard>
    </div>
  )
}

export default ReviewContainer