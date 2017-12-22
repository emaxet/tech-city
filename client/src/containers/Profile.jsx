import React, {Component}from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authenticationActions'



class Profile extends Component {
	constructor(props) {
		super(props);
		const image = this.props.user.image ? this.props.user.image : "https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg";
		this.state = {
			img: image,
		} 
	}

	render () {
		return (
			<div className="container">
	      <div className="row header" >
	        <img src={this.state.img} className="media-photo img-circle"/>
	        <h3>@username</h3>
	      </div>
	      <div className="row">
	        <div className="table-responsive">
	          <table className="table table-hover">
	          	<tbody>
		            <tr>
		              <td>First Name</td>
		              <td>{this.props.user.firstName}</td>
		            </tr>
		            <tr>
		              <td>Last Name</td>
		              <td>{this.props.user.lastName}</td>
		            </tr>
		            <tr>
		              <td>E-mail</td>
		              <td>{this.props.user.email}</td>
		            </tr>
		            <tr>
		              <td>City</td>
		              <td>{this.props.user.city}</td>
		            </tr>
		          </tbody>  
	          </table>  
	        </div>
	      </div>
	      <div className="row">
	        <div className="col-md-2">
	          <h2>Bio</h2>
	        </div>
	        <div className="col-md-10">
	          <h4>{this.props.user.bio}</h4>
	        </div>
	      </div>
	    </div>
		);
	}
}

// export default Profile;
function mapStateToProps(state) {
  return {
    user: state.authentication.user
  };
}


export default connect(mapStateToProps, {})(Profile);
