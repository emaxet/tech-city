import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavbar from './MainNavbar';
import CityHeader from '../components/CityHeader';
import CityNav from '../components/CityNav';
import Events from './Events';
import Jobs from './Jobs';
import Chat from './Chat';


class CityPage extends Component{
  render(){
    return(
      <div>
        <MainNavbar />
        <div className="cityPage">
          <div className='header'></div>
          <div className='main'>
            <CityHeader city_name={this.props.match.params.city_name}/>
            <CityNav city_name={this.props.match.params.city_name}/>
            <div className="cityContent">
              <Switch>
                <Route exact path={`/city/${this.props.match.params.city_name}`} render={props => <Events {...props} />} />
                <Route exact path={`/city/${this.props.match.params.city_name}/events`} render={props => <Events {...props} />} />
                <Route exact path={`/city/${this.props.match.params.city_name}/jobs`} render={props => <Jobs {...props} />} />
                <Route exact path={`/city/${this.props.match.params.city_name}/chat`} render={props => <Chat {...props} />} />
              </Switch>
            </div>
          </div>
          <div className='footer'></div>
        </div>
      </div>
    )
  }
}

export default CityPage;