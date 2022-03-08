import React from "react";

import ResponsiveImg from "../ResponsiveImg";

const imgPath = process.env.PUBLIC_URL;

const SubSection = () => {
  return (
    <div className="sub-section">
      <div className="sub-section__content">
        <div className="sub-section__content-img">
          <ResponsiveImg imgName="image-jeremy" />
        </div>

        <div className="sub-section__content-text">
          <img
            src={`${imgPath}/assets/pattern-curved-line-2.svg`}
            alt="a curved line"
          />
          <h2 className="heading heading--sub-section-primary-text">
            It just <span>works.</span>
          </h2>
          <p className="paragraph paragraph--sub-section-primary-text">
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </p>
          <h3 className="heading heading--sub-section-secondary-text">
            JEREMY ROBINSON
          </h3>
          <div className="paragraph paragraph--sub-section-secondary-text">
            CMO, FYLO
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
