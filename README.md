# channel-telegram-bot [![Build Status](https://travis-ci.org/LasaleFamine/channel-telegram-bot.svg?branch=master)](https://travis-ci.org/LasaleFamine/channel-telegram-bot)

> Send a single message to an administered channel. 

Basically a wrapper of [Telebot](https://github.com/kosmodrey/telebot/) but that only sends a message to a channel of your choice. As an NPM package :package:


## Install

```
$ yarn add channel-telegram-bot
```


## Usage

```js
const channelBot = require('channel-telegram-bot');
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

const niceEmoji = '🥋 '
channelBot.sendMessage('@your_awesome_channel_name', `Prepare yourself ${niceEmoji}`, token)
	.then(res => console.log(res))
	.catch(err => console.error(err))
```


## API

The `token` is supported also if exported as **env variable** as `CHANNELBOT_TOKEN`:  

```
$ export CHANNELBOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
```

### .sendMessage(channelName, message, [token])

#### channelName

Type: `string`

Name of your channel.

#### message

Type: `string`

Message to send.

#### token (`|| process.env.CHANNELBOT_TOKEN`)

Type: `string`

Token of your `bot`.


### More SOON

:building_construction:


## License

MIT © [LasaleFamine](https://github.com/lasalefamine)
