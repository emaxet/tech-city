import React, {Component}from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authenticationActions'



class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {} 
	}

	 // componentDidMount(){
  //   axios.get(`http://localhost:3000/api/v1/users/(to do :userid)`)
  //     .then((res) => {
  //       this.setState({
  //         'user': res.data
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

	render () {
		console.log(this.props);

		return (
			<div className="container">
	      <div className="row header" >
	        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg" className="media-photo img-circle"/>
	        <h3>@username</h3>
	      </div>
	      <div className="row">
	        <div className="col-md-2">
	          <h4>First Name</h4>
	          <h4>Last Name</h4>
	          <h4>E-mail</h4>
	          <h4>City</h4>  
	        </div>
	        <div className="col-md-10">
	          <h4>Bhav</h4>
	          <h4>Bains</h4>
	          <h4>Bhav@bains.com</h4>
	          <h4>Vancouver</h4>
	        </div>
	      </div>
	      <div className="row">
	        <div className="col-md-2">
	          <h4>Bio</h4>
	        </div>
	        <div className="col-md-10">
	          <h4>Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop. Kielbasa turducken turkey cow shoulder pig prosciutto hamburger corned beef short loin, meatloaf tri-tip drumstick. Shankle sirloin ground round fatback, cow pancetta boudin t-bone pig. Ham short ribs cow tri-tip ribeye beef ribs boudin. Short ribs pork belly leberkas salami chuck, pork loin ball tip tenderloin turkey chicken pork chop filet mignon biltong.</h4>
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
