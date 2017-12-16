import React from 'react';
import axios from 'axios';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      city: 'Vancouver',
      pic: '',
      bio: '',
      loggedIn: false
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    )
  }

  handleSubmit(e){
    e.preventDefault();
    const URL = "http://localhost:4000/api/v1/users/";
    if(this.validateForm()) {
      const payload = {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        city: this.state.city,
        // pic: this.state.pic,
        bio: this.state.bio,
        role_id: 1
      }
      axios.post(URL, payload)
      .then(function (response) {
        console.log(response);
        if(response.data.code === 200){
          console.log("registration successfull");
          this.setState({loggedIn:true})
        }
      })
    }
    else {
      alert("wrong")
    }
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
            <Label for="registerName" sm={2}>First Name</Label>
            <Col sm={4}>
              <Input type="text" name="firstName" id="registerFirstName" placeholder="First Name"
                      onKeyPress={e => this.setState({firstName: e.target.value})} />
            </Col>
            <Label for="registerName" sm={2} className="text-center">Last Name</Label>
            <Col sm={4}>
              <Input type="text" name="lastName" id="registerLastName" placeholder="Last Name"
                      onKeyPress={e => this.setState({lastName: e.target.value})} />
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
            <Label for="registerConfirmPassword" sm={2}>Confirm Password*</Label>
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
              <Input type="file" name="pic" id="registerPic" onChange={e => this.setState({pic: e.target.value})} />
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