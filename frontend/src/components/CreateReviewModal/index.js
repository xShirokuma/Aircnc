import { useDispatch, useSelector } from "react-redux";

import ReviewForm from "../ReviewForm";
import StarRatingInput from "../StarRatingInput";
import "./CreateReviewModal.css";

const CreateReviewModal = ({ formType }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="create-review-modal">
      <h2>How was your stay?</h2>
      <ReviewForm formType={formType} />
    </div>
  );
};

export default CreateReviewModal;