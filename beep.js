const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setTimeout(function(){process.exit()}, 86400000);
});


var a = true

client.on('message', msg => {

  var p = '.'

  if (!msg.content.startsWith(p)) return;

  if (msg.author.id !== client.user.id) return;

  var args = msg.content.split(/[ ]+/).slice(1)


//eval
  if (msg.content.toLowerCase().startsWith(p + 'eval')){
    try {
      var code = args.join(' ');
      let evaled = eval(code);

      if (typeof evaled !== 'string')
      evaled = require("util").inspect(evaled);
      msg.channel.send('\`\`\`xl\n'+clean(evaled)+'\`\`\`').catch(e => msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(e)}\n\`\`\``))
    } catch (err) {
        msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
    }
  }


//clr
  if (msg.content.startsWith(p+'clr ')) {
    if (!isNaN(args[0])){
      msg.channel.fetchMessages({limit: 100}).then(msgs => {
        var msgArray = msgs.array()
        msgArray = msgArray.filter(m => m.author.id === msg.author.id && m.deletable == true)
        msgArray.length = parseInt(args[0]) + 1;
        msgArray.map(m => m.delete());
      })
    }
    else return;
  }


  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;
  }

});

client.login("NDMyNzI1MzI0MTQxMjk3NjY0.DaxkSQ.mNpTXiHvrI8-KligbyblU3T0tsY");
