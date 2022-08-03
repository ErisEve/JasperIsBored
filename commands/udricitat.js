const { SlashCommandBuilder } = require('@discordjs/builders');

const quotes = [
	"Razumeti jezike ne znaci razumeti ljude - Kasijan",
	"Ako zelis da budes slobodan, moras prvo da vratis krv koju si uzeo. - Eliseo",
    "Jedino lice koje se nije iskrivilo u uzasu. Preteci naivno. To je on pomislio sam - refleksija mog zla - Drejven",
    "Bio sam jako patetican klinac - Kerol",
    "U ovom hramu ima mesta za samo jednog Nikolasa - Nikolas Savona",
    "Bice mnogo ljudi koje ces zeleti da ubijes, a mudrost nije u tome da smislis kako ces to uraditi, vec u tome da znas kada treba da stanes - Hilbert",
    "Drejvene, jebo te bog - Arci",
    "Ja nikad nisam imao poverenja, ni u bogove, ni u ljude. Ne verujem nikome - Nikolas Mordekaj",
    "Tvoja najveca greska... dopustas da te zaborave - Eliza",
    "Cilj nikada ne opravdava sredstva, ali sredstva su i dalje neophodna da bi se došlo do cilja. - Dzoel",
    "Moja krv je sama esencija svog zla koje postoji u čitavom svetu. - Elijan",
    "Ti si karta krvi, gde god putevi da te vode\nkad god se poseces, iznutra si crven.\nOd krvi te neces pobeci, ma sta god da s tobom bude,\nMa koliko da si stran, ma koliko da si cuven.\n  - Drejven, predstava 'Decak'",
    "Uvek upamtite to da u svetu postoje ljudi poput mene, ljudi koji mogu da promene sta vidite i sta osecate, i da ucine da sve deluje istinito! Ali ne zaboravite jedno - od ljudske percepcije postoji samo jedna jaca stvar, a to je ISTINA - Flamel",
    "Ona je kažnjena za svoje postojanje. Kriva ili nedužna, to uopšte nije bitno na ovom svetu. Život ti ne postavlja to pitanje. - Vilijam",
    "Zelim da zivim, a da ne povredjujem druge - Eliseo"
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('udricitat')
		.setDescription('I give you random BP quote, but in Serbian'),
	async execute(interaction) {
		await interaction.reply(quotes[Math.floor(Math.random()*quotes.length)]);
	},
};