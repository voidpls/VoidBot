var Discordie = require("discordie");

var client = new Discordie({

  messageCacheLimit: 1000,
  autoReconnect: true
});


client.connect({token: "Mzc3NjEyMzk1Mzk0MjM2NDE3.DOUVgg._PU24yBBxHE4MRplJLynAAw5Bcg"});


client.Dispatcher.on("GATEWAY_READY", e => {

  console.log("Connected as: " + client.User.username);


});

client.Dispatcher.on("GUILD_MEMBER_ADD", e => {
  var passcodeChannel = client.Channels.get('269612335675473921')
  passcodeChannel.sendMessage(
    `Welcome to ${e.guild.name}, ${e.member.mention}! Read <#288606534815186944> and type **--dank** in this channel to enter the server!`
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
    '—dank',
    '––dank',
    '–dank'
  ]

  var ownerID = '359542365926457359'
  var dankmemes = client.Guilds.get('235366697249275905')
  var passRole = dankmemes.roles.filter(r => r.id == "268923144935440406")[0]

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

  if (content.startsWith(p + 'avatar')){
    if (author.can(Discordie.Permissions.General.MANAGE_CHANNELS, guild) || author.id == ownerID){
      try {
        client.User.edit(null, null, args[0]);
        channel.sendMessage('<:check:335544753443831810> **Avatar Changed**');
      }
      catch (e) {
         channel.sendMessage('```' + e + '```');
      }
    }
    else channel.sendMessage('<:error:335660275481051136> **Staff Only**"')
  }

//nick

  if (content.startsWith(p + 'nick')){
    if (author.can(Discordie.Permissions.General.MANAGE_CHANNELS, guild) || author.id == ownerID){
      var botUser = client.User.memberOf(guild)
      if (!args[0]) args[0] = null
      botUser.setNickname(args[0]);
      channel.sendMessage('<:check:335544753443831810> Nickname changed to** '+args.join(' ')+' **')
    }
    else channel.sendMessage('<:error:335660275481051136> **Staff Only**"')
  }

//name

  if (content.startsWith(p + 'name')){
    if (author.id == ownerID){
      client.User.setUsername(args[0])
      channel.sendMessage('<:check:335544753443831810> Name changed to** '+args.join(' ')+' **')
    }
    else channel.sendMessage('<:error:335660275481051136> **Owner Only** [Use --nick to change Nickname]')
  }


//dank

  if (passArray.includes(content) && channel.id == '269612335675473921'){
    if (author.hasRole(passRole)) channel.sendMessage('you already have dank memer stinky')
    else {
      message.delete();
      channel.sendMessage(author.mention + '​, ( ͡° ͜ʖ( ͡° ͜ʖ ͡° )ʖ ͡° ) - You came to the right neighborhood.');
      author.assignRole(passRole);
    }
  }

//undank

  if (content == '--undank' && channel.id == '269612335675473921') {
    if (!author.hasRole(passRole)) channel.sendMessage('you dont have dank memer stinky')
    else {
      channel.sendMessage('undanked *dabs*');
      author.unassignRole(passRole);
    }
  }



});
