import React, { Component, Fragment } from 'react';

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
    this.addPerson = this.addPerson.bind(this);
    this.state = {
      persons: []
    };
  }

  //change state with dummy names
  loadAllPersons = () => {
    const newPersonsArr = [...personDataSample];
    this.setState({ persons: newPersonsArr });
  };
  addPerson = pers => {
    const newPersonsArr = [...personDataSample];
    newPersonsArr.push(pers);
    this.setState({ persons: newPersonsArr });

    //send data from form to api
    /**
   * handleClick = () => {
    axios
      .get("https://api.github.com/users/ihatetoast")
      .then(response => this.setState({ persons: response.body }));
  };
   */
    // saveFormData = () => {
    //   axios.get("http://localhost:8080/api/regperson")
    //   .then(response => this.setState({});
    // }; //end saveFormData
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
        </div>
        <div className="personList">
          <ul>
            {Object.keys(this.state.persons).map(key => (
              <PersonCard
                key={key}
                idx={key}
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
