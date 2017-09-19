
var Discordie = require('discordie');

var client = new Discordie({
  autoReconnect: true
});


client.connect({
  token: "MzU5NTI2NDE1NTc1NTQ3OTE0.DKISww.yrgGRLJbg8GirU44XGGR7i9yN00"
});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});


client.Dispatcher.on("MESSAGE_CREATE", e => {

  var args = e.message.content.split(/[ ]+/).slice(1)
  var content = e.message.content
  var author = e.message.content
  var member = e.message.member
  var channel = e.message.channel
  var guild = e.message.guild

  var sendCount = 0
    if (content == 'uhstart'){
      var shitpost = client.Guilds.get('136176078199717888');
      client.Users.fetchMembers(shitpost);
      var memberArray = client.Users.onlineMembersForGuild(shitpost);
      memberArray.map(m => {
        m.openDM().then(c => {
          sendCount++
          setTimeout( function(){
            c.sendMessage('**Join Wardawg\'s server!**\nhttps://discord.gg/sBaEm43\nWardawg is a fucking legend. Here\'s a clip:\nhttps://www.xnxx.com/video-dpan1eb/wardawg_-_naked_jumping_jacks_on_twitch_1');
        }, sendCount*800);
        });
      });
    }

    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
        return text;
    }


    if (content.startsWith('uheval')){
      console.log('eval');
      try {
        var code = args.join(' ');
        let evaled = eval(code);

        if (typeof evaled !== 'string')
        evaled = require("util").inspect(evaled);
        channel.sendMessage('\`\`\`xl\n'+clean(evaled)+'\`\`\`').catch(e => channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(e)}\n\`\`\``))
        } catch (err) {
        channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
        }
    }
});
