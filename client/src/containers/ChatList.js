import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewChat from '../components/NewChat';
import { connect } from 'react-redux';
import { Collapse } from 'reactstrap';

class ChatList extends Component {
	constructor(props) {
		super(props);

		const cityName = this.props.location.pathname.split('/')[2];
		this.toggleNewChat = this.toggleNewChat.bind(this);
		this.fetchApiChats = this.fetchApiChats.bind(this);
		this.toggleSearchBar = this.toggleSearchBar.bind(this);

		this.state = {
			'chats': [],
			'cityName': cityName,
			'newChatCollapse': false,
			'searchCollapse': false
		}
	}

	fetchApiChats() {
		axios.get(`http://localhost:3000/api/v1/${this.state.cityName}/chats`)
		.then((res) => {
			console.log(res.data);
			this.setState ({
				'chats': res.data
			});
		})
		.catch((error) => {
			console.log(error);
		});
	}

	toggleNewChat() {
	    this.setState({
	      'newChatCollapse': !this.state.newChatCollapse
	    });
  	}

  	listMyChats() {
  		alert('To Do!')
  	}

  	toggleSearchBar() {
  		this.setState({
  			'searchCollapse': !this.state.searchCollapse
  		});
  	}

	componentDidMount() {
		this.fetchApiChats();
	}

	render() {
		let loggedInChatNav;
		if (this.props.userId.sub) {
			loggedInChatNav = (
				<div>
					<button type="button" className="btn btn-primary navbar-btn chat-nav" onClick={this.toggleNewChat}>
		              	<i className="glyphicon glyphicon-align-left"></i>
		              	New Chat
		            </button>
		            <button type="button" className="btn btn-primary navbar-btn chat-nav" onClick={this.listMyChats}>
		            <i className="glyphicon glyphicon-align-left"></i>
		              	My Chats
		            </button>
	            </div>
			)
		}

		let searchBar;
		if (this.state.searchCollapse) {
			searchBar = (
				<div className="input-group chatSearchBox">
					<input type="search" className="form-control chatSearch" name='chatQuery' placeholder="Search Chats..." aria-describedby="basic-addon1" />
				</div>
			)
		}

		const chats = this.state.chats;

		return (
			<div>
				<div className="chatNav">
					{ loggedInChatNav }
					<i className="fa fa-search chatSearchIcon" aria-hidden="true" onClick={this.toggleSearchBar}></i>
            	</div>
            	<Collapse isOpen={this.state.searchCollapse}>
          			{ searchBar }
          		</Collapse>
				<div className='chatList'>
					{chats.map(chat => {
						return ( 
							<div className="chatItem">
								<div className="chatTitle"><Link to={`chat/${chat.id}`}>{`${chat.name}`} </Link></div>
								<p className="chatSubject">{`${chat.subject}`}</p>
							</div>
						)
					})}
				</div>
				<NewChat newChatCollapse={this.state.newChatCollapse} toggleNewChat={this.toggleNewChat} cityName={this.state.cityName} fetchApiChats={this.fetchApiChats} />
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    userId: state.authentication.user
  };
}

export default connect(mapStateToProps)(ChatList);