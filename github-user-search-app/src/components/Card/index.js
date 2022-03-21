import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Card extends React.Component {
  componentDidMount() {
    return null;
  }

  renderCard() {
    if (_.isEmpty(this.props.userReducer)) return null;

    const { user } = this.props.userReducer;

    // const { avatar_url, login, created_at, url, bio } =
    //   this.props.userReducer.user;

    return (
      <React.Fragment>
        <div className='card__user'>
          <img src={user.avatar_url} alt='avatar' className='card__user__img' />
          <div className='card__user__details'>
            <div className='card__user__details-title'>
              <h2 className='heading heading--card-user-main-heading'>
                {user.login}
              </h2>
              <div className='paragraph paragraph--card-user-time'>
                {user.created_at}
              </div>
            </div>
            <h3 className='heading heading--card-user-sub-heading'>{`@${user.login}`}</h3>
            <div className='paragraph paragraph--card-user-content'>
              {user.bio}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return <div className='card'>{this.renderCard()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { userReducer: state.userReducer };
};

export default connect(mapStateToProps, {})(Card);
