import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { MainNavbar } from '../components/MainNavbar';
import { CityBox } from '../components/CityBox';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MainNavbar />

        <Jumbotron fluid>
          <Container className="text-center" fluid>
            <h1 className="display-3">TECH CITY BABY</h1>
            <p className="lead">Find your city, find your event, find your job, find your community.</p>
          </Container>
        </Jumbotron>
        <Container>
          <div className="row row-eq-height">
            <CityBox />
            <CityBox />
            <CityBox />
            <CityBox />
            <CityBox />
            <CityBox />
          </div>
        </Container>
      </div>
    );
  }
}