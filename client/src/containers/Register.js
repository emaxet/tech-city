import React from 'react';
import { connect } from 'react-redux';
import { userRegistration } from '../actions/registrationActions';
import { MainNavbar } from '../components/MainNavbar';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      city: 'Vancouver',
      pic: '',
      bio: '',
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
      this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    )
  }

  handleSubmit(e) {
    this.setState({ errors: {} });
    e.preventDefault();
    const payload = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      city: this.state.city,
      // pic: this.state.pic,
      bio: this.state.bio,
      role_id: 1,
      errors: {}
    }
    this.props.userRegistration(payload).then(
      () => {},
      (err) => this.setState({ errors: err.response.data })
    )
  }


  render() {
    // const {errors} = this.state;
    console.log(this.state);
    return (
      <div>
        <MainNavbar />
        <h2 className="registerTitle text-center">Register</h2>
        <Container className="registerForm">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label for="registerUsername" sm={2}>Username*</Label>
              <Col sm={10}>
                <Input type="text" name="username" id="registerUsername" placeholder="Username" required
                        onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="registerName" sm={2}>First Name</Label>
              <Col sm={4}>
                <Input type="text" name="first_name" id="registerFirstName" placeholder="First Name"
                        onChange={this.onChange} />
              </Col>
              <Label for="registerName" sm={2}>Last Name</Label>
              <Col sm={4}>
                <Input type="text" name="last_name" id="registerLastName" placeholder="Last Name"
                        onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="registerEmail" sm={2}>Email*</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="registerEmail" placeholder="Email" required
                        onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="registerPassword" sm={2}>Password*</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="registerPassword" placeholder="Password" required
                        onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="registerConfirmPassword" sm={2}>Confirm Password*</Label>
              <Col sm={10}>
                <Input type="password" name="confirmPassword" id="registerConfirmPassword" placeholder="Password" required
                        onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="registerCity" sm={2}>City</Label>
              <Col sm={10}>
                <Input type="select" name="city" id="registerCity" onChange={this.onChange}>
                  <option>Vancouver</option>
                  <option>Toronto</option>
                  <option>Seattle</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="registerPic" sm={2}>Profile Image</Label>
              <Col sm={10}>
                <Input type="file" name="pic" id="registerPic" onChange={this.onChange} />
                <FormText color="muted">
                  example lalalalala
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Bio</Label>
              <Input type="textarea" name="text" id="exampleText" placeholder="Tell the community about yourself."
                      onChange={this.onChange} />
            </FormGroup>
            <FormGroup row>
              <Col className="text-center">
                <Button type="submit">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

// Register.propTypes = {
//   userRegistration: React.PropTypes.func.isRequired
// }

export default connect(null, { userRegistration }) (Register);