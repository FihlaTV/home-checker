import React, { Component, Fragment } from 'react';
import API from '../utils/API';
import PersonForms from './PersonForms';
import SubHeader from './subcomponents/SubHeader';
import PersonCard from './subcomponents/PersonCard';

//sample names to play with:
import personDataSample from '../samplePeople.json';
/**
 * todo:
 * bring the person state up here
 */

class Admindash extends Component {
  constructor(props) {
    super(props);
    this.loadAllPersons = this.loadAllPersons.bind(this);
    // this.addPerson = this.addPerson.bind(this);
    this.state = {
      persons: []
    };
  }

  loadAllPersons = () => {
    API.getPersons()
      .then(res => this.setState({ persons: res.data }))
      .catch(err => console.log(err));
  };
  // addPerson = pers => {
  //   const newPersonsArr = [...personDataSample];
  //   newPersonsArr.push(pers);
  //   this.setState({ persons: newPersonsArr });
  // };

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
        </div>
        <div className="personList">
          <ul>
            {Object.keys(this.state.persons).map(key => (
              <PersonCard
                key={key}
                id={key}
                details={this.state.persons[key]}
              />
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Admindash;
