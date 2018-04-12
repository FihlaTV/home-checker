import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/css/reset.css';
import './styles/css/index.css';
//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//Components:
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

//if logged in, show login. else show home.

//LOAD PAGES BETWEEN HDR FTR
const App = () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
