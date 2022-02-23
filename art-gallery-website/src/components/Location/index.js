import React from "react";

import LocationHeader from "./LocationHeader";
import LocationMain from "./LocationMain";
import Footer from "../Footer";

const Location = () => {
  return (
    <div className="location">
      <LocationHeader />
      <LocationMain />
      <Footer footerName="footer--location" />
    </div>
  );
};

export default Location;
