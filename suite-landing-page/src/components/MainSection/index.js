import React from "react";

import ResponsiveImg from "../ResponsiveImg";
import Button from "../Button";

const imgPath = process.env.PUBLIC_URL;

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="main-section__text">
        <div className="main-section__text-heading">
          <h1 className="heading heading--main-section-text">
            <span>A</span> super solution <span>for your</span> business.
          </h1>
          <img
            src={`${imgPath}/assets/pattern-curved-line-1.svg`}
            alt="a curved line"
          />
        </div>

        <p className="paragraph paragraph--main-section-text">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>

        <Button btnText="Request Beta Access" btnName="btn--main-section" />
      </div>

      <div className="main-section__img">
        <ResponsiveImg imgName="image-hero" />
      </div>

      <div className="main-section__details">
        <div className="main-section__details__item">
          <h2 className="heading heading--main-section-details">2k+</h2>
          <div className="paragraph paragraph--main-section-details">
            companies
          </div>
        </div>

        <div className="main-section__details__item">
          <h2 className="heading heading--main-section-details">8</h2>
          <div className="paragraph paragraph--main-section-details">
            languages
          </div>
        </div>

        <div className="main-section__details__item">
          <h2 className="heading heading--main-section-details">1.2m</h2>
          <div className="paragraph paragraph--main-section-details">leads</div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
