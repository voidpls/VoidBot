var Discordie = require("discordie");

var i2b = require('imageurl-base64');

var bella = require("bella-scheduler")

var client = new Discordie({

  messageCacheLimit: 1000,
  autoReconnect: true
});

//connect

client.connect({token: "Mzc3NjEyMzk1Mzk0MjM2NDE3.DOUVgg._PU24yBBxHE4MRplJLynAAw5Bcg"});

//ready / daily restart

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
  //setTimeout(function(){process.exit()}, 86400000)

});


//welcome message

client.Dispatcher.on("GUILD_MEMBER_ADD", e => {
  var passcodeChannel = client.Channels.get('269612335675473921')
  passcodeChannel.sendMessage(
    `Welcome to **${e.guild.name}**, ${e.member.mention}! Read <#288606534815186944> and type **--dank** to enter the server!`
  );
});



//dankmemer: <@&268923144935440406>

client.Dispatcher.on("MESSAGE_CREATE", e => {

  var message = e.message
  var channel = message.channel
  var author = message.member
  var guild = message.guild
  var content = message.content
  var args = content.split(/[ ]+/).slice(1)


  if (channel.isDM) return;
  if (message.author.bot) return;

  var p = '--'

  var passcodeChannel = client.Channels.get('269612335675473921')

  var passArray = [
    '--dank',
    '—dank'
  ]

  var ownerID = '359542365926457359'
  var dankmemes = client.Guilds.get('235366697249275905')
  var passRole = dankmemes.roles.filter(r => r.id == "268923144935440406")[0]
  var tempRole = dankmemes.roles.filter(r => r.id == "401622676893859842")[0]


//ping

  if (content == p + "ping"){
      let start = process.hrtime();
      channel.sendMessage("selfbot xddd: ").then(m => {
        const diff = process.hrtime(start);
        let time = diff[0] * 1000 + diff[1] / 1000000
        m.edit('selfbot xddd: **' + Math.round(time) + 'ms**');
    });
  }

//status

  if (content.startsWith(p + 'status')){
    if (author.can(Discordie.Permissions.General.MANAGE_CHANNELS, guild) || author.id == ownerID){
      client.User.setGame(args.join(' '))
      channel.sendMessage('<:check:335544753443831810> Status changed to **'+args.join(' ')+'**')
    }
    else channel.sendMessage('<:error:335660275481051136> **Staff Only**"')
  }

//avatar

  if (content.startsWith(p + 'avatar ')){
    if (author.id == ownerID){
      i2b(args[0], function(err, data){
        if (err) channel.sendMessage('<:error:335660275481051136> **Avatar Change Error**\`\`\`xl\n' + err.message + '```')
        else {
          client.User.setAvatar(data.dataUri);
          channel.sendMessage('<:check:335544753443831810> **Avatar Changed**');
        }
      });
    }
    else channel.sendMessage('<:error:335660275481051136> **Owner Only**"')
  }

//nick

  if (content.startsWith(p + 'nick')){
    if (author.can(Discordie.Permissions.General.MANAGE_CHANNELS, guild) || author.id == ownerID){
      var botUser = client.User.memberOf(guild)
      botUser.setNickname(args.join(' '));
      channel.sendMessage('<:check:335544753443831810> Nickname changed to** '+args.join(' ')+' **')
    }
    else channel.sendMessage('<:error:335660275481051136> **Staff Only**"')
  }


//name

  if (content.startsWith(p + 'name')){
    if (author.id == ownerID){
      client.User.setUsername(args.join(' '))
      channel.sendMessage('<:check:335544753443831810> Name changed to** '+args.join(' ')+' **')
    }
    else channel.sendMessage('<:error:335660275481051136> **Owner Only** [Use --nick to change Nickname]')
  }

//  var passRole = dankmemes.roles.filter(r => r.id == "268923144935440406")[0]
//  var tempRole = dankmemes.roles.filter(r => r.id == "401622676893859842")[0]
//dank

  if (passArray.includes(content) && channel.id == '269612335675473921'){
    if (!author) return;
    if (author.hasRole(passRole)) channel.sendMessage('you already have dank memer stinky')
    else {
      message.delete();
      channel.sendMessage('​( ͡° ͜ʖ( ͡° ͜ʖ ͡° )ʖ ͡° )╯╲___'+author.mention+' – Don\'t mind me just taking my **'+author.username+'** for a walk');
      if (author.roles.length == 0) {
        try {
          author.setRoles(["268923144935440406", "401622676893859842"]);
          bella.once('1d', () => {
            if (author) author.unassignRole("401622676893859842");
          });
        } catch (e) {
          console.log(e);
        }
      }
      else if (author.roles.length > 0){
        if (author) author.assignRole("268923144935440406").catch(e => console.log(e));
      }
    }
  }

//undank

  if (content == '--undank' && channel.id == '269612335675473921') {
    if (!author.hasRole(passRole)) channel.sendMessage('you dont have dank memer stinky')
    else {
      channel.sendMessage('<:yeet:329344020348272640> *undanked* <:yeet:329344020348272640>');
      author.unassignRole("268923144935440406");
    }
  }



});
