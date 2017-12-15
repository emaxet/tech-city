import React, { Component } from 'react';
import Eventlist from '../components/Eventlist'
import EventNav from '../components/EventNav'
import { Collapse } from 'reactstrap';

class Events extends Component {
  constructor(props) {
    super(props);

    this.togglefilter = this.togglefilter.bind(this);

    this.state = {
      'collapsed': false
    };
  }

  togglefilter() {
    this.setState({
      'collapsed': !this.state.collapsed
    });
  }
  
  render() {

    return (
      <div className="event">

        <button type="button" className="btn btn-primary navbar-btn" onClick={this.togglefilter}>
          <i className="glyphicon glyphicon-align-left"></i>
          Filter
        </button>  
        
        <Collapse isOpen={this.state.collapsed}>
          <div className="eventNav">
            <EventNav {...this.state} toggleSideNav={this.toggleSideNav} />
          </div>
        </Collapse>  
         
        <Collapse isOpen={!this.state.collapsed}> 
          <div>
            <Eventlist />
            <Eventlist />
            <Eventlist />
          </div>
        </Collapse>    
      </div>
    );
  }
}

export default Events;