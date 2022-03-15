import React from "react";
import { connect } from "react-redux";

import { fetchActiveTimeframe } from "../../actions";

const imgPath = process.env.PUBLIC_URL;

const PersonalCard = (props) => {
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
        <div
          className={`paragraph paragraph--personal-select paragraph--${
            props.activeTimeFrame === "daily" ? "active" : ""
          }`}
          onClick={() => props.fetchActiveTimeframe("daily")}
        >
          Daily
        </div>
        <div
          className={`paragraph paragraph--personal-select paragraph--${
            props.activeTimeFrame === "weekly" ? "active" : ""
          }`}
          onClick={() => props.fetchActiveTimeframe("weekly")}
        >
          Weekly
        </div>
        <div
          className={`paragraph paragraph--personal-select paragraph--${
            props.activeTimeFrame === "monthly" ? "active" : ""
          }`}
          onClick={() => props.fetchActiveTimeframe("monthly")}
        >
          Monthly
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTimeFrame: state.activeTimeFrame,
  };
};

export default connect(mapStateToProps, { fetchActiveTimeframe })(PersonalCard);
