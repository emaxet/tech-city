import React, { Component } from 'react'
import { Fade } from "reactstrap";

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
    this.setState({
      trash: !this.state.trash
    })
  }
  render() {
    const iconStyle = {
      color : 'red'
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
            <p>
              Description: {this.props.description}
            </p>
            <p> 
            Location: {this.props.location} 
            </p>
          </div>
          
          <div className="panel-footer">
            <i className="fa fa-trash-o" aria-hidden="true" onClick={this.trashClick} style={this.state.trash ? iconStyle : null}></i>
            <i className="fa fa-share-alt" aria-hidden="true" onClick={this.shareClick} style={this.state.share ? iconStyle : null}></i>
            <i className="fa fa-heartbeat" aria-hidden="true" onClick={this.heartClick} style={this.state.heart ? iconStyle : null}></i>
          </div>
        </div>
      </Fade>
    )
  }
}

export default Eventlist;