import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
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
      applicants: []
    };
  }
  loadApplicants = () => {
    API.getApplicants()
      .then(res =>
        this.setState({
          applicants: res.data
        })
      )
      .catch(err => console.log(err));
  };
  getOneApplicant = id => {
    API.getPerson(id)
      .then(res => this.setState({ applicants: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <SubHeader tagline="Home Checker Dashboard" />
        <button onClick={this.loadApplicants}>Load Applicants</button>
        <div className="personList">
          {Object.keys(this.state.applicants).map(key => (
            <div className="personCard">
              <PersonCard
                key={key}
                id={key}
                _id={this.state.applicants._id}
                details={this.state.applicants[key]}
              />
              <button id={key}>
                Clear {this.state.applicants.firstName}{' '}
                {this.state.applicants.lastName}
              </button>
              <button id={key}>
                <NavLink to={'/dashboard/visit'}>
                  Visit {this.state.applicants.firstName}{' '}
                  {this.state.applicants.lastName}{' '}
                </NavLink>
              </button>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Checkdash;
