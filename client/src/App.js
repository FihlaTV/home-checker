import React, { Component, Fragment } from 'react';

// import routes from './routes.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeCard from './components/HomeCard';
import About from './containers/About';
import Contact from './containers/Contact';
import Admindash from './components/Admindash';
import Checkdash from './components/Checkdash';

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   authenticated: false
    // };
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <div className="top-bar">
            <div className="link-div">
              <Link to="/">Home</Link>
            </div>
            <div className="link-div">
              <Link to="/about">About</Link>
            </div>
            <div className="link-div">
              <Link to="/contact">Contact</Link>
            </div>
            {this.state.authenticated ? (
              <div className="link-div-holder">
                <div className="link-div-twin">
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="link-div-twin">
                  <Link to="/logout">Log out</Link>
                </div>
              </div>
            ) : (
              <div className="link-div-holder">
                <div className="link-div-twin">
                  <Link to="/login">Sign in</Link>
                </div>
                <div className="link-div-twin">
                  <Link to="/signup">Sign up</Link>
                </div>
              </div>
            )}
          </div>
          <PropsRoute exact path="/about" component={About} />
          <PropsRoute exact path="/contact" component={Contact} />
          <PropsRoute exact path="/admindash" component={Admindash} />
          <PropsRoute exact path="/checkdash" component={Checkdash} />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
