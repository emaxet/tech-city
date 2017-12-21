import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';

class NewEvent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'creatorId': this.props.userId.sub || null,
      'typeId': 1,
      'title': '',
      'description': '',
      'dateStart': moment(),
      'dateEnd': moment(),
      "location": '',
      'timeStart': moment().format('hh:mm'),
      'timeEnd': moment().format('hh:mm'),
      'imageUrl': '',
      'keyword': '',
      'cityName': this.props.cityName
    }

    this.setDateStart = this.setDateStart.bind(this);
    this.setDateEnd = this.setDateEnd.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.settimeStart = this.settimeStart.bind(this);
    this.settimeEnd = this.settimeEnd.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(){
    axios.post(`http://localhost:3000/api/v1/${this.state.cityName}/events`, {
      'creator_id' : this.state.creatorId,
      'type_id'    : this.state.typeId,
      'city_id'    : this.props.cityId,
      'title'      : this.state.title,
      'description': this.state.description,
      'image'      : this.state.imageUrl,
      'keyword'    : this.state.keyword,
      'start_date' : this.state.dateStart.format('YYYY-MM-DD'),
      'end_date'   : this.state.dateEnd.format('YYYY-MM-DD'),
      'start_time' : this.state.timeStart,
      'end_time'   : this.state.timeEnd,
      'location'   : this.state.location,
      'cityName'   : this.state.cityName
    })
    .then(() => {
      this.props.toggleNewEvent();
    });
  }

  setDateStart(event){
    this.setState({
      'dateStart': event
    });
  }

  setDateEnd(event){
    this.setState({
      'dateEnd': event
    });
  }

  setLocation(event){
    this.setState({
      'location': event.target.value
    });
  }

  settimeStart(event){
    this.setState({
      'timeStart': event.target.value
    })
  }

  settimeEnd(event){
    this.setState({
      'timeEnd': event.target.value
    })
  }

  render() {

    return (
      <Modal isOpen={this.props.newEventCollapse} toggle={this.props.toggleNewEvent} className={this.props.className}>
      <ModalHeader toggle={this.props.toggleNewEvent}>New Event</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="eventTitle">Title</Label>
            <Input type="text" maxLength={50} name="eventTitle" id="eventTitle" placeholder="Title"
            onChange={(e) => {
              this.setState({
                'title': e.target.value
              })
            }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="eventKey">Key</Label>
            <Input type="text" maxLength={50} name="eventKey" id="eventKey" placeholder="Key"
            onChange={(e) => {
              this.setState({
                'keyword': e.target.value
              })
            }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="eventImage">Image URL</Label>
            <Input type="text" maxLength={100} name="eventImage" id="eventImage" placeholder="Image Url"
            onChange={(e) => {
              this.setState({
                'imageUrl': e.target.value
              })
            }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="eventDes">Description</Label>
            <Input type="textarea" maxLength="250" name="eventDes" id="eventDes" placeholder="Event Description"
            onChange={(e) => {
              this.setState({
                'description': e.target.value
              })
            }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="dateStart">Date Start</Label>
            <DatePicker name="dateStart" id="dateStart" selected={this.state.dateStart} onChange={this.setDateStart} />
          </FormGroup>

          <FormGroup>
            <Label for="endDate">End Start</Label>
            <DatePicker name="endDate" id="endDate" selected={this.state.dateEnd} onChange={this.setDateEnd} />
          </FormGroup>

          <FormGroup>
            <Label for="timeStart">Time Start</Label>
            <Input type="time" name="timeStart" id="timeStart" onChange={this.settimeStart} value={this.state.timeStart}/>
          </FormGroup>

          <FormGroup>
            <Label for="timeEnd">Time End</Label>
            <Input type="time" name="timeEnd" id="timeEnd" onChange={this.settimeEnd} value={this.state.timeEnd}/>
          </FormGroup>

          <FormGroup>
            <Label for="eventLocation">Location</Label>
            <Input type="text" maxLength="200" name="eventLocation" id="eventLocation" placeholder="Location" onChange={this.setLocation}/>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.submitForm}>Create New Event</Button>{' '}
        <Button color="secondary" onClick={this.props.toggleNewEvent}>Cancel</Button>
      </ModalFooter>
    </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.authentication.user
  };
}

export default connect(mapStateToProps)(NewEvent);
