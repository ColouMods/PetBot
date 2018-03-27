 const Discord = require('discord.js');
  const client = new Discord.Client();
  
  client.on('ready', () => {
    console.log('I am ready!');
  });
 greet = ["Hello.", "Hi."];
 mention = ["You called?", "Yeah?", "What do you need?"];
 sorry = ["OK.", "Good.", "You'd better be sorry.", "I forgive you."];
 client.on('message', message => {
   if (message.content.match(/have a conversation with sparrow bot/i))
      {
      message.channel.send('<@424679471077916682> Hi');
      }
   if (message.author.bot == true) {
       if (message.content === "Hi.") {
       message.channel.send('How are you?');
       } else if (message.content === "OK, I guess.") {
       message.channel.send("That's nice.");
       }
  
 }
 return;
 });
 client.on('message', message => {
  	if (message.content.match(/i hope you're prepared for an unforgettable cunt/i))
  	{
      	message.channel.sendMessage("1% chance my ass.");
      	}
  	if (message.content.match(/petbot is overrated/i))
  	{
  	message.reply("Yeah, fuck you too, pal.");
  	}
 	 
   if (message.content.match(/cool it on the constant Steamed Hams references/i))
  	{
 		steamNum = (Math.floor(Math.random() * 5)+1);
 		if (steamNum == 1)
     		{
         	message.channel.sendMessage("@Loren Goodwin I'll talk about Steamed Hams wherever I want.");
     		}	
 	 }
  	
  	
    	if (message.content.match(/@PetBot/i))
      
  		if (message.content.match(/how are you/i))
  	  {
      message.channel.sendMessage("Fine, a bit bored. I wish something exciting would happen...");
      }
      else if (message.content.match(/sorry/i))
 	    {
     	message.channel.sendMessage(sorry[Math.floor(Math.random() * 5)]);
     	}
 		  else if (message.content.match(/are you ok/i))
 	    {
     	message.channel.sendMessage("♪ *I'm alright, don't nobody worry 'bout me.* ♪");
     	}
  		else if (message.content.match(/wake up/i)||message.content.match(/wake the fuck up/i))
  	  {
  	  message.channel.sendMessage("I *am* awake.");
  	  }
  		else if (message.content.match(/get up/i)||message.content.match(/get the fuck up/i))
  	  {
  	  message.channel.sendMessage("I *am* up.");
  	  }
  		else if (message.content.match(/what is the current ha release/i))
  	  {
      message.channel.sendMessage("The current release is 1.0, and probably will be for quite a while.");
      }
  		else if (message.content.match(/shut up/i))
  	{
  	message.channel.sendMessage("*sniff* Will do...master.");
  	}
  	    	else if (message.content.match(/play my mod/i)) 
      	{
         	message.channel.sendMessage("I already did.");
      	}
  		else if (message.content.match(/you talk too much/i))
  	{
  	message.channel.sendMessage("I think *you* talk too much!");
  	}
  		else if (message.content.match(/do an impression of a robot/i))
  	{
  	message.channel.sendMessage("*Beep Boop* I am a robot *Boop Beep*");
  	}
  		else if (message.content.match(/i am your father/i))
  	{
  		if (message.author.id == 290486859480563713)
      		{
          	message.channel.sendMessage("Fuck me daddy.")
      		}	
  		else
  		{
  		message.channel.sendMessage("NOOOOOOOOOOOOOOOO!");
  		}
  	}
  		else if (message.content.match(/hi/i)||message.content.match(/hey/i)||message.content.match(/hello/i))
  	{
  		hiNum = (Math.floor(Math.random() * 25)+1);
  		if (hiNum == 1)
      		{
          	message.channel.sendMessage("You suck.")
      		}	
  		else
  		{
  		message.channel.sendMessage(greet[Math.floor(Math.random() * 2)]);
  		}
  	}
  		else if (message.content.match(/blow me/i))
  		{
  		blowNum = (Math.floor(Math.random() * 25)+1);
  		if (blowNum == 1)
      		{
          	message.channel.sendMessage("Later.")
      		}	
  		else
  		{
  		message.channel.sendMessage("No thanks.");
  		}
      	}
  		else if (message.content.match(/you suck/i))
  	{
  	message.channel.sendMessage("*sniff*");
  	}
  		else if (message.content.match(/can i see your source code/i))
  	{
  	message.channel.sendMessage("No way! You want to *copy* my source code?");
  	}
  		else if (message.content.match(/you are a great bot/i))
  	{
  	message.channel.sendMessage("Thanks!");
  	}
  		else if (message.content.match(/who is the best member of buzz team/i))
  	{
  	message.channel.sendMessage("Colou.");
  	}
  		else if (message.content.match(/who is the best member of donut team/i))
  	{
  	message.channel.sendMessage("Kenny Giles.");
  	}
  		else if (message.content.match(/who is the best member of bagel team/i))
  	{
  	message.channel.sendMessage("Genny Kiles.");
  	}
  		else if (message.content.match(/what is your favorite mod/i))
  	{
  	message.channel.sendMessage("Sunday Drive, made by **@Colou**.");
  	}
  		else if (message.content.match(/command list/i))
  	{
  	message.channel.sendMessage("Here is the list of commands I can respond to: ```@PetBot``` ```@PetBot How are you today?``` ```@PetBot Wake up!``` ```@PetBot What is the current HA release?``` ```@PetBot SHUT UP!``` ```@PetBot Play my mod``` ```@PetBot You talk too much``` ```@PetBot Command List``` ```@PetBot Do an impression of a robot``` ```@PetBot, I am your father``` ```@PetBot Hi``` ```@PetBot You suck``` ```@PetBot Can I see your source code?``` ```@PetBot You are a great bot!``` ```@PetBot Who is the best member of Buzz Team?``` ```@PetBot Who is the best member of Donut Team?``` ```@PetBot Who is the best member of Bagel Team?``` ```@PetBot What is your favorite mod?```");
  	}
  		else if (message.content.match(/who fixed you/i))
  	{
  	message.channel.sendMessage("**Literally Satan™**.");
  	}
  	else if (message.content.match(/what time is it/i))
  	{
  	message.channel.sendMessage("Time to go fuck yourself.");
  	}
  		else 
  	{
  	message.channel.sendMessage(mention[Math.floor(Math.random() * 3)]);
  	}
      return;
  });
  
  // THIS  MUST  BE  THIS  WAY
  client.login(process.env.BOT_TOKEN);
