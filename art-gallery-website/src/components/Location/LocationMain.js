import React from "react";

const LocationMain = () => {
  return (
    <div className="location-main">
      <h2 className="heading heading--location-main">
        OUR <br /> LOCATION
      </h2>

      <div className="location-main__detail">
        <address>
          <span>99 KING STREET</span> <br />
          Newport <br />
          Rl 02840 <br />
          United States of America
        </address>
        <p className="paragraph paragraph--location-main">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
    </div>
  );
};

export default LocationMain;
