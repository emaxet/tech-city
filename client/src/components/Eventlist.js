import React, { Component } from 'react'
import logo from '../images/logo.png'

class Eventlist extends Component {
  render() {
    return (
      <div className="eventItem">
        <img src={logo} alt='techcity' className='logo' />  
        <div className="panel panel-default">
          <h2 className="panel-header">Title</h2>  
          <div className="panel-body">
            <p>
              desc
            </p>
            <div className="panel-footer">
              footer
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Eventlist;