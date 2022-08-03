const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('I pong back.'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};