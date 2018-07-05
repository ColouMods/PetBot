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
	
});  
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
