const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment, MessageEmbed  } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('map')
		.setDescription('Quick BD map display.'),
	async execute(interaction) {
		const embedded = new MessageEmbed()
			.setTitle("Here you go.")
		const file = new MessageAttachment("./img/mapBD.png");
        await interaction.reply({embeds: [embedded],files:[file]});
	},
};