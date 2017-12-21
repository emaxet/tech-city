import React, { Component } from 'react';
import { Button } from 'reactstrap';
import JobBox from '../components/JobBox';
import axios from 'axios';
import NewJob from '../components/NewJob';
import { connect } from 'react-redux';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state={
      'jobs' : [],
      'addJob' : false,
      'cityName': this.props.location.pathname.split('/')[2]
    };
    this.toogleAddJob = this.toogleAddJob.bind(this);
    this.updateJobsFromAPI = this.updateJobsFromAPI.bind(this);
  }
  
  componentDidMount(){
    this.updateJobsFromAPI();
  }

  updateJobsFromAPI() {
    axios.get(`http://localhost:3000/api/v1/${this.state.cityName}/jobs`)
      .then((res) => {
        this.setState({
          'jobs': res.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toogleAddJob(e){
    this.setState({
      'addJob' : !this.state.addJob
    });
  }

  render() {
    const buttonStyle = {
      'textAlign': 'center'
    }

    const jobs = this.state.jobs
      .map((job, index) => {
        return <JobBox updateJobsFromAPI={this.updateJobsFromAPI} {...job} key={index}/>
      })
      .reverse();

    return (
      <div>
        <div className="row">
          {
            this.props.auth &&
            <div className="col-sm-12" style={buttonStyle}>
              <Button color="primary" 
              onClick={this.toogleAddJob}>
              Add Job</Button>
            </div>
          }  
          <div className="col-sm-12">
            <div className="row row-eq-height">
              {jobs}
            </div>

            <NewJob {...this.state} updateJobsFromAPI={this.updateJobsFromAPI} toogleAddJob={this.toogleAddJob}/>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.authentication.isAuthenticated
  };
}

export default connect(mapStateToProps)(Jobs);