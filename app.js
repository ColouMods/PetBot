const Discord = require('discord.js');
const client = new Discord.Client();
//just come back online, alright?
//come back online please
client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get('447499927220781068').sendMessage("I'm back.");
});

//response arrays
greet = ["Hello.", "Hi."];
mention = ["You called?", "Yeah?", "What do you need?", "What's up?", "Hi."];
sorry = ["OK.", "Good.", "You'd better be sorry.", "I forgive you."];

client.on('message', message => {
	if (message.content.match(/have a conversation with sparrow bot/i)) {
	message.channel.send('<@424679471077916682> Hi');
	}
	if (message.author.bot == true) { 
		if (message.content === "Hi.") {
		message.channel.startTyping();
		setTimeout(() => { 
			message.channel.send('How are you?');
		}, 3390);
		message.channel.stopTyping(true);
		//
		} else if (message.content === "OK, I guess.") {
		message.channel.startTyping();
		setTimeout(() => { 
			message.channel.send("That's nice.");
		}, 2260);
		message.channel.stopTyping(true);
		} 
}
return;
});

client.on('message', message => {
	if (message.content.match(/i hope you're prepared for an unforgettable cunt/i)) {
		message.channel.sendMessage("1% chance my ass.");
	}
  	if (message.content.match(/petbot is overrated/i))
  	{
  	message.reply("<@" + message.author.id + "> Yeah, fuck you too, pal.");
  	}
 	 
	if (message.content.match(/cool it on the constant Steamed Hams references/i))
	{
 		steamNum = (Math.floor(Math.random() * 5)+1);
 		if (steamNum == 1) {
			message.channel.sendMessage("@Loren Goodwin I'll talk about Steamed Hams wherever I want.");
		}	
	}
  	
  	
	
});  
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
