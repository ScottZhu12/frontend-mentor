import React from "react";

import PersonalCard from "../PersonalCard";
import CardList from "../CardList";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <PersonalCard />
        <CardList />
      </div>
    </div>
  );
};

export default App;
