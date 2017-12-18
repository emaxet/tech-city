import React, { Component } from 'react';
import Eventlist from '../components/Eventlist'
import EventNav from '../components/EventNav'
import { Collapse } from 'reactstrap';
import axios from 'axios';

class Events extends Component {
  constructor(props) {
    super(props);

    this.togglefilter = this.togglefilter.bind(this);

    this.state = {
      'collapsed': false,
      'eventlist': []
    };
  }

  togglefilter() {
    this.setState({
      'collapsed': !this.state.collapsed
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/Vancouver/events')
      .then((res) => {
        this.setState({
          'eventlist': res.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    const eventlist = this.state.eventlist.map((event, index) => {
      return <Eventlist {...event} key={index}/>;
    });

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
            {eventlist}
        </Collapse>    
      </div>
    );
  }
}

export default Events;