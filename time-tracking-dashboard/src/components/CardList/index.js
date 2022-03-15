import React from "react";
import { connect } from "react-redux";

import CardItem from "../CardItem";
import { fetchTimeframe } from "../../actions";
import { fetchActiveTimeframe } from "../../actions";

class CardList extends React.Component {
  componentDidMount() {
    this.props.fetchTimeframe();
    this.props.fetchActiveTimeframe("daily");
  }

  renderCardList() {
    const { timeframe } = this.props;

    if (!timeframe) return null;

    const renderedList = timeframe.map((obj) => {
      const { title, timeframes } = obj;

      return <CardItem key={title} title={title} timeframes={timeframes} />;
    });

    return renderedList;
  }

  render() {
    return <div className="card-list">{this.renderCardList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { timeframe: state.timeframe };
};

export default connect(mapStateToProps, {
  fetchTimeframe,
  fetchActiveTimeframe,
})(CardList);
