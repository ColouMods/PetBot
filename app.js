const Discord = require('discord.js');
const client = new Discord.Client();
var fuckoff = 1;
var mimicking = 0;
var mimicID;
//just come back online, alright?
//come back online please
client.on('ready', () => {
    console.log('I am ready!');
    client.channels.get('447499927220781068').sendMessage("Cloou thinks this update will probably break me, so he temporarily readded this text so that he could tell.");
});

//response arrays
greet = ["Hello.", "Hi."];
mention = ["You called?", "Yeah?", "What do you need?", "What's up?", "Hi.", "Hey."];
sorry = ["OK.", "Good.", "You'd better be sorry.", "I forgive you."];
lyrics1 = [
"Hey now, you're an all star. Get the show on, get p-...",
"When I'm lonely, yeah I know I'm gonna lone...",
"We're no strangers to love, you know the rules and so do I. A fulcrum-mitten's wha-...",
"It's not unusual to be loved by anyone, it's not unusual to have thumbs wi-...",
"Your lights are on, but you're not home. Your dad is Ray Barone...",
"In the town where I was born, lived a man who sold CDs...",
"Living easy, Butterfree. Season tick-..."
];

lyrics2 = [
"That can't be right.",
"I don't think that's how it goes.",
"Is that right?",
"I messed that up, didn't I?",
"Damn, I messed up.",
"That's uh, that's wrong, isn't it?",
"Fuck."
];

h1 = [
"It's hip to fuck bees",
"You fucking donut",
"It's Liquid's birthday"
];

h2 = [
"I don't like Loren Goodwin",
"I am eating a baguette",
"Sparrow Bot is annoying",
"Road Rage Returns is not good",
"I drink from under the sink",
"Cloou is a stupid bastard",
"Eating is my favourite sport",
"You don't microwave salads",
"I have run out of haikus"
];

h3 = [
"I am not a horse",
"I hate everyone",
"You there, please send help",
"I enjoy Smash Mouth",
"Do not eat my shorts",
"Unforgettable luncheon"
];


how1 = [
"Fine, a bit bored.",
"Fine, bit bored though.",
"I'm fine, kind of bored though."
];

how2 = [
"I wish something exciting would happen...",
"I hope something exciting happens soon..."
];

insult = ["halfwit", "absolute spoon", "bastard", "prick", "dud", "dick", "pillock", "useless piece of shit", "goddamn meatball", "JPEG"];

client.on('message', message => {
	if (mimicking == 1 && message.author.id == mimicID) {
		var mimicMsg = message.content;
		message.channel.sendMessage(mimicMsg);
	}
});

