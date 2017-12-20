import React, { Component } from 'react'
import { Input, InputGroup, InputGroupButton, Button } from 'reactstrap';
import ChatMessages from '../components/ChatMessages';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ name: 'one', message: 'one' }, { name: 'two', message: 'two' }, { name: 'three', message: 'three' }],
      newMessage: ''
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
    const message = this.state.newMessage;
    this.setState({
      messages: this.state.messages.concat({ name: 'new', message})
    })
  }

  inputBarEnter(e) {
    if (e.key === 'Enter') {
      this.submitMessage(e);
    }
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