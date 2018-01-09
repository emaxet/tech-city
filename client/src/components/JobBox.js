import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Fade, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class JobBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.setmodal = this.setmodal.bind(this);
    this.trashClick = this.trashClick.bind(this);
    this.enforce_line_breaks = this.enforce_line_breaks.bind(this);
    this.shorten = this.shorten.bind(this);
  }

  setmodal(e){
    this.setState({
      modal : !this.state.modal
    });
  }

  trashClick(){
    axios.delete(`http://localhost:3000/api/v1/${this.props.name}/jobs/${this.props.id}`)
    .then(() => {
      this.props.updateJobsFromAPI();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  enforce_line_breaks(text){
    var many_strings = text.split('\n');
    return many_strings.map((s, index) => (<p key={index}>{s}</p>));
  }

  shorten(text) {
    return text.length > 50 ? text.substring(0, 50) + "..." : text;
  }

  render(){
    return (
      <Fade in={true} className="eventItem">
        <Card style={{width: 245}}>
        <div onClick={this.setmodal}>
        <CardContent style={{height: 145}}>
          <Typography type="headline" component="h2">
          {this.props.title}
          </Typography>
          <Typography component="p">
          {this.shorten(this.props.description)} 
          </Typography>
        </CardContent>
        </div>

        <CardActions>
          <Button dense color="primary">
          <i className="fa fa-share" aria-hidden="true"></i>
          </Button>

          <Button dense color="primary">
          <i className="fa fa-heart" aria-hidden="true"></i>
          </Button>

          {this.props.user.sub === this.props.userId && <Button dense color="primary" onClick={this.trashClick}>
          <i className="fa fa-trash" aria-hidden="true"></i>
          </Button>}
        </CardActions>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.setmodal} style={{'maxWidth': '70%'}}>
          <ModalHeader toggle={this.setmodal}>{this.props.company}</ModalHeader>
          <ModalBody>
            <h3>Title: {this.props.title}</h3><br/>
            <h5>Description:</h5> <br/>
            {this.enforce_line_breaks(this.props.description)}
            <br/>
            <br/>
            <h5>Link: <br/><a target='_blank' href={this.props.url}>{this.props.url}</a></h5>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.setmodal}>Close</Button>
          </ModalFooter>
        </Modal>
      </Fade>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user
  };
}

export default connect(mapStateToProps)(JobBox);