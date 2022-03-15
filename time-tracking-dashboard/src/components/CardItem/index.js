import React from "react";
import { connect } from "react-redux";

const imgPath = process.env.PUBLIC_URL;

const CardItem = ({ title, timeframes, activeTimeFrame }) => {
  return (
    <div className={`card-item card-item--${title.replace(/\s/g, "")}`}>
      <div className="card-item__img">
        <img src={`${imgPath}/images/icon-${title}.svg`} alt={title} />
      </div>
      <div className="card-item__content">
        <div className="card-item__content__title">
          <div className="heading heading--card-title">{title}</div>
          <img src={`${imgPath}/images/icon-ellipsis.svg`} alt="three dots" />
        </div>

        <div className="heading heading--card-detail">
          {timeframes[activeTimeFrame].current}hrs
        </div>

        <div className="paragraph paragraph--card-detail">
          Last Week - {timeframes[activeTimeFrame].previous}hrs
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeTimeFrame: state.activeTimeFrame };
};

export default connect(mapStateToProps, {})(CardItem);
