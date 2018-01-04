import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Navbar, Nav, NavItem, NavbarToggler, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/authenticationActions'
import Logo from '../images/logo.png';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.loggedInToggle = this.loggedInToggle.bind(this);
    this.mobileToggle = this.mobileToggle.bind(this);
    this.state = {
      dropdownOpen: false,
      mobileDropdownOpen: false
    };
  }

  loggedInToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  mobileToggle() {
    this.setState({
      mobileDropdownOpen: !this.state.isOpen
    });
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render(){
    const { isAuthenticated } = this.props.authentication;
    console.log(this.props.user);

    const loggedInLinks = (
      <Nav className="ml-auto" navbar>
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.loggedInToggle}>
          <DropdownToggle nav caret>
            USERNAME
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem><a href="/" onClick={this.logout.bind(this)}>Logout</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
        <Navbar className="fixed-top" light expand="md">
          <Link to="/"><img src={Logo} alt="Logo" style={{'height': '70px'}}/></Link>
          <NavbarToggler onClick={this.mobileToggle} />
          <Collapse isOpen={this.state.mobileDropdownOpen} navbar>
              { isAuthenticated ? loggedInLinks : loggedOutLinks }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    user: state.user
  };
}


export default connect(mapStateToProps, { logout })(MainNavbar);
