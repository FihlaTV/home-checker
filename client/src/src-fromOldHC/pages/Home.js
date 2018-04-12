import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admindash from "../components/Admindash";
// import Checkerdash from "../components/Checkerdash";
//views affected by logged in status

/*access to this component is if logged in. 
<Router>
  <Switch>
    
    
  </Switch>
</Router>
if as checker, show checker route.<Route path="/admindash" component={Admindash} />
if as admin, show admin route.<Route path="/checkerdash" component={Checkerdash} />*/
class Home extends Component {
  render() {
    return <Admindash />;
  }
}

export default Home;
