var Discordie = require("discordie");
var client = new Discordie({
  messageCacheLimit: 1000
});

//variables
var links = [
  'http://www.voidpls.tk/diversity/1.jpg',
  'http://www.voidpls.tk/diversity/2.jpg',
  'http://www.voidpls.tk/diversity/3.jpg',
  'http://www.voidpls.tk/diversity/4.jpg',
  'http://www.voidpls.tk/diversity/5.jpg'
]

var ids = [
  '280788029575004160',
  '241875461171445761',
  '255549538167685120',
  '299052998355714049',
  '191386226442502145',
  '204918388793802752',
  '135721889828962305',
  '315824677115396096',
  '323992245781135360',
  '299036445157621760',
  '325313826352398350'
]
//descriptions:
var heilInfo = '**..heil** | Posts a picture of hitler \n'
var gasInfo = '**..gas** | Sends "Gas the Kikes" \n'
var pollInfo = '**..poll [question]** | Makes a poll \n'
var diversityInfo = '**..diversity** | Sends a random picture on diversity \n'
var niggerInfo = '**..nigger** | Sends a nigger \n'
var morticiaInfo = '**..morticia** | Darn Russian Spy \n'

var remindInfo = '**..remind** | Hitler did nothing wrong \n'
var pingInfo = '**..ping** | Pong \n'

var botid = ['323992245781135360']
var everyone = heilInfo + gasInfo + pollInfo + diversityInfo + niggerInfo + morticiaInfo
var mods = remindInfo + pingInfo


//connect
client.connect({
  token: "MzIzOTkyMjQ1NzgxMTM1MzYw.DCLlRw.xs1GqfbDfpxjQ3RSGZR2FzSspCE"
});
  client.User.setGame('made by Void | ..help');
client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});


//commands
client.Dispatcher.on("MESSAGE_CREATE", e => {
  var args = e.message.content.split(/[ ] + /)
  client.Users.fetchMembers()

/*  if (e.message.content.startsWith('..clr')){
  e.message.channel.fetchMessages(200).then(msg => {
    let msgArray = msgs.filter(m => m.author.id === '323992245781135360')
    msgArray.length = parseInt(args[0], 10) + 1
    msgArray.deleteMessages;
  });
}*/
//self message function
  function on_message(arg1, arg2){
    if (e.message.content == arg1 && ids.includes(e.message.author.id))
    e.message.channel.sendMessage(arg2);
  };

//global message function
  function globalon_message(arg1, arg2){
  if (e.message.content == arg1)
    e.message.channel.sendMessage(arg2);
  };

//poll
  if (e.message.content.startsWith('..poll')) {
  e.message.channel.sendMessage('**Poll:**' + args.join(" ").substring(6));
  };

//poll part 2
  if (e.message.content.startsWith('**Poll:**') &&
      botid.includes(e.message.author.id)) {
    e.message.addReaction('✅');
    e.message.addReaction('❎');
  };

//diversity
  var i = Math.floor(links.length * Math.random());
  if (e.message.content == '..diversity')
  e.message.channel.sendMessage(links[i]);

//level up
  if (e.message.content.includes('leveled up!')){
  e.message.channel.sendMessage('***L-L-LEVEL UP!!!***');
  };


//reacts
  if (e.message.author.id == '299052998355714049' && e.message.guild.id == '317978984119795712')
  e.message.addReaction(':swastika:322900266959765506');
  else if (e.message.author.id == '191386226442502145' && e.message.guild.id == '261841687784062977')
  e.message.addReaction(':haseeb2:261847395632021504');
  else if (e.message.author.id == '100422477963870208' && e.message.guild.id == '317978984119795712'){
  e.message.addReaction('👨🏿');
  e.message.addReaction('🔫');
}
//echo
  if (e.message.content.startsWith('..echo') &&
      e.message.author.id == '299052998355714049')
  e.message.channel.sendMessage(args.join(" ").substring(6));
  else if (e.message.content.startsWith('..echo') &&
      e.message.author.id != '299052998355714049')
      e.message.reply('nice try')

//help
  if (e.message.content == '..help' && e.message.guild.id == '325315599708454913'){
  client.Users.getMember('261841687784062977', '323992245781135360')
  var user = client.User;
  var username = user.username;
  var me = client.Users.find(u => u.id == '299052998355714049');
  var pfp = me.avatarURL;

//embed
  e.message.channel.sendMessage('',false, {
      color: 0xD00000,
      author: {
       name: 'ϟϟ Bot Help',
       icon_url: user.avatarURL
     },
      fields: [{name: "**Commands**", value: everyone},
              {name: "**Mod Commands**", value: mods}],
      footer: {
        icon_url: pfp,
        text: "Made by Void, for the honor of Mein Fürher"
      }
    });
  /*e.message.channel.fetchMessages(1).then(msg => {
    msg.delete().catch(err => this.log.err(err))
  }); */
};


//basic commands
  on_message('..ping', '**Pong!** :ping_pong:');
  on_message('..rep', 't!rep <@299052998355714049>');
  on_message('..daily', 't!daily <@255549538167685120>');
  on_message('..on', '.on <@299052998355714049>');
  globalon_message('..morticia', 'http://www.voidpls.tk/files/morticia.jpg')
  globalon_message('..nigger', 'http://www.voidpls.tk/files/nigger.jpg');
  globalon_message('..gas', ':star_of_david: **Gas the Kikes** :star_of_david:');
  globalon_message('..heil', 'http://www.voidpls.tk/files/hitler.png');
  on_message('..remind', '**--------------------------------\n<:swastika:325668829759930368>   Daily Reminder:   <:swastika:325668829759930368>\nHitler Did Nothing Wrong!\n--------------------------------**');

//autodelete
  if (e.message.content.startsWith('..') && e.message.guild.id == '317978984119795712')
  e.message.delete();
});