const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  	if (message.content.match(/@PetBot/i))
  		if (message.content.match(/How are you today?/i)
  	{
  	message.reply('Fine, a bit bored. I wish something exciting would happen...');
  	}
  		else if (message.content.match(/Wake up!/i)
  	{
  	message.reply('I *am* awake');
  	}
  		else if (message.content.match(/What is the current HA release?/i)
  	{
    	message.reply('The current release is Beta 4.8');
  	}
  		else if (message.content.match(/SHUT UP!/i)
 	{
   	message.reply('*sniff* Will do...master');
  	}
  		else if (message.content.match(/Play my mod/i)
  	{
    	message.reply('I already did.');
  	}
  		else if (message.content.match(/You talk too much/i)
  	{
    	message.reply('I think *you* talk too much!');
  	}
  		else if (message.content.match(/Do an impression of a robot/i)
  	{
    	message.reply('*Beep Boop* I am a robot *Boop Beep*');
  	}
  		else if (message.content.match(/I am your father/i)
	{
    	message.reply('NOOOOOOOOOOOOOOOO!');
  	}

  	else if (message.content.match(/Hi/i) {
    	message.reply('Hello');
  	}
		else if (message.content.match(/You suck/i)
	{
    	message.reply('*sniff*');
  	}
  		else if (message.content.match(/Can I see your source code?/i)
	{
    	message.reply('No way! You want to *copy* my source code?');
  	}
  		else if (message.content.match(/You are a great bot!/i)
	{
    	message.reply('Thanks!');
  	}
  		else if (message.content.match(/Who is the best member of Buzz Team?/i)
	{
    	message.reply('Colou');
  	}
  		else if (message.content.match(/Who is the best member of Donut Team?/i) {
    	message.reply('Kenny Giles');
  	}
  		else if (message.content.match(/Who is the best member of Bagel Team?/i) {
    	message.reply('Genny Kiles');
  	}
  		else if (message.content.match(/What is your favourite mod?/i)
	{
    	message.reply('Sunday Drive, made by **@Colou**');
  	}
  		else if (message.content.match(/Command List/i)
	{
    	message.reply('Here is the list of commands I can respond to: ```@PetBot``` ```@PetBot How are you today?``` ```@PetBot Wake up!``` ```@PetBot What is the current HA release?``` ```@PetBot SHUT UP!``` ```@PetBot Play my mod``` ```@PetBot You talk too much``` ```@PetBot Command List``` ```@PetBot Do an impression of a robot``` ```@PetBot, I am your father``` ```@PetBot Hi``` ```@PetBot You suck``` ```@PetBot Can I see your source code?``` ```@PetBot You are a great bot!``` ```@PetBot Who is the best member of Buzz Team?``` ```@PetBot Who is the best member of Donut Team?``` ```@PetBot Who is the best member of Bagel Team?``` ```@PetBot What is your favorite mod?```');
  	}
  		else
	{
	message.reply('You called?');
  	}
	return;
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
