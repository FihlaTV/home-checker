import React, { Component, Fragment } from 'react';
import API from '../utils/API';
import SubHeader from './subcomponents/SubHeader';
import PersonCard from './subcomponents/PersonCard';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
//sample names to play with:
// import personDataSample from '../samplePeople.json';

class Checkdash extends Component {
  constructor(props) {
    super(props);

    this.loadApplicants = this.loadApplicants.bind(this);
    this.getOneApplicant = this.getOneApplicant.bind(this);
    this.state = {
      persons: []
    };
  }
  loadApplicants = () => {
    API.getApplicants()
      .then(res => this.setState({ persons: res.data }))
      .catch(err => console.log(err));
  };
  getOneApplicant = id => {
    API.getPerson(id)
      .then(res => this.setState({ persons: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <SubHeader tagline="Home Checker Dashboard" />
        <button onClick={this.loadApplicants}>Load Applicants</button>
        <div className="personList">
          {Object.keys(this.state.persons).map(key => (
            <PersonCard
              key={key}
              id={key}
              _id={this.state.persons._id}
              details={this.state.persons[key]}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Checkdash;
