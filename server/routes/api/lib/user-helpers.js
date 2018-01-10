module.exports = {

  findChatsByUserId: (knex, params, cb) => {
		knex('forums')
		.where({'user_id': params.user_id})
		.then(cb);
	},

	getProfileData: (knex, params, cb) => {
		knex('users')
		.join('users_cities', 'users.id', 'users_cities.user_id')
		.join('cities', 'users_cities.city_id', 'cities.id')
		.where({'users.username': params.username})
		.select('users.username', 'users.first_name', 'users.last_name', 'users.email', 'cities.name', 'users.bio', 'users.image' )
		.then(cb);
	}

}