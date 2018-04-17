import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import API from '../utils/API';
import PersonForms from './PersonForms';
import SubHeader from './subcomponents/SubHeader';
import PersonCard from './subcomponents/PersonCard';

//sample names to play with:
// import personDataSample from '../samplePeople.json';
/**
 * todo:
 * bring the person state up here
 */

class Admindash extends Component {
  constructor(props) {
    super(props);
    this.loadAllPersons = this.loadAllPersons.bind(this);
    this.loadCheckers = this.loadCheckers.bind(this);
    this.loadApplicants = this.loadApplicants.bind(this);
    this.state = {
      persons: []
    };
  }

  loadAllPersons = () => {
    API.getPersons()
      .then(res => this.setState({ persons: res.data }))
      .catch(err => console.log(err));
  };
  loadCheckers = () => {
    API.getCheckers()
      .then(res => this.setState({ persons: res.data }))
      .catch(err => console.log(err));
  };
  loadApplicants = () => {
    API.getApplicants()
      .then(res => this.setState({ persons: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <SubHeader tagline="Administrator Dashboard" />
        <div className="personForms">
          <PersonForms
            loadAllPersons={this.loadAllPersons}
            persons={this.state.persons}
            addPerson={this.addPerson}
          />
          <button onClick={this.loadAllPersons}>Load All Names</button>
          <button onClick={this.loadCheckers}>Load Checkers</button>
          <button onClick={this.loadApplicants}>Load Applicants</button>
        </div>
        <div className="personList">
          <div>
            {Object.keys(this.state.persons).map(key => (
              <Router>
                <Fragment>
                  <PersonCard
                    key={key}
                    id={key}
                    details={this.state.persons[key]}
                  />

                  <button id={key}>
                    Clear {this.state.persons.firstName}{' '}
                    {this.state.persons.lastName}
                  </button>
                </Fragment>
              </Router>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Admindash;
