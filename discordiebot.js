//https://github.com/voidpls/selfbot.git
//ssh -i "bot.pem" ec2-user@ec2-54-91-219-104.compute-1.amazonaws.com


var Discordie = require("discordie");
var client = new Discordie({
  messageCacheLimit: 1000,
  autoReconnect: true
});
var data = require('./data.json')
var redpill = data.redpill
var holocaust = data.holocaust

//variables
var links = [
  'http://www.voidpls.tk/diversity/1.jpg',
  'http://www.voidpls.tk/diversity/2.jpg',
  'http://www.voidpls.tk/diversity/3.jpg',
  'http://www.voidpls.tk/diversity/4.jpg',
  'http://www.voidpls.tk/diversity/5.jpg'
]

var ids = [
  //me
  '299036445157621760',
  //blma
  '325314346999611415',
  //bob
  '325625615761801217',
  //atdit
  '325313826352398350',
  //ben
  '135721889828962305',
  //bot
  '323992245781135360',
  //paxton
  '218327115140038658',
  //Hitler
  '191386226442502145',
  //Void#9093
  '325827542164439040'
]

var helpIDs = [
  '325315599708454913',
  '317978984119795712',
  '295467114586832906',
  '269957997600440320'
]

var urmomgay = [
  'ur mom',
  'ur mum',
  'your mom',
  'your mum'
]

var niggers = [
  'http://www.voidpls.tk/niggers/1.jpg',
  'http://www.voidpls.tk/niggers/2.jpg',
  'http://www.voidpls.tk/niggers/3.jpg',
  'http://www.voidpls.tk/niggers/4.jpg',
  'http://www.voidpls.tk/niggers/5.jpg',
  'http://www.voidpls.tk/niggers/6.jpg',
  'http://www.voidpls.tk/niggers/7.jpg',
  'http://www.voidpls.tk/niggers/8.jpg',
  'http://www.voidpls.tk/niggers/9.jpg'
]

var swastika =
  ':red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::white_circle::black_circle::white_circle::black_circle::white_circle::black_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::black_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::black_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::black_circle::white_circle::black_circle::white_circle::black_circle::white_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle:'

var islam = [
  'http://www.voidpls.tk/islam/peace1.jpg',
  'http://www.voidpls.tk/islam/peace2.jpg',
  'http://www.voidpls.tk/islam/peace3.jpg'
]

//descriptions:
var info = {
  "heil": "**..heil** | Posts a picture of hitler \n",
  "gas": "**..gas** | Sends 'Gas the Kikes' \n",
  "poll": "**..poll [question]** | Makes a poll \n",
  "diversity": "**..diversity** | Sends a random picture on diversity \n",
  "nigger": "**..nigger** | Sends a nigger \n",
  "morticia": "**..morticia** | Darn Russian Spy \n'",
  "remind": "**..remind** | Hitler did nothing wrong \n",
  "ping": "**..ping** | Pong \n",
  "holocaust": "**..holocaust [1-10]** | Sends a statement debunking the Holocaust \n",
  "redpill": "**..redpill** | Sends a random redpill (DM me to add your own) \n",
  "swastika": "**..swastika** | Creates a bigass swastika \n",
  "islam": "**..islam** | Religion of Peace"
}
var botid = ['323992245781135360']
var everyone = info.heil + info.gas + info.poll + info.diversity + info.nigger + info.redpill + info.holocaust + info.islam
var mods = info.remind + info.swastika + info.ping
var game = {name: "made by Void | ..help"};

client.User.setStatus(null, game);
client.connect({
  token: "MzIzOTkyMjQ1NzgxMTM1MzYw.DCLlRw.xs1GqfbDfpxjQ3RSGZR2FzSspCE"
});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("DISCONNECTED", () => {
  console.log('Disconnected from Discord');
});

//welcome
client.Dispatcher.on("GUILD_MEMBER_ADD", e => {
  function send() {
    channel.sendMessage(`Welcome to Moon Central, ${e.member.mention}!`);
};
  let channel = client.Channels.get('325648252810690570');
	if (e.guild.id === "325315599708454913") {
    setTimeout(send, 5000);
};
});

client.Dispatcher.on("GUILD_MEMBER_REMOVE", member => {
  let channel = client.Channels.get('325321760939704320');
	if (e.guild.id === "325315599708454913") {
    channel.sendMessage(`About time that nigger ${member.user.username} left or got kicked!`);
};
});

