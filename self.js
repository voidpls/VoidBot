var Discordie = require('discordie');

var client = new Discordie({
  autoReconnect: true
});

var prefix = '..'

client.connect({
  token: "MzI1ODI3NTQyMTY0NDM5MDQw.DGMMdg.cCDzjDqP-kbHFvv6Os1XSpRaL2U"
});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
  var args = e.message.content.split(/[ ]+/).slice(1)

  if (e.message.author.id !== client.User.id) return;
  else {

    if (e.message.content.startsWith(prefix+'stream ')){
      var game = {type: 1, name: args.join(' '), url: "https://www.twitch.tv/twitch"}
      client.User.setStatus(null, game);
      e.message.delete()
    }

  }
});
