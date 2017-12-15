import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CityPage from './CityPage';
import Register from './Register';
import Login from './Login';
import '../css/app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} render={props => <Home {...props} />} />
          <Route path={"/city"} render={props => <CityPage {...props} />} />
          <Route path={"/register"} render={props => <Register {...props} />} />
          <Route path={"/login"} render={props => <Login {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
