var Discordie = require('discordie');
var funcs = require("./func.js");

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
  var content = e.message.content
  var author = e.message.content
  var member = e.message.member
  var guild = e.message.guild


  if (e.message.author.id !== client.User.id) return;
  else {

//stream
    if (content.startsWith(prefix+'stream ')){
      var game = {type: 1, name: args.join(' '), url: "https://www.twitch.tv/twitch"}
      client.User.setStatus(null, game);
      e.message.delete()
    }
//clap
    if (content.startsWith(prefix+'clap ')){
      var clap = '👏'+args.join('👏')+'👏'
      e.message.edit(clap);
    }

//mockclap
  if (content.startsWith(prefix+'mockclap ')){
    var mocktxt = funcs.mock(e, args);
    var claptxt = mocktxt = mocktxt.split(' ');
    claptxt = '👏' + claptxt.join('👏') + '👏';
    e.message.edit(claptxt);
  }

//mock
    if (content.startsWith(prefix+'mock ')){
      var mocktxt = funcs.mock(e, args);
      e.message.edit(mocktxt);
      console.log(mocktxt)
    }

//clr
    if (content.startsWith(prefix+"clr ")) {
      funcs.clr(e, content, args);
    }

    if (content.startsWith('waaping')){
      e.message.edit('pong');
    }


  }
});
