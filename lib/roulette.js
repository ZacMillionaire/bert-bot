function playRoulette(bot,chatterID,chatRoomID,message,june) {
	if(message=="!roulette") {
		console.log(june.colour.cyan+"[SPIN THE WHEEL] "+june.colour.reset+chatterID);
		spinTheWheel = Math.floor(Math.random()*101);
		if(spinTheWheel>=84) {
			console.log(june.colour.green+"[SPUN THE WHEEL] "+june.colour.reset+chatterID+" rolled "+spinTheWheel);
			bot.botStats.losers++;
			bot.sendMessage(chatRoomID,"(☞ﾟ∀ﾟ)☞ You lost!");
			bot.sendMessage(chatterID,"(☞ﾟ∀ﾟ)☞ You lost!");
			bot.kick(chatRoomID, chatterID);
		} else {
			console.log(june.colour.red+"[SPUN THE WHEEL] "+june.colour.reset+chatterID+" rolled "+spinTheWheel);
			bot.sendMessage(chatRoomID,"*click*");
			bot.botStats.winners++;
		}
	}
	if(message=="!superroulette") {
		console.log(june.colour.cyan+"[SPIN THE WHEEL] "+june.colour.reset+chatterID);
		spinTheWheel = Math.floor(Math.random()*101);
		if(spinTheWheel>=84) {
			console.log(june.colour.green+"[SPUN THE WHEEL] "+june.colour.reset+chatterID+" rolled "+spinTheWheel);
			bot.botStats.losers++;
			bot.sendMessage(chatRoomID,"(☞ﾟ∀ﾟ)☞ You super lost!");
			bot.sendMessage(chatterID,"(☞ﾟ∀ﾟ)☞ You super lost! (That means you're banned. (lol))");
			bot.ban(chatRoomID, chatterID);
		} else {
			console.log(june.colour.red+"[SPUN THE WHEEL] "+june.colour.reset+chatterID+" rolled "+spinTheWheel);
			bot.sendMessage(chatRoomID,"*click*");
			bot.botStats.winners++;
		}
	}
	if(message=="!braelette") {
		console.log(june.colour.cyan+"[SPIN THE WHEEL] "+june.colour.reset+chatterID);
		spinTheWheel = Math.floor(Math.random()*101);
		if(spinTheWheel>=84) {
			console.log(june.colour.green+"[SPUN THE WHEEL] "+june.colour.reset+chatterID+" rolled "+spinTheWheel);
			bot.botStats.losers++;
			if(spinTheWheel>=95) {
				bot.sendMessage(chatRoomID,"ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━!!!!!");
				bot.sendMessage(chatRoomID,"(☞ﾟ∀ﾟ)☞ Get the fuck out!");
				bot.ban(chatRoomID,'76561197994626023');
			} else if(spinTheWheel==100) {
				bot.sendMessage(chatRoomID,"ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━!!!!!");
				bot.sendMessage(chatRoomID,"SUPER WINNER!");
				bot.ban(chatRoomID,'76561197994626023');
				bot.ban(chatRoomID,chatterID);
			} else {
				bot.sendMessage(chatRoomID,"(☞ﾟ∀ﾟ)☞ WINNER!");
				bot.kick(chatRoomID,'76561197994626023');
			}
		} else {
			if(spinTheWheel<=10) {
				bot.sendMessage(chatRoomID,"(☞ﾟ∀ﾟ)☞ You tried and failed!");
				bot.sendMessage(chatterID,"(☞ﾟ∀ﾟ)☞ You tried and failed!");
				bot.ban(chatRoomID,chatterID);
			}
			console.log(june.colour.red+"[SPUN THE WHEEL] "+june.colour.reset+chatterID+" rolled "+spinTheWheel);
			bot.sendMessage(chatRoomID,"*bummer*");
			bot.botStats.winners++;
		}
	}
}
exports.roulette = function(playerID,message,june){
	var bot = june.bot;
	var chatterID = playerID;
	var chatRoomID = bot.steamChatRoomID;
	rightnow = new Date();
	if(message=="!roulette"||message=="!superroulette"||message=="!braelette") {
		if(typeof bot.botStats[chatterID] == "undefined") {
			bot.botStats[chatterID] = {
				lastRequest : rightnow.getTime()/1000
			}
			playRoulette(bot,chatterID,chatRoomID,message,june);
		} else {
			timeElapsed = (rightnow/1000)-bot.botStats[chatterID].lastRequest;
			if(timeElapsed>=30) {
				bot.botStats[chatterID] = {
					lastRequest : rightnow.getTime()/1000
				}
				playRoulette(bot,chatterID,chatRoomID,message,june);
			} else {
				console.log(timeElapsed+" seconds ago");
			}
		}
	}
}