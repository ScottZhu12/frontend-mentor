import React from "react";

import Advice from "../Advice";
import ResponsiveImage from "../ResponsiveImage";

const CommentCard = () => {
  return (
    <div className="comment-card">
      <Advice />
      <ResponsiveImage imgName="pattern-divider" />
    </div>
  );
};

export default CommentCard;
