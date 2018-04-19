import React, { Component, Fragment } from 'react';
import { urlEscape } from '../../helpers';
import { Link } from 'react-router-dom';

class PersonCard extends Component {
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
    let addressEscaped = urlEscape(address);
    let cityEscaped = urlEscape(city);
    let stateEscaped = urlEscape(stateProvence);
    return (
      <Fragment>
        <div className="personCard-div">
          <div>
            <h4 className="fullname">
              <span>{firstName}</span> <span>{lastName}</span>
            </h4>
            <p>
              role: <strong>{role}</strong>
            </p>
          </div>
          <div className="addressBlock">
            <ul>
              <li>{address}</li>
              <li>
                {city}, {stateProvence} {postalCode}
              </li>
              <li>
                <a
                  href={
                    'https://www.google.com/maps/dir/?api=1&destination=' +
                    addressEscaped +
                    '%2C+' +
                    cityEscaped +
                    '%2C+' +
                    stateEscaped +
                    '&dir_action=navigate'
                  }
                >
                  Directions via Google Maps
                </a>
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
          </div>
        </div>

        <button>
          <Link to={'/dashboard/visit'}>
            HomeCheck {firstName} {lastName}
          </Link>
        </button>
      </Fragment>
    );
  }
}

export default PersonCard;
