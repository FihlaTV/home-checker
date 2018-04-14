import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = props => (
  <button className={props.className} value={props.value}>
    <NavLink to={props.path}>{props.text}</NavLink>
  </button>
);

export default Button;
