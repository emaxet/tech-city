import React from 'react';
import axios from 'axios';
import { Jumbotron, Container } from 'reactstrap';
import MainNavbar from './MainNavbar';
import { CityBox } from '../components/CityBox';
import FlashMessageList from './flash/FlashMessageList';

export default class Home extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    cities: []
  }
}

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:3000/api/v1/cities').then(function (response) {
      self.setState({cities: response.data});
    });
  }


  render() {
    const cities = this.state.cities.map((city, index) => {
      return <CityBox key={index} name={city.name} image={city.image} tagline={city.tagline} />
    })

    return (
      <div>
        <MainNavbar />
        <FlashMessageList />
        <Jumbotron fluid>
          <Container className="text-center" fluid>
            <h1 className="title">TECH CITY BABY</h1>
            <p className="lead">Find your city, find your event, find your job, find your community.</p>
          </Container>
        </Jumbotron>
        <Container>
          <div className="row row-eq-height">
            {cities}
          </div>
        </Container>
      </div>
    );
  }
}