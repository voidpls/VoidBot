const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.id !== '359542365926457359') return;
  else {
  var args = msg.content.split(/[ ]+/).slice(1)

  if (msg.content.toLowerCase().startsWith('..e ')) {
    if (!msg.member) color = 16777215
    else var color = msg.member.colorRole.color
    msg.delete();
    msg.channel.send({embed: {
      color: color,
      description: args.join(' ')
    }});
  }

}
});

client.login('MzU5NTQyMzY1OTI2NDU3MzU5.DKIiaQ.3VEdAuSlxJ5o9wKeyfhgM6TaP7U');
