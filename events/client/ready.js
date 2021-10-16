const { Collection, MessageEmbed ,WebhookClient} = require('discord.js')

module.exports = async client => {   
      const webhook = new WebhookClient({id:'898610433496326234', token:'y_LeXvk63PY_QymQQSe_dQRbnIB9J33Al-z8_q_sBAC2-b0SMQe7YhSz5ddbZfSBzskx'})
      const embed = new MessageEmbed()
.setDescription(`Logged in as ${client.user.tag}`)
      client.user.setActivity('https://github.com/e0o', {type: 'LISTENING'})
      console.log(`Logged in as ${client.user.tag}`);
      await webhook.send( {
            username: "consloe.log",
            avatarURL: "https://cdn.discordapp.com/attachments/739738457529778237/898611515991674910/image.png",
            embeds: [embed]
      })
      
};


