import React from "react";

import ResponsiveImg from "../ResponsiveImg";

const HomeMain = () => {
  return (
    <div className="home-main">
      <div className="home-main__intro">
        <div className="home-main__intro-text">
          <h2 className="heading heading--home-main heading--home-main--intro">
            YOUR DAY AT THE GALLERY
          </h2>
          <p className="paragraph paragraph--home-main paragraph--home-main--intro">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>

        <div className="home-main__intro-img">
          <ResponsiveImg imgName="image-grid-1" />
        </div>
      </div>

      <div className="home-main__content">
        <ResponsiveImg imgName="image-grid-2" />

        <div className="home-main__content-detail">
          <ResponsiveImg imgName="image-grid-3" />

          <div className="home-main__content-detail__text">
            <h2 className="heading heading--home-main heading--home-main--content">
              COME & BE INSPIRED
            </h2>
            <p className="paragraph paragraph--home-main paragraph--home-main--content">
              We're excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
