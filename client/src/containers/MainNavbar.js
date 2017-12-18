import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { connect } from 'react-redux';

class MainNavbar extends React.Component {
  render(){
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Tech City</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/city" activeClassName="active">City</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/login" activeClassName="active">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/register" activeClassName="active">Register</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(MainNavbar);
