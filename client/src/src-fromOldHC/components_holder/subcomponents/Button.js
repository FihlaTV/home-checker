import React from "react";
import { NavLink } from "react-router-dom";

const Button = props => (
  <button value={props.value}>
    <NavLink to={props.path}>{props.text}</NavLink>
  </button>
);

export default Button;
