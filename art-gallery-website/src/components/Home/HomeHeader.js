import React from "react";

import ResponsiveImg from "../ResponsiveImg";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <div>
        <h1>
          <span>MODERN</span>
          <span>ART GALLERY</span>
        </h1>
      </div>
      <ResponsiveImg imgName="image-hero" />
      <div>
        <p>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
      </div>
    </div>
  );
};

export default HomeHeader;
