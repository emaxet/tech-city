import React, { Component } from 'react'

class ChatConnections extends Component{
  
  render() {
    return (
      <div className="chatConnectionsContainer">
          <div className="connectionImage">
            <img src={ this.props.userImage || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' } />
          </div>
          <div className="connectionName">
            {this.props.username}
          </div>
      </div>
    )
  }
}

export default ChatConnections;