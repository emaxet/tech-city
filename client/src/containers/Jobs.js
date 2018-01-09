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
    this.toggleAddJob = this.toggleAddJob.bind(this);
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

  toggleAddJob(e){
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
        <div className="event">
          {
            this.props.auth &&
            <div className="buttonGroup" style={buttonStyle}>
              <Button color="primary"
              onClick={this.toggleAddJob}>
              Add Job</Button>
            </div>
          }
          <div className="jobList">
              {jobs}
            <NewJob {...this.state} updateJobsFromAPI={this.updateJobsFromAPI} toggleAddJob={this.toggleAddJob}/>
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