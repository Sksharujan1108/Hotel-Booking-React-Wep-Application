import React from "react";
import { icons } from "../../utils";

const StartRating = (props) => {
    const { rating = 4 } = props;
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <img
            key={index}
            src={rating > index ? icons?.starIconFilled : icons?.starIconOutlined}
            alt="star"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
};

export default StartRating;
