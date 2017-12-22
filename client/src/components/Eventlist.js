import React, { Component } from 'react'
import { Fade } from "reactstrap";
import axios from 'axios';
import { connect } from 'react-redux';

class Eventlist extends Component {
  constructor(props) {
    super(props);
    this.heartClick = this.heartClick.bind(this);
    this.shareClick = this.shareClick.bind(this);
    this.trashClick = this.trashClick.bind(this);
    this.state = {
      heart: false,
      share: false,
      trash: false,
    }
  }
  
  heartClick() {
    this.setState({
      heart: !this.state.heart
    })
  }

  shareClick() {
    this.setState({
      share: !this.state.share
    })
  }

  trashClick() {
    axios.delete(`http://localhost:3000/api/v1/${this.props.name}/events/${this.props.eventId}`)
    .then(() => {
      this.props.updateApiEvents();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const iconStyle = {
      color : 'red'
    }

    function enforce_line_breaks(text){
      var many_strings = text.split('\n');
      return many_strings.map((s,index) => (<p key={index}> {s} </p>));
    }

    return (
      <Fade in={true} className="eventItem">
        <div className="panel panel-default">
          <div className="panel-header">
            <img src={this.props.image} alt='techcity' className='logo' />
            <h2>{this.props.title}</h2>    
          </div>  

          <div className="panel-body">
            <p>
              Date: {new Date(this.props.start_date).toDateString()} - {new Date(this.props.end_date).toDateString()}
            </p>
            <p>
              Time: {this.props.start_time} - {this.props.end_time}
            </p>
            <div>
              Description: <br/>
              <div className="container">
                {enforce_line_breaks(this.props.description)}
              </div>
            </div>
            <p> 
            Location: {this.props.location} 
            </p>
          </div>
          
          <div className="panel-footer">
            {this.props.user.sub === this.props.userId && <i className="fa fa-trash-o" aria-hidden="true" onClick={this.trashClick}></i>}
            <i className="fa fa-share-alt" aria-hidden="true" onClick={this.shareClick} style={this.state.share ? iconStyle : null}></i>
            <i className="fa fa-heartbeat" aria-hidden="true" onClick={this.heartClick} style={this.state.heart ? iconStyle : null}></i>
          </div>
        </div>
      </Fade>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user
  };
}

export default connect(mapStateToProps)(Eventlist);