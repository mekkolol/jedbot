const Discord = require("discord.js");

const PREFIX = "pp!"

var bot = new Discord.Client();

bot.on("ready", function(message) {
	console.log("ready to run")
})

bot.on('message', message => {
	if (message.content === 'owo') {
	message.channel.send("whats this?")
	}
  });

  bot.on('message', message => {
	if (message.content === 'uwu') {
	message.channel.send("whats this?")
	}
  });

var nocommand = [
	"use a valid command u stupid bitch",
	"what the fuck"
];

var heybro = [
	"hi",
	"hey",
	"hola",
	"yo",
	"yo my dog",
	"ayo"
]

var ball = [
	"lol no",
	"hmm... maybe",
	"fuck no hahahahahhahahahaha",
	"lemme think about it pussy",
	"fuck yeah",
	"hell yeah",
	"let me think about it... yeah no",
	"sure",
	"100% haha",
	"nobody loves you"
]

var coin = [
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"it landed on the side",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"it fell in a crack lol",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails",
	"heads",
	"tails"
]

bot.on("message", function(message) {
	if (message.author.equals(bot.user)) return;

	if (!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0].toLowerCase()) {
		case "udu":
			message.channel.send(heybro[Math.floor(Math.random() * heybro.length)])
		break;
		case "ban":
		message.channel.send("this bot is in beta. this command will be out soon. or never. just do it the normal way until then.",{
			file: "https://i.imgur.com/GjIt1UM.gif"
		});
			break;
		case "killniggers":
			message.channel.send("already did lol")
			break;
		case "unsub":
		if (args[1]) {
			message.channel.send("haha " + message.author + " unsub " + (args[1]) + " lol");
		} else {
			message.channel.send("tell me who u wanna unsub before u do it u fuckin idiot")
		};
		break;
		case "site":
		message.channel.send("http://chegg.ml")
		break;
		case "invite":
		message.channel.send("only invite to servers that are epic. or else u will be the dead https://discordapp.com/oauth2/authorize?client_id=502198475405000725&scope=bot")
		break;
		case "endracism":
		message.channel.send("impossible")
		break;
		case "help":
			var embed = new Discord.RichEmbed()
				.setTitle("epic commands:")
				.addField("prefix:", "pp!")
				.addField("ban", "ban le epic user mentioned")
				.addField("unsub", "unsub to people when they are naughty boys")
				.addField("killniggers", "just a general command")
				.addField("flip", "flips a coin")
				.addField("invite", "link to invite me")
				.addField("site", "link to my website")
				.addField("8ball", "answers yes or no questions")
				.setFooter("make sure to smash that motherfuckin like button")
				.setThumbnail(message.author.avatarURL)
				.setColor(0xed1c24)
			message.channel.sendEmbed(embed)
		break;
		case "mute":
		message.channel.send("just ban them u pussy")
		break;
		case "8ball":
			if (args[1]) {
				message.channel.send(ball[Math.floor(Math.random() * ball.length)])
			} else {
				message.channel.send("give me yo question girl")
			}
		break;
		case "goole":
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		message.author.send("goole",{
			file: "https://i.imgur.com/KFFVWz9.gif"
		});
		break;
		case "avatar":
			message.channel.send(message.author + "'s avatar: " + message.author.avatarURL)
		break;
		case "flip":
		message.channel.send(coin[Math.floor(Math.random() * coin.length)])
		break;
		default:
			message.channel.send(nocommand[Math.floor(Math.random() * nocommand.length)]);
	}
});

var welcome = [
	"yo ",
	"whatup ",
	"hey "
];

var gamelol = [
	"your mom hahahahhahahahahahahahhah",
	"Fortnite Battle Royale",
	"despacito",
	"ableton live 10",
	"pussy.com"
];

bot.on('ready', () => {
	bot.user.setGame(gamelol[Math.floor(Math.random() * gamelol.length)] + " | " + PREFIX);
  });

bot.login(process.env.BOT_TOKEN);
