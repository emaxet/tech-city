import React, { Component } from 'react'
import { Input, InputGroup, InputGroupButton, Button } from 'reactstrap';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }
  
  render() {
    return (
      <div className="cityChat">
        <div className="inputBar">  
          <InputGroup className="cityChat">
            <Input type="text" id="chatBar" name="chatBar" placeholder="Left Your Message"></Input>
            <InputGroupButton type="submit"><Button>Submit</Button></InputGroupButton>
          </InputGroup>
        </div> 
        
        <div>

        </div>
      </div>  
    )
  }
}

export default Chat;