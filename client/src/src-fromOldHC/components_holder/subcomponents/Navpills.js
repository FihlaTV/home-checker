import React from "react";
import { NavLink } from "react-router-dom";

const Navpills = () => (
  <nav className="navpills">
    <ul className="navButtons">
      <li>
        <div
          className={
            window.location.pathname === "/" ? "active-tab" : "inactive-tab"
          }
        >
          <NavLink to="/">Home</NavLink>
        </div>
      </li>
      <li>
        <div
          className={
            window.location.pathname === "/about"
              ? "active-tab"
              : "inactive-tab"
          }
        >
          <NavLink to="/about">About</NavLink>
        </div>
      </li>
      <li>
        <div
          className={
            window.location.pathname === "/contact"
              ? "active-tab"
              : "inactive-tab"
          }
        >
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </li>
    </ul>
  </nav>
);

export default Navpills;
