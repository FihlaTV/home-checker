import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Modal, Row } from 'react-materialize';

const Login = props => (
  <nav className="login">
    <h2>HomeChecker Login</h2>
    <Modal
      header="Modal Header"
      trigger={<Button waves="light">Sign in</Button>}
    >
      <Row>
        <Input name="email" type="email" label="Email" s={12} />
        <Input name="password" type="password" label="Password" s={12} />
        <Input name="cfm_pwd" type="cfm_pwd" label="Confirm password" s={12} />
        <div>
          <Button waves="light">Sign in</Button>
        </div>
      </Row>
    </Modal>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
