import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavbar from './MainNavbar';
import CityHeader from '../components/CityHeader';
import CityNav from '../components/CityNav';
import Events from './Events';
import Jobs from './Jobs';
import ChatList from './ChatList';
import ChatFeed from '../components/Chat';
import { connect } from 'react-redux';


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
                <Route exact path={`/city/${this.props.match.params.city_name}/chat`} render={props => <ChatList {...props} />} />
                <Route exact path={`/city/${this.props.match.params.city_name}/chat/:chatId`} render={(props) => (this.props.auth) ? <ChatFeed {...props} /> : <Redirect to='/login' /> } />
              </Switch>
            </div>
          </div>
          <div className='footer'></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authentication.isAuthenticated
  };
}

export default connect(mapStateToProps)(CityPage);