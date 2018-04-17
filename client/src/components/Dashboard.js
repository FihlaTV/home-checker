import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from './subcomponents/Button';
import Admindash from './Admindash';
import Checkdash from './Checkdash';
import VisitationForm from './subcomponents/VisitationForm';

const Dashboard = ({ secretData, user }) => (
  <Card className="dashboard-container">
    <CardTitle
      title="Development Dashboard"
      subtitle="Dev Notes: Are you here as an administrator or home checker?"
    />
    {secretData && (
      <CardText style={{ fontSize: '16px', color: 'green' }}>
        Welcome <strong>{user.name}</strong>!<br />
        {secretData}
      </CardText>
    )}

    <Router>
      <Fragment>
        <div className="dash-btn">
          <Button className="dashBtn" path="/admindash" text="Administrator" />
          <Button className="dashBtn" path="/checkdash" text="Home Checker" />
        </div>
        <Route exact path="/admindash" component={Admindash} />
        <Route exact path="/checkdash" component={Checkdash} />
        <Route path="/visit" component={VisitationForm} />
      </Fragment>
    </Router>
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
