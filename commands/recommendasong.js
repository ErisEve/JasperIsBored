const { SlashCommandBuilder } = require('@discordjs/builders');

const songs = [
	"Time to feel like a loser that you are: https://youtu.be/FMggikoSg-s",
    "Hey, cheer up, cause you are: https://youtu.be/h1mPu8GQzdQ",
    "Jasper's anthem cause its your unlucky day and I dont make the rules: https://youtu.be/mV6FMXClArU",
    "Get rid of your frustration with this beautiful song. I sing it loudly in my room when I'm feeling meh: https://www.youtube.com/watch?v=mvJjmWTg7Qo",
    "Cause in Aitia drinking is forbidden, so we gotta find alternatives: https://www.youtube.com/watch?v=mkJq7E4Y7L8",
    "Cause I'm feeling bad so you'll have to as well: https://youtu.be/yU7fzk0Dmis",
    "My advice for you today: https://www.youtube.com/watch?v=yeRuFdgrwuY",
    "This, cause i'm feeling edgy: https://www.youtube.com/watch?v=GmXsbw6-FK4",
    "Existential crisis in song form for you today: https://youtu.be/UuLTEUgwEXo",
    "This is what I brought you, this you can keep: https://youtu.be/d0Gsyr_0PpA",
    "I'm a loser, and you are asking me to give you song rec? Okay then: https://www.youtube.com/watch?v=1CTced9CMMk",
    "I'm feeling edgy today and kinda annoyed: https://www.youtube.com/watch?v=KUNjh1IIPpg"
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('recommendasong')
		.setDescription('I suggest you a song to listen to from my depressed af playlist thats too long for no reason'),
	async execute(interaction) {
		await interaction.reply(songs[Math.floor(Math.random()*songs.length)]); //DO NOT RUN UNTIL FINISHED
	},
};