const discord = require('discord.js');
const client = new discord.Client;

//Storage
var artName = [""];
var artURL = [""];
var artVote = [0];
var voteAmount = 0;

client.on('ready', ()  =>{
    //console.log('I am ready!');
    client.user.setStatus("Online");
    client.user.setActivity(".help | Art Rating Bot")
});

client.on('message', message => {
	//Help Command
	if(message.content == '.help'){
        message.author.send({embed: {
		color: 3447003,
        author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
        },
        title: "INFORMATION:",
        description: "__**Welcome to ArtRateBot!**__ \n\n I\'m sure you must be new here to request help.\nHere is everything you need to know. \n\n ArtRateBot allows you the power to upload your artwork and have random people randomly rate it. Doesn\'t that sound like a great idea?\n\n Here are the basic commands: \n\n **.help** \n Brings you the help information you are currently reading. \n\n **.new** \n Allows you to upload new Artwork to the database. Please no NSFW, or anything that violates Discord\'s Terms of Service (found here: https:\/\/discordapp.com\/terms) \n\n **.rate** \n Presents you with a random Artwork to vote on. Click the Thumbsup to issue a like, or the Thumbsdown to dislike. \n\n**.getrating NameOfArtwork**\n Retrieve your Artwork Rating.  \n\n **.report NameOfArtwork** \n Reports the Artwork to our crack team of admins who will review the content and see if it violates the Discord TOS. You can also use this if an Artwork violates your copyright.",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "ArtRateBot - Democratising your Artwork since 2019"
            }
        }
    });
    }
	//User Uploading Command
    if(message.content.startsWith('.new') && message.channel.id == ("593505605067603980")){
    	var Attachment = (message.attachments).array();
    var args = message.content.slice(5);
    if (Attachment[0] == undefined){
    	message.reply(' You did not attach an image');
    }
    else if (args == undefined){
    	message.reply(' You did not name the Art');
    }
    else if (artName.indexOf(args) != -1){
    	message.reply(' There is already and artwork with this name');
    }
    else{
    	artName[voteAmount] = args;
    	artURL[voteAmount] = Attachment[0].url;
    	artVote[voteAmount] = 0;
    	voteAmount = voteAmount + 1;
    var embed = new discord.RichEmbed() .setTitle("Art Name: " + args) .setColor(0x00bf00) .setDescription("") .setFooter("Submission") .setImage(Attachment[0].url) .setTimestamp()
     message.guild.channels.get('593580020115701760').send({embed});
    
    }
	}
	//Rating Submissions Command
    if(message.content.startsWith('.rate') && message.channel.id == "593505617897979914"){
    	var ranNumb = Math.floor(Math.random() * Math.floor(voteAmount + 1));
    	if (artName[ranNumb] == undefined){
    		var ranNumb = Math.floor(Math.random() * Math.floor(voteAmount + 1));
    	}
    	else{
    	var embed = new discord.RichEmbed() .setTitle("Art Name: " + artName[ranNumb]) .setColor(0x00bf00) .setDescription("") .setFooter("Voting") .setImage(artURL[ranNumb]) .setTimestamp()
		message.channel.send({embed});
		message.react('👍').then(() => message.react('👎'));

		const filter = (reaction, user) => {
			return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
		};

		message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
		.then(collected => {
			const reaction = collected.first();
			if (reaction.emoji.name === '👍') {
				artVote[ranNumb] = artVote[ranNumb] +1;
				message.reply(' Rating successful, ' + artName[ranNumb] + ' now has a rating of:  ' + artVote[ranNumb] + ' Votes!');
			} else {
				artVote[ranNumb] = artVote[ranNumb] -1;
				message.reply(' Rating successful, ' + artName[ranNumb] + ' now has a rating of:  ' + artVote[ranNumb] + ' Votes!');
			}
		})
		.catch(collected => {
			message.reply(' you reacted with neither a thumbs up, nor a thumbs down.');
		});
		}
		}
		//Report Command
		if(message.content.startsWith('.report') && message.channel.id == "593505727406931982"){
    var reportmsg = message.content.slice(8);
    	message.reply(" Thank you for the report. The content will be reviewed as soon as possible.");
    var embed = new discord.RichEmbed() .setTitle("Report:") .setColor(0x00bf00) .setDescription(reportmsg) .setFooter("Report") .setImage() .setTimestamp()
     message.guild.channels.get('593932351747129449').send({embed});
	}
	if(message.content.startsWith('.remove') && message.channel.id == ("593932429106872332")){
    var args = message.content.slice(8);
    	var removeNum = artName.indexOf(args);
    	if (removeNum == -1){
    		message.channel.send("Thats not an Art Name");
    	}
    	else{
    		delete artName[removeNum];
    	 delete artURL[removeNum];
    	 delete artVote[removeNum];
     message.channel.send("Art has been Removed");
     }
    
    
	}
	//Getting the rates of a submission
	if(message.content.startsWith('.getrating')&& message.channel.id == ("593950204810756096")){
    var args = message.content.slice(11);
    	var removeNum = artName.indexOf(args);
    	if (removeNum == -1){
    		message.channel.send("There is no submissions with that name");
    	}
    	else{
     message.channel.send(args + " has a rating of " + artVote[removeNum] + " votes!");
    }
    
	}
	
});

client.login(BOT_TOKEN);