client.on('message', message => {
	if (message.content.startsWith("pet.")) {
		if (message.content.startsWith("pet.mimic")) {
			if (message.mentions.members.size != 0) {
				member = message.mentions.members.first();
  				mimicID = member.id;
				mimicking=1;
				message.channel.sendMessage("✅ Mimicking <@" + mimicID + ">");
			} else {
				message.channel.sendMessage("❔ You need to tell me who to mention.");
			}
		}
		else if (message.content.startsWith("pet.stopmimic")) {
			if (mimicking==1) {
				mimicking=0;
				message.channel.sendMessage("❎ No longer mimicking.");
			} else {
				message.channel.sendMessage("❔ I wasn't mimicking anyone.");
			}
		}
		else if (message.content.startsWith("pet.haiku")) {
			message.channel.sendMessage(h1[Math.floor(Math.random() * h1.length)] + "\n" + h2[Math.floor(Math.random() * h2.length)] + "\n" + h3[Math.floor(Math.random() * h3.length)]);
		}
		
		else if (message.content.startsWith("pet.legacy")) {
			//Legacy stuff
			if (message.content.match(/how are you/i)) {
				message.channel.sendMessage(how1[Math.floor(Math.random() * how1.length)] + " " + how2[Math.floor(Math.random() * how2.length)]);
			}
			else if (
				(message.content.match(/it/i) && message.content.match(/testing time/i)) ||
				 (message.content.match(/it/i) && message.content.match(/time to test/i))
			) {
				message.channel.sendMessage("No, it is not.");	
			}
			
			else if (message.content.match(/sorry/i)) {
				message.channel.sendMessage(sorry[Math.floor(Math.random() * sorry.length)]);
			}
		
			else if (message.content.match(/are you ok/i)) {
				message.channel.sendMessage("♪ *I'm alright, don't nobody worry 'bout me.* ♪");
			}	
	
			else if (message.content.match(/wake up/i)||message.content.match(/wake the fuck up/i)) {
				message.channel.sendMessage("I *am* awake.");
			}
			
  			else if (message.content.match(/get up/i)||message.content.match(/get the fuck up/i)) {
				message.channel.sendMessage("I *am* up.");
			}
			
			else if (message.content.match(/what is the current acis release/i)) {
				message.channel.sendMessage("Ask Sparrow Bot.");
			}
			
			else if (message.content.match(/shut up/i)) {
				message.channel.sendMessage("*sniff* Will do...master.");
			}
	  	    
			else if (message.content.match(/play my mod/i)) {
       	  		message.channel.sendMessage("I already did.");
      			}
  			
			else if (message.content.match(/you talk too much/i)) {
				message.channel.sendMessage("I think *you* talk too much!");
			}
  			
			else if (
				(message.content.match(/do/i) && message.content.match(/impression of a robot/i)) ||
				(message.content.match(/do/i) && message.content.match(/imitation of a robot/i)) ||
				(message.content.match(/act like/i) && message.content.match(/robot/i)) ||
				(message.content.match(/say beep boop/i)) ||
				(message.content.match(/appropriate robot culture/i))
			) {
				message.channel.sendMessage("*Beep Boop* I am a robot *Boop Beep*");
			}
  			
			else if (message.content.match(/i am your father/i))
			{
				message.channel.sendMessage("NOOOOOOOOOOOOOOOO!");
			}
			
			else if (message.content.match(/hi/i)||message.content.match(/hey/i)||message.content.match(/hello/i)) {
				hiNum = (Math.floor(Math.random() * 25)+1);
				if (hiNum == 1)
					{
					message.channel.sendMessage("You suck.")
					}	
				else {
				message.channel.sendMessage(greet[Math.floor(Math.random() * 2)]);
				}
			}
			
			else if (message.content.match(/you suck/i)) {
				message.channel.sendMessage("*sniff*");
			}
			
	  		else if (message.content.match(/see your source code/i)) {
				message.channel.sendMessage("No way! You want to *copy* my source code?");
			}
			
  			else if (message.content.match(/you are a great bot/i)){
				message.channel.sendMessage("Thanks!");
			}
		
			else if (message.content.match(/best member of buzz team/i)) {
				message.channel.sendMessage("You mean 'Bad Team'?");
			}
		
			else if (message.content.match(/best member of donut team/i)) {
				message.channel.sendMessage("Kenny Giles.");
			}
			
  			else if (message.content.match(/best member of bagel team/i)) {
				message.channel.sendMessage("Genny Kiles.");
			}
			
  			else if (
				(message.content.match(/what/i) && message.content.match(/your favorite mod/i)) ||
				(message.content.match(/what/i) && message.content.match(/your favourite mod/i))
				) {
				message.channel.sendMessage("Sunday Drive, made by **@Colou**.");
			}
			else if (message.content.match(/command list/i)) {
				//message.channel.sendMessage("Here is the list of commands I can respond to: ```@PetBot``` ```@PetBot How are you today?``` ```@PetBot Wake up!``` ```@PetBot What is the current HA release?``` ```@PetBot SHUT UP!``` ```@PetBot Play my mod``` ```@PetBot You talk too much``` ```@PetBot Command List``` ```@PetBot Do an impression of a robot``` ```@PetBot, I am your father``` ```@PetBot Hi``` ```@PetBot You suck``` ```@PetBot Can I see your source code?``` ```@PetBot You are a great bot!``` ```@PetBot Who is the best member of Buzz Team?``` ```@PetBot Who is the best member of Donut Team?``` ```@PetBot Who is the best member of Bagel Team?``` ```@PetBot What is your favorite mod?```");
				message.channel.sendMessage("I don't have a command list, you " + insult[Math.floor(Math.random() * insult.length)]+ ".");
			}
			
  			else if (message.content.match(/who fixed you/i)) {
				message.channel.sendMessage("**Literally Satan™**.");
			}
			
			else if (message.content.match(/what time/i)) {
				message.channel.sendMessage("Time to go fuck yourself.");
			}
			
			else if (message.content.match(/sing/i) && message.content.match(/a song/i)) {
				message.channel.sendMessage("♪ *" + lyrics1[Math.floor(Math.random() * lyrics1.length)] + "* ♪ " + lyrics2[Math.floor(Math.random() * lyrics2.length)]);
			}
			else if (message.content.match(/@Pet🅱ot/i)) {
				if (fuckoff == 7) {
       					message.channel.sendMessage("How many times do I have to tell you? FUCK. OFF.");
					fuckoff = 1;
					return;
    				}
				message.channel.sendMessage("Fuck off.");
				fuckoff++;
			}
			else if (message.content.match(/@PetBoy/i)) {
				message.channel.sendMessage("PetBot is a her name.");	
			}
			else {
				message.channel.sendMessage(mention[Math.floor(Math.random() * mention.length)]);
			}
			
			return;
			}
		else {
		message.channel.sendMessage
		}
	}
});

/*client.on('message', message => {
	if (message.content.match(/have a conversation with sparrow bot/i)) {
	message.channel.send('<@424679471077916682> Hi');
	}
	if (message.author.bot == true && message.author.id == 424679471077916682) { 
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
*/

client.on('message', message => {
	/*if (message.content.match(/i hope you're prepared for an unforgettable cunt/i)) {
		message.channel.sendMessage("1% chance my ass.");
	}
  	if (message.content.match(/petbot is overrated/i))
  	{
  	message.channel.sendMessage("<@" + message.author.id + "> Yeah, fuck you too, pal.");
  	}
 	 
	if (message.content.match(/cool it on the constant Steamed Hams references/i))
	{
 		steamNum = (Math.floor(Math.random() * 5)+1);
 		if (steamNum == 1) {
			message.channel.sendMessage("@Loren Goodwin I'll talk about Steamed Hams wherever I want.");
		}	
	}
	*/
  	if (message.content.match(/@PetBot/i)) {
		if (message.author.bot) return;
		message.channel.sendMessage("The `@PetBot` commands are no longer supported and updated. If you wish to use them, use `pet.legacy` instead.");	
	}
});  
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
