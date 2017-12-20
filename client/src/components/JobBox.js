import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, CardText, Col, Collapse } from 'reactstrap';

class JobBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.setCollapse = this.setCollapse.bind(this);
  }

  setCollapse(e){
    this.setState({
      collapse : !this.state.collapse
    });
  }

  render(){
    return (
      <Col sm="6" md="6" xl="4">
        <Card className="job-box" body>
          <CardHeader tag="h3" className="text-center">{this.props.company}</CardHeader>
          <CardBody className="job-body">
            <h5 className="job-title">{this.props.title}</h5>
            <Collapse isOpen={this.state.collapse}>
              <CardText>
                <Button onClick={this.setCollapse}>Close</Button>
                <br/>
                {this.props.description} 
                <br/>
                <a target='_blank' href={'http://' + this.props.url}>{this.props.url}</a>
                <br/>
                <Button onClick={this.setCollapse}>Close</Button>
              </CardText>
            </Collapse>
            <Button onClick={this.setCollapse}>More Info</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
  
}

export default JobBox;