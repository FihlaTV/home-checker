import React, { Component } from 'react';
import Navpills from './subcomponents/Navpills';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>HomeChecker</h1>
        <Navpills />
      </header>
    );
  }
}

export default Header;
