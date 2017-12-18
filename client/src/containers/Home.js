import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import MainNavbar from './MainNavbar';
import { CityBox } from '../components/CityBox';
import FlashMessageList from './flash/FlashMessageList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <FlashMessageList />
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