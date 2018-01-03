import React, { Component } from 'react'
import { Input, InputGroup, InputGroupButton, Button } from 'reactstrap';
import ChatMessages from '../components/ChatMessages';
import io from 'socket.io-client';
import axios from 'axios';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
      endpoint: 'http://localhost:8080',
      chatId: this.props.location.pathname.split('/')[4],
      initialLoad: false
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
    const data = {message: this.state.newMessage, chatId: this.state.chatId};
    socket.emit('chat message', data);
  }

  inputBarEnter(e) {
    if (e.key === 'Enter') {
      this.submitMessage(e);
    }
  }

  fetchApiMessages() {
    axios.get(`http://localhost:3000/api/v1/${this.state.cityName}/chats/${this.state.chatId}`)
    .then((res) => {
      this.setState ({
        'messages': res.data,
        'initialLoad': true
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    if (!this.state.initialLoad) {
      this.fetchApiMessages();
    }
    const socket = io(this.state.endpoint);
    socket.on(`chat message ${this.state.chatId}`, (msg) => {
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
            <Input type="text" id="chatBar" name="chatBar" placeholder="Leave Your Message" onChange={this.newMessage} onKeyPress={this.inputBarEnter}></Input>
            <InputGroupButton type="submit"><Button onClick={this.submitMessage}>Submit</Button></InputGroupButton>
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