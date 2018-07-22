const Discord = require('discord.js');
const client = new Discord.Client();
var fuckoff = 1;
var mimicking = 0;
var mimicID;
var isDev;
var voting = 0;
var yesVote = 0;
var noVote = 0;
var voteUser;
var voteTopic;
hasVoted = ["pet"];

const prefix = "pet.";
var petID = 368365406223728641;
//just come back online, alright?
//come back online please
client.on('ready', () => {
	console.log('I am ready!');
	//client.channels.get('447499927220781068').sendMessage("Hey hey! I'm endorsing a new update, kids, and this one isn't poisonous to anybody!");
	client.users.get('290486859480563713').sendMessage("🤔");
	
});

client.on('message', message => {
	if (mimicking == 1 && message.author.id == mimicID) {
		var mimicMsg = message.content;
		message.channel.sendMessage(mimicMsg);
	}
});

client.on('message', message => {
	if (message.content.startsWith(prefix) && ((message.author.id==290486859480563713) || (message.author.id==333710766706524167) || (message.author.id==259458435484090369))); {
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		if ( (command === 'mimic') && (message.channel.type != "dm") ) {
			if (message.mentions.users.size != 0) {
				member = message.mentions.users.first();
				mimicID = member.id;
				if (mimicID != petID) {
					mimicking=1;
					message.channel.sendMessage("✅ Mimicking <@" + mimicID + ">.");
				} else {
					message.channel.sendMessage("🛑 Can't mimic that user.");
				}
			} else {
				message.channel.sendMessage("❔ You need to tell me who to mimic.");
			}
		}
		
		if ( (command === 'mimic') && (message.channel.type == "dm") ) {
			message.channel.send("🛑 Can't mimic here.");
		}
		
		if (command === 'test') {
			message.channel.sendMessage("hasVoted.length is currently " + hasVoted.length);
			hasVoted.push("test");
		}
		
		if (command === 'stopmimic') {
			for (var i = 0; i < devs.length; i++) {
  				if (message.author.id == (devs[i])) {
					isDev = 1;
					if (mimicking==1) {
						mimicking=0;
						message.channel.sendMessage("❎ No longer mimicking.");
					} else {
						message.channel.sendMessage("❔ I wasn't mimicking anyone.");
					}
					break;
				} else {
					isDev = 0;
				}
			}
			if (isDev == 0) {
				message.channel.sendMessage("🛑 This is a developer-only command.");	
			}
			isDev = 0;
		}
		
		if (command === 'mimictarget') {
			for (var i = 0; i < devs.length; i++) {
  				if (message.author.id == (devs[i])) {
					isDev = 1;
					if (mimicking==1) {
						message.channel.sendMessage("✅ Currently mimicking <@" + mimicID + ">.");
					} else {
						message.channel.sendMessage("❔ I'm not mimicking anyone.");
					}
					break;
				} else {
					isDev = 0;
				}
			}
			if (isDev == 0) {
				message.channel.sendMessage("🛑 This is a developer-only command.");	
			}
			isDev = 0;
		}
		
		if (command === 'haiku') {
			message.channel.sendMessage(h1[Math.floor(Math.random() * h1.length)] + "\n" + h2[Math.floor(Math.random() * h2.length)] + "\n" + h3[Math.floor(Math.random() * h3.length)]);
		}
		
		if (command === 'help') {
			message.channel.sendMessage({ embed });
		}
		
		if (command === 'legacy') {
			message.channel.sendMessage("🛑 These commands have left the building and died, probably while sitting on a toilet.");
		}
		
		if ( (command === 'vote') ) {
			if (voting == 0) {
				voteUser = message.author.id;
				voteTopic = args.slice(0).join(" ");
				message.channel.sendMessage("✅ Vote now active: **" + voteTopic + "**");
				voting = 1;
				yesVote = 1;
				noVote = 0;
			} else if (voting == 1) {
				message.channel.sendMessage("🛑 There is already an active voting topic: **" + voteTopic + "**");
			}
		}
		
		if (command === 'endvote') {
			if (message.author.id == voteUser) {
				voting = 0;
				message.channel.sendMessage("✅ Vote complete: **" + voteTopic + "**\n\n Yes: " + yesVote + " No: " + noVote);
				yesVote = 0;
				noVote = 0;
			} else if (message.author.id != voteUser) {
				message.channel.sendMessage("🛑 You did not initialise this vote, and you may not end it.");
			}
		}
		
		if (command === 'yes') {
			yesVote++;
		}
		
		if (command === 'no') {
			noVote++;
		}
			
		if (command === 'say') {
			let sayChannel = args[0];
			let text = args.slice(1).join(" ");
			client.channels.get(sayChannel).sendMessage(text);
		}
	}
});

const embed = {
	"title": "__Help__",
	"description": "These are all the available commands that I can do.",
 	"color": 3447003,
  	"fields": [
		{
			"name": "pet.mimic",
			"value": "Makes me copy everything said by a certain user."
		},
		{
			"name": "pet.stopmimic",
			"value": "Stops me mimicking anyone. Can only be used by my developers."
		},
		{
			"name": "pet.currentmimic",
			"value": "Shows the user currently being mimicked."
		},
		{
     			"name": "pet.haiku",
      			"value": "Randomly generates a haiku."
 		},
		{
			"name": "pet.legacy",
			"value": "Old, outdated commands. There is no documentation currently on how they work."
		}
	]
};

//response arrays
greet = ["Hello.", "Hi."];
devs = ["333710766706524167", "290486859480563713", "259458435484090369"];
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
"It's Liquid's birthday",
"It's time for haikus",
"I am feeling mad",
"What are you doing?",
"I am a lemon",
"Look, a piece of toast!",
"Hey there, how are you?",
"Two plus two is four"
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
"I have run out of haikus",
"The world is gonna roll you",
"Minus one that's three, quick maths",
"Unforgettable luncheon",
"**YOUR BATTERY HAS RUN LOW**",
"Homer has eaten Mike's dog",
"This haiku is really bad",
"This Kong has a funny face"
];

h3 = [
"I am not a horse",
"I hate everyone",
"You there, please send help",
"I enjoy Smash Mouth",
"Please don't eat my shorts",
"Radical are dumb",
"I like eating paste",
"Big Shaq is quite good",
"Please don't burn my toast"
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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
