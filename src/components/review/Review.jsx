import { Rating, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Review = ({ review }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <Rating name="text-feedback" value={review.rate} readOnly />
        <p variant="h6" className="ml-6 italic font-[Palatino]">
          {review.date}
        </p>
      </div>
      <p variant="h6" className="font-[Palatino]">
        {review.comment}
      </p>
      <Typography variant="h7" className="font-[Palatino] italic font-semibold">{review.user}</Typography>
    </div>
  );
};

export default Review;
