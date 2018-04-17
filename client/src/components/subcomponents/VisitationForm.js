import React, { Component, Fragment } from 'react';

class VisitationForm extends Component {
  constructor(props) {
    super(props);
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
        <form className="addForm" onSubmit={this.handleFormSubmit}>
          <h2>Home Check Form</h2>
          <button type="submit"> Save form </button>
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
          </fieldset>
          
          <fieldset>
            <label htmlFor="role">Yes No Question</label>
            <select
              name="q1"
              ref="q1"
              value={this.state.q1}
              onChange={this.handleInputChange}
            >
              <option value="checker"> Yes </option>
              <option value="applicant"> No </option>
            </select>
          </fieldset>
           */
}
