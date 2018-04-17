import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import API from '../../utils/API';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      stateProvence: '',
      postalCode: '',
      email: '',
      mobile: '',
      role: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // componentDidMount() {
  //   this.props.loadAllPersons();
  // }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const pers = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      stateProvence: this.state.stateProvence || 'tx',
      postalCode: this.state.postalCode,
      email: this.state.email,
      mobile: this.state.mobile,
      role: this.state.role || 'applicant'
    };
    console.log(pers);
    API.savePerson(pers)
      .then(res => this.props.loadAllPersons)
      .catch(err => console.log(err));
    this.resetForm();
  };

  resetForm = () => {
    ReactDOM.findDOMNode(this.refs.firstNameRef).value = '';
    ReactDOM.findDOMNode(this.refs.lastNameRef).value = '';
    ReactDOM.findDOMNode(this.refs.addressRef).value = '';
    ReactDOM.findDOMNode(this.refs.cityRef).value = '';
    ReactDOM.findDOMNode(this.refs.stateProvenceRef).value = 'tx';
    ReactDOM.findDOMNode(this.refs.postalCodeRef).value = '';
    ReactDOM.findDOMNode(this.refs.emailRef).value = '';
    ReactDOM.findDOMNode(this.refs.mobileRef).value = '';
    ReactDOM.findDOMNode(this.refs.roleRef).value = 'applicant';
  };

  render() {
    return (
      <Fragment>
        <form className="addForm" onSubmit={this.handleFormSubmit}>
          <fieldset>
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
            <label htmlFor="lastName">Last Name</label>
            <input
              value={this.state.lastName}
              name="lastName"
              ref="lastNameRef"
              type="text"
              placeholder="last name"
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="role">Role</label>
            <select
              name="role"
              ref="roleRef"
              value={this.state.role}
              onChange={this.handleInputChange}
            >
              <option value="checker"> HomeChecker </option>
              <option value="applicant"> Applicant </option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="address">Street Address</label>
            <input
              value={this.state.address}
              name="address"
              ref="addressRef"
              type="text"
              placeholder="street address"
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="city">City or Town</label>
            <input
              name="city"
              ref="cityRef"
              type="text"
              placeholder="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="stateProvence">State</label>
            <select
              name="stateProvence"
              ref="stateProvenceRef"
              value={this.state.stateProvence}
              onChange={this.handleInputChange}
            >
              <option value="tx"> TX </option>
              <option value="nm"> NM </option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="postalCode">Zip or Postcode</label>
            <input
              value={this.state.postalCode}
              name="postalCode"
              ref="postalCodeRef"
              type="text"
              placeholder="zip or postal code"
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              name="email"
              ref="emailRef"
              type="text"
              placeholder="email"
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="mobile">Mobile</label>
            <input
              value={this.state.mobile}
              name="mobile"
              ref="mobileRef"
              type="text"
              placeholder="###-###-####"
              onChange={this.handleInputChange}
            />
          </fieldset>
          <button type="submit"> Add </button>
        </form>
      </Fragment>
    );
  }
}

export default AddForm;
