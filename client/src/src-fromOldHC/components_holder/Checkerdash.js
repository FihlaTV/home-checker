import React, { Component, Fragment } from "react";
import PersonCard from "./subcomponents/PersonCard";

class CheckerDash extends Component {
  render() {
    return (
      <Fragment>
        <h3>Checker Dashboard</h3>
        <p>I want to see a list of applicant/adopters</p>

        <ul>
          <PersonCard />
        </ul>
      </Fragment>
    );
  }
}

export default CheckerDash;
