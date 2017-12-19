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
      'description': ''
    };

    this.toogleSubmit = this.toogleSubmit.bind(this);
  }

  toogleSubmit(){

  }

  render() {
    return (
      <Modal isOpen={this.props.addJob} toggle={this.props.toogleAddJob} className={this.props.className}>
      <ModalHeader toggle={this.props.toogleAddJob}>New Event</ModalHeader>
      <ModalBody>
        <Form>
        <FormGroup>
          <Label for="jobCompany">Company</Label>
          <Input type="text" name="jobCompany" id="jobCompany" placeholder="Company" 
          onChange={(e) => {
            this.setState({
              'company': e.target.value
            })
          }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="jobTitle">Title</Label>
          <Input type="text" name="jobTitle" id="jobTitle" placeholder="Title" 
          onChange={(e) => {
            this.setState({
              'title': e.target.value
            })
          }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="jobUrl">Job URL</Label>
          <Input type="text" name="jobUrl" id="jobUrl" placeholder="Job URL" 
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
        <Button color="primary" onClick={this.state.toogleSubmit}>Create New Job</Button>{' '}
        <Button color="secondary" onClick={this.props.toogleAddJob}>Cancel</Button>
      </ModalFooter>
    </Modal>
    )
  }
}

export default NewJob;