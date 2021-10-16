const { Client, Collection } = require("discord.js"); 

const client = new Client({
 intents: 32767,
});


const fs = require("fs");
const config = require('./config.json');
const token = config.token;

client.commands = new Discord.Collection();
client.slash = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { readdirSync } = require('fs')
const path = require('path')


const commands = []
readdirSync("./slash/").map(async dir => {
	readdirSync(`./slash/${dir}/`).map(async (cmd) => {
	commands.push(require(path.join(__dirname, `./slash/${dir}/${cmd}`)))
    })
})
const rest = new REST({ version: "9" }).setToken(token);

(async () => {
	try {
		
		await rest.put(
			
			Routes.applicationCommands(config.botID),
			{ body: commands },
		);
		 
	} catch (error) {
		console.error(error);
	}
})();

["commands", "events", "slash"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.login(token);
