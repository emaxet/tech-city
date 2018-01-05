import React, { Component } from 'react'

class ChatMessages extends Component{
  
  render() {
    return (
      <div className="chatMessageContainer">
          <div className="chatUserImage">
            <img src={ this.props.image || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' } />
          </div>
          <div className="messageContent">
            <div className="username">
              {this.props.name}
            </div>
            <div className="content">
              {this.props.message}
            </div>
          </div>
      </div>
    )
  }
}

export default ChatMessages;