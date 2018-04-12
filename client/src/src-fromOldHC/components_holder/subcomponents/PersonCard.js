import React, { Component } from "react";

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
              email:{" "}
              <a
                href={"mailto:" + email + "?Subject=Home%20Check"}
                target="_top"
              >
                {email}
              </a>
            </li>
            <li>
              Mobile: <a href={"tel:+1-" + mobile}>{mobile}</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default PersonCard;
