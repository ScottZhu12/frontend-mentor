import React from "react";

const imgPath = process.env.PUBLIC_URL;

const PersonalCard = () => {
  return (
    <div className="personal-card">
      <div className="personal-card__intro">
        <img src={`${imgPath}/images/image-jeremy.png`} alt="avatar" />
        <div className="personal-card__intro__text">
          <div className="paragraph paragraph--personal-intro">Report for</div>
          <h2 className="heading heading--personal-intro">Jeremy Robson</h2>
        </div>
      </div>

      <div className="personal-card__selections">
        <div className="paragraph paragraph--personal-select">Daily</div>
        <div className="paragraph paragraph--personal-select">Weekly</div>
        <div className="paragraph paragraph--personal-select">Monthly</div>
      </div>
    </div>
  );
};

export default PersonalCard;
