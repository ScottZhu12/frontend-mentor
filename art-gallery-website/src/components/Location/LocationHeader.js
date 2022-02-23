import React from "react";

import ResponsiveImg from "../ResponsiveImg";
import Button from "../Button";

const LocationHeader = () => {
  return (
    <div className="location-header">
      <ResponsiveImg imgName="image-map" />
      <Button
        text="BACK TO HOME"
        imgName="icon-arrow-left"
        path="/"
        btnName="btn--location"
      />
    </div>
  );
};

export default LocationHeader;
