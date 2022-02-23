import React from "react";

import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeMain />
      <Footer footerName="footer--home" />
    </div>
  );
};

export default Home;
