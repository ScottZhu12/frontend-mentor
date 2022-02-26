import React from "react";

import ResponsiveImg from "../ResponsiveImg";
import Button from "../Button";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <div>
        <h1 className="heading heading--home-header">
          MODERN <br />
          ART GALLERY
        </h1>
      </div>

      <div>
        <ResponsiveImg imgName="image-hero" />
      </div>

      <div>
        <p className="paragraph paragraph--home-header">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button
          text="OUR LOCATION"
          imgName="icon-arrow-right"
          path="/location"
          btnName="btn--home"
        />
      </div>
    </div>
  );
};

export default HomeHeader;
