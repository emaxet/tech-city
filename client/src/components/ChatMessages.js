import React, { Component } from 'react'
import { Media } from 'reactstrap';

class ChatMessages extends Component{
  
  render() {
    return (
      <Media>
        <Media body>
          <Media heading className="heading">
            {this.props.name}
          </Media>
          <Media className="body">
            {this.props.message}
          </Media>
          <Media className="icon">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            <i className="fa fa-thumbs-down" aria-hidden="true"></i>
          </Media>
        </Media>
      </Media>
    )
  }
}

export default ChatMessages;