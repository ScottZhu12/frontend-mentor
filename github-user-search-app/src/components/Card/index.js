import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const imgPath = process.env.PUBLIC_URL;

class Card extends React.Component {
  componentDidMount() {
    return null;
  }

  getJoinedTime(value) {
    const timeString = new Date(value);

    const dateObj = {
      date: timeString.getDate(),
      month: timeString.toLocaleString('default', { month: 'short' }),
      year: timeString.getFullYear(),
    };

    return dateObj;
  }

  cardLinkClassName = (value) => {
    return value === null
      ? 'card__links__item not-available'
      : 'card__links__item';
  };

  cardLinkContent = (value) => {
    return value === null ? 'Not Available' : value;
  };

  renderCard() {
    if (_.isEmpty(this.props.userReducer)) return null;

    const { user } = this.props.userReducer;

    const { date, month, year } = this.getJoinedTime(user.created_at);

    // const { avatar_url, login, created_at, url, bio } =
    //   this.props.userReducer.user;

    return (
      <React.Fragment>
        <div className='card__user'>
          <img src={user.avatar_url} alt='avatar' className='card__user__img' />
          <div className='card__user__details'>
            <div className='card__user__details-title'>
              <h2 className='heading heading--card-user-main-heading'>
                {user.name}
              </h2>
              <div className='paragraph paragraph--card-user-time'>
                Joined {date} {month} {year}
              </div>
            </div>
            <a
              href={user.html_url}
              target='_blank'
              rel='noreferrer noopener'
              className='heading heading--card-user-sub-heading'
            >{`@${user.login}`}</a>
            <div className='paragraph paragraph--card-user-bio'>
              {user.bio || `This profile has no bio`}
            </div>
          </div>
        </div>

        <div className='card__stats'>
          <div className='card__stats__item'>
            <div className='paragraph paragraph--stats-title'>Repos</div>
            <h3 className='heading heading--stats-number'>
              {user.public_repos}
            </h3>
          </div>

          <div className='card__stats__item'>
            <div className='paragraph paragraph--stats-title'>Followers</div>
            <h3 className='heading heading--stats-number'>{user.followers}</h3>
          </div>

          <div className='card__stats__item'>
            <div className='paragraph paragraph--stats-title'>Following</div>
            <h3 className='heading heading--stats-number'>{user.following}</h3>
          </div>
        </div>

        <div className='card__links'>
          <div className={this.cardLinkClassName(user.location)}>
            <img
              src={`${imgPath}/assets/icon-location.svg`}
              alt='icon-location'
            />
            <div className='paragraph paragraph--links-item'>
              {this.cardLinkContent(user.location)}
            </div>
          </div>

          <div className={this.cardLinkClassName(user.twitter_username)}>
            <img
              src={`${imgPath}/assets/icon-twitter.svg`}
              alt='icon-twitter'
            />
            <div className='paragraph paragraph--links-item'>
              {this.cardLinkContent(user.twitter_username)}
            </div>
          </div>

          <div className={this.cardLinkClassName(user.blog)}>
            <img
              src={`${imgPath}/assets/icon-website.svg`}
              alt='icon-website'
            />
            <a
              href={user.blog}
              target='_blank'
              rel='noreferrer noopener'
              className='paragraph paragraph--links-item paragraph--links-item--blog'
            >
              {this.cardLinkContent(user.blog)}
            </a>
          </div>

          <div className={this.cardLinkClassName(user.company)}>
            <img
              src={`${imgPath}/assets/icon-company.svg`}
              alt='icon-company'
            />
            <div className='paragraph paragraph--links-item'>
              {this.cardLinkContent(user.company)}
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
