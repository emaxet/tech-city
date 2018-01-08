import React, { Component } from 'react'
import { Fade } from "reactstrap";
import axios from 'axios';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Eventlist extends Component {
  constructor(props) {
    super(props);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.state = {
      modal: false,
      likeColor: [].concat(this.props.like).includes(this.props.user.sub.toString())? 'red': '',
      like: [].concat(this.props.like),
      attend: this.props.attend
    }
    this.enforce_line_breaks = this.enforce_line_breaks.bind(this);
    this.setmodal = this.setmodal.bind(this);
    this.shorten = this.shorten.bind(this);
    this.eventLike = this.eventLike.bind(this);
    this.putEventLike = this.putEventLike.bind(this);
  }

  eventLike(){
    new Promise((resolve, reject) => {
      let likeArr = this.state.like;
      let buttonColor = this.state.likeColor;
      if(this.state.likeColor === ''){
        buttonColor = 'red';
        likeArr = likeArr.includes(this.props.user.sub.toString())? likeArr : likeArr.concat([this.props.user.sub.toString()]);
      } else{
        buttonColor = '';
        likeArr = likeArr.splice(likeArr.indexOf(this.props.user.sub.toString()), 0);
      }
      resolve({buttonColor, likeArr})
    }).then((data) => {
      this.setState({
        likeColor: data.buttonColor,
        like: data.likeArr
      });
    }).then(() => {
      this.putEventLike();
    });
  }

  putEventLike(){
    axios.put(`/api/v1/${this.props.name}/events/${this.props.eventId}/like`, {'like': this.state.like})
      .then(() => {
        this.props.updateApiEvents();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  deleteEvent() {
    axios.delete(`http://localhost:3000/api/v1/${this.props.name}/events/${this.props.eventId}`)
    .then(() => {
      this.props.updateApiEvents();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  setmodal(e){
    this.setState({
      modal : !this.state.modal
    });
  }

  enforce_line_breaks(text){
    var many_strings = text.split('\n');
    return many_strings.map((s, index) => (<p key={index}>{s}</p>));
  }

  shorten(text) {
    return text.length > 20 ? text.substring(0, 20) + "..." : text;
  }

  render() { 
    return (
      <Fade in={true} className="eventItem">
      <Card style={{width: 245}}>
        <div onClick={this.setmodal}>
        <CardMedia
          style={{height: 200}}
          image={this.props.image}
        />
        <CardContent style={{height: 100}}>
          <Typography type="headline" component="h2">
          {this.props.title}
          </Typography>
          <Typography component="p">
          {this.shorten(this.props.description)} 
          </Typography>
        </CardContent>
        </div>
        <CardActions>
          {
            this.props.auth &&
            <Button dense color="primary">
            <i className="fa fa-share" aria-hidden="true"></i>
            </Button>
          }

          {
            this.props.auth &&
            <Button dense color="primary" style={{color: this.state.likeColor}} onClick={this.eventLike}>
            <i className="fa fa-heart" aria-hidden="true"></i>
            </Button>
          }

          {
            this.props.user.sub === this.props.userId && 
            <Button dense color="primary" onClick={this.deleteEvent}>
            <i className="fa fa-trash" aria-hidden="true"></i>
            </Button>
          }
        </CardActions>
      </Card>

      <Modal isOpen={this.state.modal} toggle={this.setmodal} style={{'maxWidth': '70%'}}>
        <ModalHeader toggle={this.setmodal}>Title: {this.props.title}</ModalHeader>
        <ModalBody>
          <h5>Description:</h5>
          <div className="container">
          {this.enforce_line_breaks(this.props.description)}
          </div>

          <h5>Start Date:</h5>
          <div className="container">
          {this.props.start_date.substring(0,10)}
          </div>

          <h5>End Date:</h5>
          <div className="container">
          {this.props.end_date.substring(0,10)}
          </div>

          <h5>Start Time:</h5>
          <div className="container">
          {this.props.start_time}
          </div>

          <h5>End Time:</h5>
          <div className="container">
          {this.props.end_time}
          </div>

          <h5>Location:</h5>
          <div className="container">
          {this.props.location}
          </div>

        </ModalBody>
        <ModalFooter>
          <Button dense color="primary" onClick={this.setmodal}>Close</Button>
        </ModalFooter>
      </Modal>

      </Fade>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authentication.isAuthenticated,
    user: state.authentication.user
  };
}
export default connect(mapStateToProps)(Eventlist);