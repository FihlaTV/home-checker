import React, { Component, Fragment } from 'react';
import Auth from '../modules/Auth';
import Image2 from '../images/loggedouthound.jpg';
import Image1 from '../images/loggedinhound.jpeg';

class HomeCard extends Component {
  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus();
  }

  render() {
    return (
      <div className="homeCard">
        <h1>Welcome!</h1>
        {Auth.isUserAuthenticated() ? (
          <Fragment>
            <h3>You are logged in.</h3>
            <div className="homeImg">
              <img
                src={Image1}
                alt="greyhound with green grass as background"
              />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <h3>You are not logged in.</h3>
            <div className="homeImg">
              <img src={Image2} alt="greyhound on a couch" />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default HomeCard;