//commands
client.Dispatcher.on("MESSAGE_CREATE", e => {
//args
  var args = e.message.content.split(/[ ]+/);
  client.Users.fetchMembers()

//self message function
  function on_message(arg1, arg2){
    if (e.message.content == arg1 && ids.includes(e.message.author.id))
    e.message.channel.sendMessage(arg2);
  };

//global message function
  function globalon_message(arg1, arg2){
  if (e.message.content == arg1 && e.message.author.id != client.User.id)
    e.message.channel.sendMessage(arg2);
  };

//log
  var mainacc = client.Users.get('325827542164439040');
  if (e.message.author.id == '218177032327135232'){
  var channel = client.Channels.get('327320793681756161');
  channel.sendMessage(`Baecon said: \"${e.message.content}\"`);
}
  else if (e.message.content.includes('void') &&
  e.message.author.id != client.User.id &&
e.message.author.id != '325827542164439040') {
  var channel = client.Channels.get('327331811292217347');
  channel.sendMessage(`${e.message.author.mention} said: \"${e.message.content}\"`);
}
  else if (mainacc.isMentioned(e.message) && e.message.author.id != client.User.id){
  var channel = client.Channels.get('327331811292217347');
  channel.sendMessage(`${e.message.author.mention} said: \"${e.message.content}\"`);
};
//poll
  if (e.message.content.startsWith('..poll')) {
  e.message.delete();
  e.message.channel.sendMessage('**Poll:**' + args.join(" ").substring(6));
  };

//poll part 2
  if (e.message.content.startsWith('**Poll:**') &&
      botid.includes(e.message.author.id)) {
    e.message.addReaction('✅');
    e.message.addReaction('❎');
  };

//random on message
function random_on_message(arg, list){
  var i = Math.floor(list.length * Math.random());
  if (e.message.content == arg)
  e.message.channel.sendMessage(list[i]);
}

//spam
  if (e.message.content.startsWith('..spam') && e.message.author.id == '325827542164439040') {
    if (args.length == 3){
      var spamtext = args[1].replace(/_/g, ' ');
      var number = parseInt(args[2]);
      e.message.delete();
      while (number != 0){
        e.message.channel.sendMessage(spamtext);
        number = number - 1
      };
    }
    else {
      e.message.channel.sendMessage('Use `..spam [text] [#]`');
      e.message.delete();
    };
};

//level up
  if (e.message.content.includes('leveled up!')){
  e.message.channel.sendMessage('***L-L-LEVEL UP!!!***');
  };

//holocaust
  if (e.message.content.startsWith('..holocaust')){
    var intarg = parseInt(args[1]) - 1

    if (args.length == 1){
    e.message.channel.sendMessage('Please type `..holocaust [1-10]`');
  }
    else if (args.length == 2){
    e.message.channel.sendMessage(holocaust[intarg]);
  }
    else {
      e.message.channel.sendMessage(holocaust[intarg]);
    }
};

//avatar
  if (e.message.content.startsWith('..avatar')) {
  var user = client.Users.find(u => u.id == e.message.author.id);
  var avatarurl = user.avatarURL.replace('.jpg', '.webp?size=1024');
  e.message.channel.sendMessage(avatarurl);
};
//reacts
  if (e.message.author.id == '196296279771316224'){
  e.message.addReaction('🦊');
}
//echo
  if (e.message.content.startsWith('..echo') &&
      e.message.author.id == '299036445157621760')
  e.message.channel.sendMessage(args.join(" ").substring(6));
  else if (e.message.content.startsWith('..echo') &&
      e.message.author.id != '299052998355714049')
      e.message.reply('nice try')
//ur mom gay
  let content = e.message.content.toLowerCase()
  if (content.startsWith('ur mom') || content.startsWith('ur mum') || content.startsWith('your mom') || content.startsWith('your mum') || content.startsWith('your mother'))
  e.message.channel.sendMessage('no u');

//delete evidence xd
  if (e.message.content == '.on <@325827542164439040>')
  e.message.delete();

//help
  if (e.message.content.toLowerCase() == '..help' && helpIDs.includes(e.message.guild.id)){
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

};
//traps
  if (e.message.content.toLowerCase().startsWith('traps are gay'))
  e.message.reply('but they aren\'t');
//basic commands
  on_message('..ping', '**Pong!** :ping_pong:');
  on_message('..rep', 't!rep <@135721889828962305>');
  on_message('..daily', 't!daily <@135721889828962305>');
  on_message('..on', '.on <@325827542164439040>');
  on_message('..swastika', swastika)
  globalon_message('/o/', '\\o\\');
  globalon_message('\\o\\', '/o/');
  globalon_message('..bob', '`..bob`? I think you mean `..gay faggot`');
  globalon_message('..gay faggot', '`..gay faggot`? I think you mean `..bob`');
  globalon_message('..gas', ':star_of_david: **Gas the Kikes** :star_of_david:');
  globalon_message('..heil', 'http://www.voidpls.tk/files/hitler.png');
  on_message('..remind', '**--------------------------------\n<:swastika:325668829759930368>   Daily Reminder:   <:swastika:325668829759930368>\nHitler Did Nothing Wrong!\n--------------------------------**');
  random_on_message('..diversity', links);
  random_on_message('..nigger', niggers);
  random_on_message('..redpill', redpill);
//islam
  let islamI = Math.floor(islam.length * Math.random());
  if (e.message.content == '..islam')
  e.message.channel.sendMessage('"Religion of Peace" \n' + islam[islamI]);
});
