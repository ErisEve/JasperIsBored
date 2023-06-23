const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment, MessageEmbed  } = require('discord.js');
// const Commando  = require('discord.js-commando');

const memes = [
	"aitijabelike.png",
	"arciexe.png",
	"drejvenexe1.png",
	"drejvenexe2.png",
	"dzasperssleep1.png",
	"dzasperssleep2.png",
	"dzonatanssleep1.png",
	"dzonatanssleep2.png",
	"flamelexe.png",
	"flamelexe1.png",
	"flamelexe2.png",
	"flamelpisepoeziju.png",
	"hilbertexe1.png",
	"JEJATM-flamelexe1.png",
	"jonathanexe.png",
	"mavinimrzeeliseovce.png",
	"nikolasexe2.png"
]

module.exports = {

	// constructor(client){
	// 	super(client);
	// }

	// run = (message)=>{
	// 	const attachment = new MessageAttachment('/img-memes/aitijabelike.png');

	// 	message.reply("Here you go.");//,{attachment:attachment});
	// }

	data: new SlashCommandBuilder()
		.setName('giveameme')
		.setDescription('I will send you a meme from my inventory.'),
	async execute(interaction) {
		// await interaction.reply("");
        // Channel.send("message",{files: "/img-memes/aitijabelike.png"});
		const embedded = new MessageEmbed()
			.setTitle("Here you go.")
			// .setImage('img-memes/aitijabelike.png')
		const str = './img-memes/'+memes[Math.floor(Math.random()*memes.length)]
		const file = new MessageAttachment(str);
		// const imagecook = new MessageAttachment('./img-memes/aitijabelike.png', 'aitijabelike.png');
		console.log(str);
        await interaction.reply({embeds: [embedded],files:[file]});
	},
};

// const file = new MessageAttachment('../img-memes/aitijabelike.png');
// const exampleEmbed = new MessageEmbed()
// 	.setTitle('Some title')
// 	.setImage('../img-memes/aitijabelike.png');

// channel.send({ embeds: [exampleEmbed], files: [file] });