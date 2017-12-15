import React from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.displayName.length > 0 &&
      this.state.password.length >= 6 &&
      this.state.password === this.state.confirm
    );
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Form className="loginForm" onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="loginEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="loginEmail" placeholder="Email" required
                      onKeyPress={e => this.setState({email: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="loginPassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="loginPassword" placeholder="Password" required
                      onKeyPress={e => this.setState({password: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}