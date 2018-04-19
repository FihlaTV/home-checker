import React, { Component, Fragment } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
import LoginPage from './containers/LoginPage';
import LogoutFunction from './containers/LogoutFunction';
import SignUpPage from './containers/SignUpPage';
import DashboardPage from './containers/DashboardPage';
import Auth from './modules/Auth';
import Admindash from './components/Admindash';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} {...rest} />
      )
    }
  />
);

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
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

            <PropsRoute
              exact
              path="/"
              component={HomeCard}
              toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
            />
            <PropsRoute exact path="/about" component={About} />
            <PropsRoute exact path="/contact" component={Contact} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute exact path="/admindash" component={Admindash} />

            <LoggedOutRoute
              path="/login"
              component={LoginPage}
              toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
            />
            <LoggedOutRoute path="/signup" component={SignUpPage} />
            <Route path="/logout" component={LogoutFunction} />
            <Footer />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
