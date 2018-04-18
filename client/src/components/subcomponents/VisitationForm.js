import React, { Component, Fragment } from 'react';
import {yesNoInside, yesNoOutside} from '../../questions';

class VisitationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greyhoundProof:"",
      largeDog:"",
      stairs:"",
      windows:"",
      cleaningProducts:"",
      miniBlinds:"",
      plants:"",
      medications:"",
      babyGate:"",
      persItems:"",
      doggieDoor:"",
      greyhoundProofText:"",
      largeDogText:"",
      stairsText:"",
      windowsText:"",
      cleaningProductsText:"",
      miniBlindsText:"",
      plantsText:"",
      medicationsText:"",
      babyGateText:"",
      persItemsText:"",
      doggieDoorText:"",
      sharpObj:"",
      holes:"",
      rottenFencing:"",
      nailsFencing:"",
      fertilizersBaits:"",
      toxicPlants:"",
      launching:"",
      sharpObjText:"",
      holesText:"",
      rottenFencingText:"",
      nailsFencingText:"",
      fertilizersBaitsText:"",
      toxicPlantsText:"",
      launchingText:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log('I entered the form');
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <h2>Home Check Form</h2>
          <h3>Inside</h3>
          {yesNoInside.map(idx=>(
            <fieldset className="fieldset-visit" key={idx}>
            <label htmlFor={idx[0]}>Q: {idx[1]}</label>
            <select name={idx[0]} onChange={this.handleInputChange}>
            <option value=""></option>
            <option value="yes">yes</option>
            <option value="no">no</option>
            </select>
            <textarea name={idx[0]+"Text"} onChange={this.handleInputChange}></textarea>
            </fieldset>
          ))}
          <h3>Outside</h3>
          {yesNoOutside.map(idx=>(
            <fieldset className="fieldset-visit" key={idx}>
            <label htmlFor={idx[0]}>Q: {idx[1]}</label>
            <select name={idx[0]} onChange={this.handleInputChange}>
            <option value=""></option>
            <option value="yes">yes</option>
            <option value="no">no</option>
            </select>
            <textarea  name={idx[0]+"Text"} onChange={this.handleInputChange}></textarea>
            </fieldset>
          ))}
          <input className="button" type="submit" value="Submit" />
        </form>
      </Fragment>
    );
  }
}

export default VisitationForm;
