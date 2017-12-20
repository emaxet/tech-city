import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Navbar, Nav, NavItem, NavbarToggler } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/authenticationActions'
import Logo from '../images/logo.png';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render(){

    const { isAuthenticated } = this.props.authentication;

    const loggedInLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <a href="/" onClick={this.logout.bind(this)}>Logout</a>
        </NavItem>
      </Nav>
    )

    const loggedOutLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink exact to="/login" activeClassName="active">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to="/register" activeClassName="active">Register</NavLink>
        </NavItem>
      </Nav>
    )

    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link to="/"><img src={Logo} alt="Logo" style={{'height': '70px'}}/></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              { isAuthenticated ? loggedInLinks : loggedOutLinks }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication
  };
}


export default connect(mapStateToProps, { logout })(MainNavbar);
