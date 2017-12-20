import React, { Component } from 'react'
import { Input, InputGroup, InputGroupButton, Button } from 'reactstrap';
import ChatMessages from '../components/ChatMessages';
import io from 'socket.io-client';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
      endpoint: 'http://localhost:8080'
    };
    this.newMessage = this.newMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.inputBarEnter = this.inputBarEnter.bind(this);
  }

  newMessage(e) {
    this.setState({
      newMessage: e.target.value
    })
  }

  submitMessage(e) {
    const socket = io(this.state.endpoint);
    const message = this.state.newMessage;
    socket.emit('chat message', message);
  }

  inputBarEnter(e) {
    if (e.key === 'Enter') {
      this.submitMessage(e);
    }
  }

  componentDidMount() {
    const socket = io(this.state.endpoint);
    socket.on('chat message', (msg) => {
      this.setState({
        messages: this.state.messages.concat({ name: 'Username', message: msg})
      });
    });
  }

  render() {
    const chatMessages = this.state.messages.map((e, index) => {
      return <ChatMessages {...e} key={index}/>
    })

    return (
      <div className="cityChat">
        <div className="inputBar">
          <InputGroup className="cityChat">
            <Input type="text" id="chatBar" name="chatBar" placeholder="Left Your Message" onChange={this.newMessage} onKeyPress={this.inputBarEnter}></Input>
            <InputGroupButton type="submit"><Button onClick={this.submitMessage.bind(this)}>Submit</Button></InputGroupButton>
          </InputGroup>
        </div>

        <div className="chatMessage">
          {chatMessages}
        </div>
      </div>
    )
  }
}

export default Chat;