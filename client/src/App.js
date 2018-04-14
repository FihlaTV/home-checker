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
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import LogoutFunction from './containers/LogoutFunction';
import SignUpPage from './containers/SignUpPage';
import DashboardPage from './containers/DashboardPage';
import Auth from './modules/Auth';

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
              <div className="top-bar-left">
                <Link to="/">React App</Link>
              </div>
              {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/logout">Log out</Link>
                </div>
              ) : (
                <div className="top-bar-right">
                  <Link to="/login">Log in</Link>
                  <Link to="/signup">Sign up</Link>
                </div>
              )}
            </div>

            <PropsRoute
              exact
              path="/"
              component={HomePage}
              toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
            />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <LoggedOutRoute
              path="/login"
              component={LoginPage}
              toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
            />
            <LoggedOutRoute path="/signup" component={SignUpPage} />
            <Route path="/logout" component={LogoutFunction} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

/*
FROM CRA
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/
