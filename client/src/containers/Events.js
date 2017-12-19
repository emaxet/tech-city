import React, { Component } from 'react';
import Eventlist from '../components/Eventlist'
import EventNav from '../components/EventNav'
import { Collapse } from 'reactstrap';
import axios from 'axios';
import NewEvent from '../components/NewEvent';

class Events extends Component {
  constructor(props) {
    super(props);

    this.togglefilter = this.togglefilter.bind(this);
    this.toggleNewEvent = this.toggleNewEvent.bind(this);

    const cityName = (this.props.location.pathname.split('/')[2]);

    this.state = {
      'filterCollapse': false,
      'eventsCollapse': true,
      'newEventCollapse': false,
      'eventlist': [],
      'cityName': cityName
    };
  }

  togglefilter() {
    this.setState({
      'filterCollapse': !this.state.filterCollapse,
      'eventsCollapse': !this.state.eventsCollapse
    });
  }

  toggleNewEvent() {
    this.setState({
      'newEventCollapse': !this.state.newEventCollapse
    });
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/${this.state.cityName}/events`)
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
    const eventlist = this.state.eventlist
      .map((event, index) => {
        return <Eventlist {...event} key={index}/>;
      })
      .reverse();

    return (
      <div className="event">

        <div className = "buttonGroup">
          <button type="button" className="btn btn-primary navbar-btn" onClick={this.togglefilter}>
            <i className="glyphicon glyphicon-align-left"></i>
            Filter
          </button>  

          <button type="button" className="btn btn-primary navbar-btn" onClick={this.toggleNewEvent}>
            <i className="glyphicon glyphicon-align-left"></i>
            New
          </button>  
        </div>        
        
        <Collapse isOpen={this.state.filterCollapse}>
          <div className="eventNav">
            <EventNav {...this.state} toggleSideNav={this.toggleSideNav} />
          </div>
        </Collapse>  
         
        <Collapse isOpen={this.state.eventsCollapse}> 
            {eventlist}
        </Collapse>

        <NewEvent newEventCollapse={this.state.newEventCollapse} toggleNewEvent={this.toggleNewEvent} cityName={this.state.cityName}/>
      </div>
    );
  }
}

export default Events;