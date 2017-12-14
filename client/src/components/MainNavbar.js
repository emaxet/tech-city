import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

export const MainNavbar = (props) => {
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
              <a href="">Login</a>
            </NavItem>
            <NavItem>
              <a href="">Register</a>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}
