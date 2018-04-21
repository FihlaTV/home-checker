import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import API from '../utils/API';
import PersonForms from './PersonForms';
import SubHeader from './subcomponents/SubHeader';
import PersonCard from './subcomponents/PersonCard';

class Admindash extends Component {
  constructor(props) {
    super(props);
    this.loadAllPersons = this.loadAllPersons.bind(this);
    this.loadCheckers = this.loadCheckers.bind(this);
    this.loadApplicants = this.loadApplicants.bind(this);
    this.state = {
      persons: [],
      checkers: [],
      applicants: []
    };
  }

  loadAllPersons = () => {
    API.getPersons()
      .then(res =>
        this.setState({
          persons: res.data
        })
      )
      .catch(err => console.log(err));
  };
  loadCheckers = () => {
    API.getCheckers()
      .then(res =>
        this.setState({
          checkers: res.data
        })
      )
      .catch(err => console.log(err));
  };
  loadApplicants = () => {
    API.getApplicants()
      .then(res =>
        this.setState({
          applicants: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <div className="generalDashboard">
          <SubHeader tagline="Administrator Dashboard" />
          <div className="personForms">
            <PersonForms
              loadAllPersons={this.loadAllPersons}
              persons={this.state.persons}
              addPerson={this.addPerson}
            />
            <div className="loadBtnHolder">
              <p>View Names: </p>
              <button onClick={this.loadCheckers}> Load Checkers</button>
              <button onClick={this.loadApplicants}> Load Applicants</button>
            </div>
          </div>
        </div>
        <div className="lists">
          <div className="checkersList">
            {Object.keys(this.state.checkers).map(key => (
              <Router>
                <div className="personCard">
                  <PersonCard
                    key={key}
                    id={key}
                    details={this.state.checkers[key]}
                  />
                  <button id={key}>
                    Remove {this.state.checkers.firstName}{' '}
                    {this.state.checkers.lastName}{' '}
                  </button>
                </div>
              </Router>
            ))}{' '}
          </div>

          <div className="applicantsList">
            {Object.keys(this.state.applicants).map(key => (
              <Router>
                <div className="personCard">
                  <PersonCard
                    key={key}
                    id={key}
                    details={this.state.applicants[key]}
                  />
                  <button id={key}>
                    Remove {this.state.checkers.firstName}{' '}
                    {this.state.checkers.lastName}{' '}
                  </button>
                </div>
              </Router>
            ))}{' '}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Admindash;
