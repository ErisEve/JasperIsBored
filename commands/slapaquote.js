const { SlashCommandBuilder } = require('@discordjs/builders');

const quotes = [
	"Understanding languages doesn't imply understanding people - Cassian",
	"If you want to set yourself free, you have to return the blood you took first. - Eliseo",
	"The only face that didn't distort in terror. Terrifyingly naive. This is him, I thought - the reflection of my own evil - Draven",
	"I was a very pathetic kid - Carol",
	"There's place for only one Nicolas in this temple - Nicolas Savona",
	"There will be many people that you'd like to kill, and wisdom isn't in thinking up the way to do it, but in knowing when to stop - Hilbert",
	"Draven, you motherfucking idiot - Archi",
	"I never trusted, neither gods, nor people. I don't trust anybody - Nicolas Mordecai",
	"Your biggest mistake was... letting them forget about you - Elise",
	"The goal never justifies the means, but the means are still required to achieve a goal - Joel",
	"My blood is the essence of all the evil in the world - Elian",
	"Always remember that in the world there are a lot of people like me, who can change what you see and feel, and make everything look real! But never forget - there's only one thing stronger than human perception, and that thing is TRUTH - Flamel",
	"To be or not to be, that is the question - Tornado",
	"I think therefore I am - Tornado",
	"That's one small step for a horse, one giant leap for horsekind. - Tornado",
	"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. - Tornado",
	"Keep your friends close, but your enemies closer. - Tornado",
	"She was punished for her existence. Guilty or not, that doesn't matter in this world. Life never asks you that question. - William",
	"I want to live without hurting others. - Eliseo"
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slapaquote')
		.setDescription('I give you random BP quote'),
	async execute(interaction) {
		await interaction.reply(quotes[Math.floor(Math.random()*quotes.length)]); //DO NOT RUN UNTIL FINISHED
	},
};