module.exports = {

	createChat: (knex, req, cb) => {
		knex('cities')
		.where({'name': req.params.city_name})
		.then((data) => {
			knex('forums')
			.insert({
			'city_id': data[0].id,
			'user_id': req.body.userId,
			'name': req.body.name,
			'subject': req.body.subject
			})
			.then(cb)
		});
	},

	findChatsByCity: (knex, cityName, cb) => {
		knex('forums')
		.join('cities', 'cities.id', 'forums.city_id')
		.select('forums.id', 'forums.name', 'forums.subject')
		.where({'cities.name': cityName})
		.then(cb);
	},

	findChatPostsById: (knex, req, cb) => {
		knex('posts')
		.where({forum_id: req.params.chat_id})
		.then(cb);
	},

	addNewPost: (knex, data, cb) => {
		knex('posts')
		.insert({
			forum_id: data.chatId,
			name: 'Username',
			message: data.message
		})
		.then(cb);
	}
}