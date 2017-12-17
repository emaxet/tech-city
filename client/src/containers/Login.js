import React from 'react';
import axios from 'axios';
import { MainNavbar } from '../components/MainNavbar';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleSubmit(e){
    e.preventDefault();
    const URL = "http://localhost:3000/session/login"
    if(this.validateForm()) {
      const payload = {
        email: this.state.email,
        password: this.state.password
      }
      axios.post(URL, payload)
      .then(function (response) {
        console.log("hello")
        console.log(response);
      })
      .catch(function(error){
        console.log("bad")
        console.log(error)
      })
    }
    else {
      alert("wrong")
    }
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <MainNavbar />
        <h2 className="registerTitle text-center">Login</h2>
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
      </div>
    );
  }
}