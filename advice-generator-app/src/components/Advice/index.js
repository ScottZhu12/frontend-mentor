import React from "react";
import { connect } from "react-redux";

import { fetchComment } from "../../actions";

class Advice extends React.Component {
  componentDidMount() {
    this.props.fetchComment();
  }

  render() {
    const { comment } = this.props;

    if (!comment) return null;

    if (comment) {
      return (
        <div className="advice">
          <h1 className="heading">ADVICE # {comment.slip.id}</h1>
          <p className="paragraph">{comment.slip.advice}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { comment: state.comment };
};

export default connect(mapStateToProps, { fetchComment })(Advice);
