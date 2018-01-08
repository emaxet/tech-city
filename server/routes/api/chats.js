const express = require('express');
const chats = express.Router();
const chatHelpers = require('./lib/chat-helpers');
const jwt = require('jsonwebtoken');
const config = require('../auth/config/config');

module.exports = (knex) => {

	chats.post('/:city_name/chats', (req, res) => {
		chatHelpers.createChat(knex, req, (chats) => {
			res.json('Chat Added!');
		});
	});

  	chats.get('/:city_name/chats', (req, res) => {
	    chatHelpers.findChatsByCity(knex, req.params.city_name, (chats) => {
	    	res.json(chats);
	    });
  	});

  	chats.get('/:city_name/chats/:chat_id', (req, res) => {
      console.log(req.params);
  		chatHelpers.findChatPostsById(knex, req, (posts) => {
  			res.json(posts);
  		});
  	});

  return chats;

}