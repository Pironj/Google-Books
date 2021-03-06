import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
     <Router>
       <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
       </div>
     </Router>
    );
  }
}

export default App;
