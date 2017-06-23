

var Discordie = require("discordie");
var client = new Discordie({
  messageCacheLimit: 1000,
  autoReconnect: true
});

client.connect({
  token: "MzI1ODI3NTQyMTY0NDM5MDQw.DC41rw.zS7WWmwET_Efqcbb-EVTQumbDYs"
});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});


client.Dispatcher.on("MESSAGE_CREATE", e => {
  if (e.message.author !== client.user) return;
    let prefix = "..";
    if (!e.message.content.startsWith(prefix)) return;

    var args = e.message.content.split(/[ ]+/);
    if (e.message.content.startsWith(prefix + "clr")) {
      let messagecount = parseInt(args[1]);
      e.message.channel.fetchMessages({
          limit: 100
        })
        .then(messages => {
          let msg_array = messages.array();
          msg_array = msg_array.filter(m => m.author.id === client.user.id);
          msg_array.length = messagecount + 1;
          msg_array.map(m => m.delete().catch(console.error));
      });
  };
});
