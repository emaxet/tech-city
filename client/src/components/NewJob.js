import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class NewJob extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'company' : '',
      'title': '',
      'url': '',
      'description': '',
      'cityName': this.props.cityName
    };

    this.toogleSubmit = this.toogleSubmit.bind(this);
  }

  toogleSubmit(){  
    axios.post(`http://localhost:3000/api/v1/${this.state.cityName}/jobs`, {
      company: this.state.company,
      title: this.state.title,
      url: this.state.url,
      description: this.state.description,
      cityName: this.state.cityName
    })
    .then(() => {
      this.props.toogleAddJob();
      window.location.reload();
    });    
  }

  render() {
    return (
      <Modal isOpen={this.props.addJob} toggle={this.props.toogleAddJob} className={this.props.className}>
      <ModalHeader toggle={this.props.toogleAddJob}>New Event</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="jobCompany">Company</Label>
            <Input type="text" maxLength={50} name="jobCompany" id="jobCompany" placeholder="Company" 
            onChange={(e) => {
              this.setState({
                'company': e.target.value
              })
            }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="jobTitle">Title</Label>
            <Input type="text" maxLength={50} name="jobTitle" id="jobTitle" placeholder="Title" 
            onChange={(e) => {
              this.setState({
                'title': e.target.value
              })
            }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="jobUrl">Job URL</Label>
            <Input type="text" maxLength={100} name="jobUrl" id="jobUrl" placeholder="Job URL http://" 
            onChange={(e) => {
              this.setState({
                'url': e.target.value
              })
            }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="jobDescription">Description</Label>
            <Input type="textarea" name="jobDescription" id="jobDescription" placeholder="Description" 
            onChange={(e) => {
              this.setState({
                'description': e.target.value
              })
            }}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.toogleSubmit}>Create New Job</Button>{' '}
        <Button color="secondary" onClick={this.props.toogleAddJob}>Cancel</Button>
      </ModalFooter>
    </Modal>
    )
  }
}

export default NewJob;