import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login'
import MainNavbar from './MainNavbar';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
      loggedIn: false
    };
    this.onChange = this.onChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleSubmit(e){
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(payload).then(
      (res) => this.props.history.push('/')
      // (err) => this.setState({ errors: err.data.errors })
    )
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
                        onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="loginPassword" placeholder="Password" required
                        onChange={this.onChange} />
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

export default connect(null, { login })(Login);
