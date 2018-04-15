import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VistationForm from './VisitationForm';
import VisitatonForm from './VisitationForm';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.visitForm = this.visitForm.bind(this);
  }
  visitForm = id => {
    console.log(`id is ${id}`);
  };
  render() {
    const {
      firstName,
      lastName,
      address,
      city,
      stateProvence,
      postalCode,
      email,
      mobile,
      role
    } = this.props.details;
    return (
      <li className="personCard-li">
        <div className="personCard-div">
          <h4 className="fullname">
            <span>{firstName}</span> <span>{lastName}</span>
          </h4>
          <p>
            role: <strong>{role}</strong>
          </p>
          <ul>
            <li>{address}</li>
            <li>
              {city}, {stateProvence} {postalCode}
            </li>
            <li>
              email:{' '}
              <a
                href={'mailto:' + email + '?Subject=Home%20Check'}
                target="_top"
              >
                {email}
              </a>
            </li>
            <li>
              Mobile: <a href={'tel:+1-' + mobile}>{mobile}</a>
            </li>
          </ul>
          <Router>
            <Fragment>
              <Link to={`/applicants/${this.props.id}`}>
                <button id={this.props.id}>
                  Visit {firstName} {lastName}
                </button>
              </Link>
              <button id={this.props.id}>
                Delete {firstName} {lastName}
              </button>
            </Fragment>
          </Router>
        </div>
      </li>
    );
  }
}

export default PersonCard;
