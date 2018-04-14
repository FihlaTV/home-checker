import React, { Component, Fragment } from "react";
import AddForm from "./subcomponents/AddForm";
// import EditForm from "./subcomponents/EditForm";
import SubHeader from "./subcomponents/SubHeader";

class PersonForms extends Component {
  render() {
    return (
      <Fragment>
        <SubHeader tagname="Roll Call of Names" />
        <AddForm addPerson={this.props.addPerson} />
        <button onClick={this.props.loadAllPersons}>Load All Names</button>
      </Fragment>
    );
  }
}

export default PersonForms;
