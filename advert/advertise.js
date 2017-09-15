var Discordie = require('discordie');

var client = new Discordie({
  autoReconnect: true
});


client.connect({
  token: "MzI1ODI3NTQyMTY0NDM5MDQw.DGMMdg.cCDzjDqP-kbHFvv6Os1XSpRaL2U"
});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {

  var args = e.message.content.split(/[ ]+/).slice(1)
  var content = e.message.content
  var author = e.message.content
  var member = e.message.member
  var guild = e.message.guild


  if (e.message.author.id !== client.User.id) return;
  else {
    if (content.startsWith('..invite '))

  }
});
