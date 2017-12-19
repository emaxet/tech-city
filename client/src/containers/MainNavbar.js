import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import Logo from '../images/logo.png';

class MainNavbar extends React.Component {
  render(){
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link to="/"><img src={Logo} alt="Logo" style={{'height': '70px'}}/></Link>
            <Nav className="ml-auto" navbar>
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
