import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {JobBox} from '../components/JobBox'


class Jobs extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <div className="row row-eq-height">
              <JobBox />
              <JobBox />
              <JobBox />
              <JobBox />
              <JobBox />
              <JobBox />
            </div>
          </div>
          <div className="col-md-2">
            <p>HELLO THIS IS TEST</p>
            <Button color="primary">Add Job</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;