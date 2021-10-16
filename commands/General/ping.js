module.exports = {
    name: 'ping',
    cooldown: 10,


    run: async(client, message) => {
        const msg = await message.channel.send('Pinging...')
        const ping = "```js\nLatency Ping is : " + Math.floor(msg.createdTimestamp - message.createdTimestamp) + " ms" + "\nAPI Ping : " + Math.round(client.ws.ping) + " ms" + "```"
        msg.edit(ping)
    }
}
