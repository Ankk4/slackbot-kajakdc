var fs     	= require('fs');
var botkit 	= require('botkit');
var eating 	= require('./eating.js');

var slack_token = process.env.token;
var msg_opts = JSON.parse(fs.readFileSync('message_opts.json', 'utf-8'));

var controller = botkit.slackbot({
  debug: true,
  log: true,
  logLevel: 1 // 0-7
});

// connect the bot to a stream of messages
controller.spawn({
  token: slack_token,
}).startRTM();

// greetings
controller.hears(msg_opts.greetings, ['direct_message','direct_mention','mention'],function(bot,message) {
	bot.reply(message,'Hello, young one. May the DC be with you!');
});

// Lunch
controller.hears(msg_opts.commands[0], ['direct_message','direct_mention','mention'],function(bot,message) {
	bot.reply(message, "Selvitäppä ite: http://www.jamix.fi/ruokalistat/?anro=97440&k=50&mt=4");
});
