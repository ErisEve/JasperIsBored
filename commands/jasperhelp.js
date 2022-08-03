const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jasperhelp')
		.setDescription('This is how to use me.'),
	async execute(interaction) {
		await interaction.reply(`**Hello, ${interaction.user.tag}, this is a list of all the options that I have.**\n~ /ping : *I pong back.*\n~ /server : *I will remind you of where you are currently in this moment*\n~ /user : *I steal your data because you gave it to me for free*\n~ /slapaquote : *I give you random BP quote*\n~ /udricitat : *I give you random BP quote, but in Serbian*\n~ /giveameme : *I will send you a meme from my inventory.*\n~ /recommendasong : *I suggest you a song to listen to from my depressed af playlist thats too long for no reason*\n~ /info [input] : *I tell you the info about random people or concepts in BP*\n~ /infooptions : *I give you a list of all info about random people or concepts in BP that I have stored*`);
	},
};