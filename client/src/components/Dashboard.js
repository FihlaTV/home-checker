import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from './subcomponents/Button';
import Admindash from './Admindash';
import Checkdash from './Checkdash';
import VisitationForm from './subcomponents/VisitationForm';

const Dashboard = ({ secretData, user }) => (
  <div className="main-dashboard-container">
    <h3>Development Dashboard</h3>
    <h4>Dev Notes: Are you here as admin or checker?</h4>

    {secretData && (
      <h4>
        Welcome <strong>{user.name}</strong>!<br />
        {secretData}
      </h4>
    )}

    <Router>
      <Fragment>
        <div className="dash-btn">
          <Button
            className="dashBtn"
            path="/dashboard/admindash"
            text="Administrator"
          />
          <Button
            className="dashBtn"
            path="/dashboard/checkdash"
            text="Home Checker"
          />
        </div>
        <Route exact path="/dashboard/admindash" component={Admindash} />
        <Route exact path="/dashboard/checkdash" component={Checkdash} />
        <Route path="/dashboard/visit" component={VisitationForm} />
      </Fragment>
    </Router>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
