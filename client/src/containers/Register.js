import React from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      city: 'Vancouver',
      pic: '',
      bio: '',
      loggedIn: false
    };
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length >= 6 &&
      this.state.password === this.state.confirmPassword
    );
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Form className="registerForm" onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="registerUsername" sm={2}>Username*</Label>
            <Col sm={10}>
              <Input type="text" name="username" id="registerUsername" placeholder="Username" required
                      onKeyPress={e => this.setState({username: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="registerName" sm={2}>Name</Label>
            <Col sm={10}>
              <Input type="text" name="name" id="registerName" placeholder="Name"
                      onKeyPress={e => this.setState({name: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="registerEmail" sm={2}>Email*</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="registerEmail" placeholder="Email" required
                      onKeyPress={e => this.setState({email: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="registerPassword" sm={2}>Password*</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="registerPassword" placeholder="Password" required
                      onKeyPress={e => this.setState({password: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="registerConfirmPassword" sm={2}>Confirm Your Password*</Label>
            <Col sm={10}>
              <Input type="password" name="confirmPassword" id="registerConfirmPassword" placeholder="Password" required
                      onKeyPress={e => this.setState({confirmPassword: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="registerCity" sm={2}>City*</Label>
            <Col sm={10}>
              <Input type="select" name="city" id="registerCity" onChange={e => this.setState({city: e.target.value})}>
                <option>Vancouver</option>
                <option>Toronto</option>
                <option>Seattle</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="registerPic" sm={2}>Profile Image</Label>
            <Col sm={10}>
              <Input type="file" name="pic" id="registerPic" onKeyPress={e => this.setState({confirmPassword: e.target.value})} />
              <FormText color="muted">
                example lalalalala
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Bio</Label>
            <Input type="textarea" name="text" id="exampleText" placeholder="Tell the community about yourself."
                    onKeyPress={e => this.setState({bio: e.target.value})} />
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