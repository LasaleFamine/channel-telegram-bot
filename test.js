import test from 'ava';
import channelBot from './src';

const TOKEN = process.env.CHANNELBOT_TEST_TOKEN;

// This depends on telebot but I want to be sure
test('throws when token is not provided', async t => {
	const err = await t.throws(() => channelBot.sendMessage());
	t.is(err.message, '[bot.error] invalid bot token');
});

test('forbidden when send to a not admin channel', async t => {
	const res = await channelBot.sendMessage('@newyorktimes', 'lolling', TOKEN);
	t.is(res.error_code, 403, 'Correctly rejected');
});

test('send correctly a message to a channel where is admin', async t => {
	const res = await channelBot.sendMessage('@channelbot_testing', 'lolling', TOKEN);
	t.true(res.ok, 'Response says ok');
});
