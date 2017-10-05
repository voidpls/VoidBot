var Discordie = require('discordie');

var client = new Discordie({
  autoReconnect: true
});

var prefix = '..'

client.connect({token: "MzU5NTQyMzY1OTI2NDU3MzU5.DKIiaQ.3VEdAuSlxJ5o9wKeyfhgM6TaP7U"});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {

});
