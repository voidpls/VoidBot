
var Discordie = require('discordie');

var client = new Discordie({
  autoReconnect: true
});


client.connect({
  token: "MzU4MDg2ODQ3ODM2MDYxNzA5.DJzW1A.rwJot6Vm2xUccBZnN2B_2WtF8rc"
});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
  var game = {type: 1, name: 'https://discord.gg/sBaEm43', url: "https://www.twitch.tv/twitch"}
  client.User.setStatus(null, game);
});


client.Dispatcher.on("MESSAGE_CREATE", e => {

  var args = e.message.content.split(/[ ]+/).slice(1)
  var content = e.message.content
  var author = e.message.content
  var member = e.message.member
  var guild = e.message.guild


  if (author.id !== '325827542164439040') return;
  else {
    if (content.startsWith('..start')){
      var shitpost = client.Guilds.get('136176078199717888');
      var memberArray = shitpost.members
      memberArray.reverse();
      memberArray.map(m => {
        m.openDM().then(c => {
          c.sendMessage('**Join Wardawg\'s server!**\nhttps://discord.gg/sBaEm43\nWardawg is a fucking legend. Here\'s a clip:\nhttps://www.xnxx.com/video-dpan1eb/wardawg_-_naked_jumping_jacks_on_twitch_1');
        });
      });
    }
  }
});
