import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chat from '../components/Chat';

class ChatList extends Component {
	constructor(props) {
		super(props);

		const cityName = (this.props.location.pathname.split('/')[2]);

		this.state = {
			'chats': [],
			'cityName': cityName
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

	componentDidMount() {
		this.fetchApiChats();
	}

	render() {

		const chats = this.state.chats;

		return (
				<div className='chatList'>
					{chats.map(chat => {
						return <div className="chatLink"><Link to={`chat/${chat.id}`}>Link To Chat {`${chat.id}`} </Link></div>
					})}
				</div>
		);
	}
}

export default ChatList;