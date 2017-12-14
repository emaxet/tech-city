import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CityPage from './CityPage'
import '../css/app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} render={props => <Home {...props} />} />
          <Route path={"/city"} render={props => <CityPage {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
