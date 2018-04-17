const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} - 25000 bot`);
});


client.on('message', msg => {

  if (msg.content.startsWith('24999') && msg.channel.id == '435284910807449610') {

    msg.channel.send('25000').then(() => {

      setTimeout(() => {process.exit()}, 5000)

    });
  }

});

client.login('MzU5NTQyMzY1OTI2NDU3MzU5.DKIiaQ.3VEdAuSlxJ5o9wKeyfhgM6TaP7U');
