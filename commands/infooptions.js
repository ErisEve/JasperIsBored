const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder } = require('@discordjs/builders');
const {Constants} = require('discord.js');
const {File, FileReader} = require('file-api');

const commands = [];
const commandsPath = path.join('info');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.txt'));
    
for (const file of commandFiles) {
    // const filePath = path.join(commandsPath, file);
    // const command = require(filePath);
    commands.push(file.replace('.txt',''));
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('infooptions')
		.setDescription('I give you a list of all info about random people or concepts in BP that I have stored'),
	async execute(interaction) {
        var output = "My /info command has these possible inputs:\n";
        commands.forEach(element => {
            output+=element+', ';
        });
		await interaction.reply(output);
	},
};