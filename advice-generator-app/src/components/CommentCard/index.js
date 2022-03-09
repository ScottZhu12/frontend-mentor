import React from "react";

import { connect } from "react-redux";

import Advice from "../Advice";
import ResponsiveImage from "../ResponsiveImage";
import { fetchComment } from "../../actions";

const imgPath = process.env.PUBLIC_URL;

const CommentCard = ({ fetchComment }) => {
  return (
    <div className="comment-card">
      <Advice />
      <ResponsiveImage imgName="pattern-divider" />
      <div className="dice-container" onClick={fetchComment}>
        <img src={`${imgPath}/images/icon-dice.svg`} alt="dice icon" />
      </div>
    </div>
  );
};

export default connect(null, { fetchComment })(CommentCard);
