import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chat from '../components/Chat';
import NewChat from '../components/NewChat';

class ChatList extends Component {
	constructor(props) {
		super(props);

		const cityName = this.props.location.pathname.split('/')[2];
		this.toggleNewChat = this.toggleNewChat.bind(this);
		this.fetchApiChats = this.fetchApiChats.bind(this);

		this.state = {
			'chats': [],
			'cityName': cityName,
			'newChatCollapse': false
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

	componentDidMount() {
		this.fetchApiChats();
	}

	render() {

		const chats = this.state.chats;

		return (
			<div>
				<button type="button" className="btn btn-primary navbar-btn chat-nav" onClick={this.toggleNewChat}>
              		<i className="glyphicon glyphicon-align-left"></i>
              		New Chat
            	</button> 
				<div className='chatList'>
					{chats.map(chat => {
						return <div className="chatLink"><Link to={`chat/${chat.id}`}>{`${chat.name}`} </Link></div>
					})}
				</div>
				<NewChat newChatCollapse={this.state.newChatCollapse} toggleNewChat={this.toggleNewChat} cityName={this.state.cityName} fetchApiChats={this.fetchApiChats} />
			</div>
		);
	}
}

export default ChatList;