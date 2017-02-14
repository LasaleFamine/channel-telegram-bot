'use strict';

const Telebot = require('telebot');

module.exports.sendMessage = (channelName, message, token) => {
	const bot = new Telebot({token: process.env.CHANNELBOT_TOKEN || token});
	return bot.sendMessage(channelName, message)
		.then(res => res)
		.catch(err => err);
};
