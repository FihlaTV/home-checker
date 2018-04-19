import React, { Component } from 'react';
import Image from '../images/fam.JPG';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <h3>HomeChecker</h3>
          <div className="about-text">
            <p>
              The process of animal rescue adoption has many steps, and each
              one, while necessary, is a speed bump on road between the animal
              and its new forever home. Checking the home of the potential
              adopter is one of the bigger hurdles.
            </p>
            <p>
              HomeChecker allows the volunteer (checker) to assess, fill out a
              form, and send the form to the adoption agency within minutes of
              the visit. It saves time and resources in two ways:
            </p>
            <ul>
              <li>
                In lieu of printing out the survey for the visit and entering
                the checker's notes afterward, the survey is saved as a PDF and
                then sent by email or text to the adoption agency.
              </li>
              <li>
                HomeChecker also allows the checker to have the potential
                adopters' information (address and mobile) at the ready so that
                information is at hand and not lost in a sea of emails.
              </li>
            </ul>

            <h3>Katy Cassidy @ ihatetoast</h3>
            <p>
              Katy is the proud mum of a three-legged greyhound from{' '}
              <a
                href="http://www.gapqld.com.au/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Greyhound Adoption Program – Queensland
              </a>{' '}
              (Australia) and a saluki from{' '}
              <a
                href="http://galtx.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Greyhound Adoption League of Texas
              </a>. She has volunteered as a foster carer and homechecker for
              adoption groups in Queensland, Australia, and in Texas, USA.
              Currently, her house is full, so she helps by doing home checks
              and fixing this part of the process.
            </p>
            <p>She does not like toast.</p>

            <figure>
              <img
                alt="greyhound, saluki hound, cattle dog, two women, and santa in front of a Christmas tree"
                src={Image}
              />
              <figcaption>Katy and the family</figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
