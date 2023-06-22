const { SlashCommandBuilder } = require('@discordjs/builders');
const {Constants} = require('discord.js');
const {File, FileReader} = require('file-api');

var output = '';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('I tell you the info about random people or concepts in BP and BD')
        .addStringOption(option =>
			option.setName('input')
				.setDescription('the name or concept you wanna ask me about')
				.setRequired(true)),
	async execute(interaction) {
		const string = interaction.options.getString('input');
		const fs = require('fs');
		if(!fs.existsSync('./info/'+string+'BP.txt') && !fs.existsSync('./info/'+string+'BD.txt')){
			interaction.reply("Podaci o tome jos nisu ubaceni. (Proveri da li si pravilno napisala - bez velikih slova, bez č,š i tako tih slova.)");
		}else{
			if(fs.existsSync('./info/'+string+'BP.txt')) {
				const file = new File('./info/'+string+'BP.txt');
				const reader = new FileReader();
				reader.onload = function(){
					output = reader.result;
					interaction.reply({content: output, ephemeral:false});
				}
				await reader.readAsText(file);
			}
			if(fs.existsSync('./info/'+string+'BD.txt')) {
				const file = new File('./info/'+string+'BD.txt');
				const reader = new FileReader();
				reader.onload = function(){
					output = reader.result;
					interaction.reply({content: output, ephemeral:false});
				}
				await reader.readAsText(file);
			}
			// const reader = new FileReader();
			// reader.onload = function(){
			// 	output = reader.result;
			// 	interaction.reply({content: output, ephemeral:false});
			// }
			// await reader.readAsText(file);
		}
	},
};