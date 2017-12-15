import React, { Component } from 'react'
import logo from '../images/logo.png'

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
      <div className="eventItem">
        <img src={logo} alt='techcity' className='logo' />  
        <div className="panel panel-default">
          <h2 className="panel-header">OpenLate - Vancouver Tech Talks and Hack Nights</h2>  
          <div className="panel-body">
            <p> Date: 2018/1/11 9:00pm </p>
            <p>
              OpenLate provides tech talks and hack nights at the OpenDNS office in downtown Vancouver. Events generally run from 6:30 PM to 9:30 PM every other Wednesday at 675 West Hastings St, Suite 500.
            </p>
            <p> Location: Lighthouse Labs </p>
            <div className="panel-footer">
              <i className="fa fa-trash-o" aria-hidden="true" onClick={this.trashClick} style={this.state.trash ? iconStyle : null}></i>
              <i className="fa fa-share-alt" aria-hidden="true" onClick={this.shareClick} style={this.state.share ? iconStyle : null}></i>
              <i className="fa fa-heartbeat" aria-hidden="true" onClick={this.heartClick} style={this.state.heart ? iconStyle : null}></i>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Eventlist;