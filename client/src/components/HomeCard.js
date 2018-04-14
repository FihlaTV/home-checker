import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class HomeCard extends Component {
  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus();
  }

  render() {
    return (
      <Card className="container">
        <CardTitle
          title="Welcome to HomeChecker"
          style={{ 'text-align': 'center' }}
        />
        {Auth.isUserAuthenticated() ? (
          <CardText
            style={{ fontSize: '16px', color: 'green', 'text-align': 'center' }}
          >
            Welcome! You are logged in.
          </CardText>
        ) : (
          <CardText
            style={{ fontSize: '16px', color: 'red', 'text-align': 'center' }}
          >
            You are not logged in.
          </CardText>
        )}
      </Card>
    );
  }
}

export default HomeCard;
