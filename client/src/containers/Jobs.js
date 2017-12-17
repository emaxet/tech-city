import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {JobBox} from '../components/JobBox'

class Jobs extends Component {

  render() {
    const buttonStyle = {
      'text-align': 'center'
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12" style={buttonStyle}>
            <Button color="primary">Add Job</Button>
          </div>  
          <div className="col-sm-12">
            <div className="row row-eq-height">
              <JobBox />
              <JobBox />
              <JobBox />
              <JobBox />
              <JobBox />
              <JobBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;