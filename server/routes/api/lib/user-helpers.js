module.exports = {

  findAllUsers: (knex, cb) => {
    knex('users').then(cb);
  },

  findChatsByUserId: (knex, params, cb) => {
		knex('forums')
		.where({'user_id': params.user_id})
		.then(cb);
	},

	getProfileData: (knex, params, cb) => {
		knex('users')
		.where({'username': params.username})
		.then(cb);
	}

}