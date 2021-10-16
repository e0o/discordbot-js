const { Collection} = require('discord.js')

module.exports = async(client, interaction) => {
    if (!interaction.isCommand()) return;
	if (!client.slash.has(interaction.commandName)) return;
	if (!interaction.guild) return;
	const command = client.slash.get(interaction.commandName)
	|| client.slash.find(cmd => cmd.aliases && cmd.aliases.includes(cinteraction.commandName));

if (!command) return;

if (command.guildOnly && interaction.channel.type === 'dm') {
	return interaction.reply('I can\'t run that command inside DMs!');
}


const { cooldowns } = client;

if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

if (timestamps.has(interaction.user.id)) {
	const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return interaction.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	}
}

timestamps.set(interaction.user.id, now);
setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);


try {
	command.run(interaction, client);
} catch (error) {
	console.error(error);
	interaction.reply('there was an error trying to run that command!');
}
}
