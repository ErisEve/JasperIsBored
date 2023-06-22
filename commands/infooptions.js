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
		.setDescription('I give you a list of all info about random people or concepts in BP and BD that I have stored'),
	async execute(interaction) {
        var output = "My /info command has these possible inputs:\n";
        output+="**Blood Dispute**\n";
        commands.filter(word =>  word.slice(-2) == 'BD').forEach(element => {
            output+=element.replace('BD','')+'  ~  ';
        });
        output+="\n";
		output+="**Gods of Ruin**\n";
        commands.filter(word =>  word.slice(-2) == 'BP').forEach(element => {
            output+=element.replace('BP','')+'  ~  ';
        });
        await interaction.reply(output);
	},
};