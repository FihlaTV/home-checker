import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-content">
          <h2>Contact</h2>
          <div>
            <p>
              Listen. Strange women lying in ponds distributing swords is no
              basis for a system of government. Supreme executive power derives
              from a mandate from the masses, not from some farcical aquatic
              ceremony.
            </p>
            <ol>
              <li>Well, she turned me into a newt.</li>
              <li>Well, I got better.</li>
              <li>I dunno. Must be a king.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
