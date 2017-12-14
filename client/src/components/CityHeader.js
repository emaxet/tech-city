import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from '../images/vancouver.jpg'

class CityHeader extends Component {
  render() {
    return (
      <div className='cityHeader'>
          <Container>
            <img src={logo} alt='techcity' className='logo' />
            <h2 className='headerTitle'>Discovery city : Vancouver</h2>
          </ Container>
      </div>
    )
  }
}

export default CityHeader;