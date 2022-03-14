import React from "react";

const CardItem = () => {
  return (
    <div className="card-item">
      <div className="card-item__img">
        <img src="../../../public/images/icon-work.svg" alt="img" />
      </div>

      <div className="card-item__content">
        <div className="card-item__content__title">
          <div className="heading heading--card-title">Work</div>
          <img src="../../../public/images/icon-ellipsis.svg" alt="img" />
        </div>

        <div className="heading heading--card-detail">32hrs</div>

        <div className="paragraph paragraph--card-detail">
          Last Week - 36hrs
        </div>
      </div>
    </div>
  );
};

export default CardItem;
