import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, CardText, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class JobBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.setmodal = this.setmodal.bind(this);
    this.trashClick = this.trashClick.bind(this);
  }

  setmodal(e){
    this.setState({
      modal : !this.state.modal
    });
  }

  trashClick(){
    axios.delete(`http://localhost:3000/api/v1/${this.props.name}/jobs/${this.props.id}`)
    .then(() => {
      this.setState({
        modal : !this.state.modal
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    function enforce_line_breaks(text){
      var many_strings = text.split('\n');
      return many_strings.map((s, index) => (<p key={index}>{s}</p>));
    }
    
    function shorten(text) {
      return text.length > 100 ? text.substring(0, 100) + "..." : text;
    }

    
    return (
      <Col sm="6" md="6" xl="4">
        <Card className="job-box" body>
          <CardHeader tag="h3" className="text-center">{this.props.company}</CardHeader>
          <CardBody className="job-body">
            <h5 className="job-title">{this.props.title}</h5>
            <CardText>
              {shorten(this.props.description)}
            </CardText>
            <Button onClick={this.setmodal}>More Info</Button>
          </CardBody>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.setmodal} style={{'maxWidth': '70%'}}>
          <ModalHeader toggle={this.setmodal}>{this.props.company}</ModalHeader>
          <ModalBody>
            <h3>Title: {this.props.title}</h3><br/>
            <h5>Description:</h5> <br/>
            {enforce_line_breaks(this.props.description)}
            <br/>
            <br/>
            <h5>Link: <br/><a target='_blank' href={'http://' + this.props.url}>{this.props.url}</a></h5>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.setmodal}>Close</Button>
            <i className="fa fa-trash-o" aria-hidden="true" onClick={this.trashClick}></i>
          </ModalFooter>
        </Modal>
      </Col>
    );
  }
  
}

export default JobBox;