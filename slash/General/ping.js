const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Get bot speed",
    cooldown: 10,
    run: async(interaction, client) => {
await interaction.reply('Pinging...')
const msg = await await interaction.fetchReply()
const ping = "```js\nLatency Ping is : " + Math.floor(msg.createdTimestamp - interaction.createdTimestamp) + " ms" + "\nAPI Ping : " + Math.round(client.ws.ping) + " ms" + "```"
interaction.editReply(ping)
}
}

