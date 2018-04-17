import React, { Component, Fragment } from 'react';
import { Input, FormBtn, Radio, TextArea } from './Form';

class VisitationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greyhoundProof: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    console.log(e.target.value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    console.log('I entered the form');
  };
  handleOptionChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: e.target.value
    });
    console.log(this.state.greyhoundProof);
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <h2>Home Check Form</h2>
          <h3>Inside</h3>
          <fieldset>
            <label>
              Is the house greyhound proof? (i.e. sharp edges, breakable items,
              books, pictures, etc. in dog’s reach). If N provide details.
            </label>
            <Radio
              checked={this.state.greyhoundProof}
              onChange={this.handleOptionChange}
            />
          </fieldset>

          <h3>Outside</h3>
        </form>
      </Fragment>
    );
  }
}

export default VisitationForm;

{
  /* <fieldset>
            <label htmlFor="firstName">First Name</label>
            <input
              value={this.state.firstName}
              name="firstName"
              ref="firstNameRef"
              type="text"
              placeholder="first name"
              onChange={this.handleInputChange}
            />
          </fieldset> */
}
