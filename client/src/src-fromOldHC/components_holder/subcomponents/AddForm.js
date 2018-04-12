import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
// import axios from "axios";

class AddForm extends Component {
  //make a new person from form.
  makePerson = e => {
    e.preventDefault();
    const pers = {
      firstName: ReactDOM.findDOMNode(this.refs.firstNameRef).value,
      lastName: ReactDOM.findDOMNode(this.refs.lastNameRef).value,
      address: ReactDOM.findDOMNode(this.refs.addressRef).value,
      city: ReactDOM.findDOMNode(this.refs.cityRef).value,
      stateProvence: ReactDOM.findDOMNode(this.refs.stateProvenceRef).value,
      postalCode: ReactDOM.findDOMNode(this.refs.postalCodeRef).value,
      email: ReactDOM.findDOMNode(this.refs.emailRef).value,
      mobile: ReactDOM.findDOMNode(this.refs.mobileRef).value,
      role: ReactDOM.findDOMNode(this.refs.roleRef).value
    };
    //setState here with new pers:
    this.props.addPerson(pers);
    this.resetForm();
  }; //end makePerson

  resetForm = () => {
    ReactDOM.findDOMNode(this.refs.firstNameRef).value = "";
    ReactDOM.findDOMNode(this.refs.lastNameRef).value = "";
    ReactDOM.findDOMNode(this.refs.addressRef).value = "";
    ReactDOM.findDOMNode(this.refs.cityRef).value = "";
    ReactDOM.findDOMNode(this.refs.stateProvenceRef).value = "tx";
    ReactDOM.findDOMNode(this.refs.postalCodeRef).value = "";
    ReactDOM.findDOMNode(this.refs.emailRef).value = "";
    ReactDOM.findDOMNode(this.refs.mobileRef).value = "";
    ReactDOM.findDOMNode(this.refs.roleRef).value = "applicant";
  };

  render() {
    return (
      <Fragment>
        <form className="addForm" onSubmit={this.makePerson}>
          <fieldset>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              ref="firstNameRef"
              type="text"
              placeholder="first name"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              ref="lastNameRef"
              type="text"
              placeholder="last name"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="role">Role</label>
            <select name="role" ref="roleRef">
              <option value="checker"> HomeChecker </option>
              <option value="applicant"> Applicant </option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="address">Street Address</label>
            <input
              name="address"
              ref="addressRef"
              type="text"
              placeholder="street address"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="city">City or Town</label>
            <input name="city" ref="cityRef" type="text" placeholder="city" />
          </fieldset>
          <fieldset>
            <label htmlFor="stateProvence">State</label>
            <select name="stateProvence" ref="stateProvenceRef">
              <option value="tx"> TX </option>
              <option value="nm"> NM </option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="postalCode">Zip or Postcode</label>
            <input
              name="postalCode"
              ref="postalCodeRef"
              type="text"
              placeholder="zip or postal code"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              ref="emailRef"
              type="text"
              placeholder="email"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="mobile">Mobile</label>
            <input
              name="mobile"
              ref="mobileRef"
              type="text"
              placeholder="###-###-####"
            />
          </fieldset>
          <button type="submit"> Add </button>
        </form>
      </Fragment>
    );
  }
}

export default AddForm;
