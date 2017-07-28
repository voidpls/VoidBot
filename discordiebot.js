//https://github.com/voidpls/selfbot.git
//ssh -i "bot.pem" ec2-user@ec2-54-91-219-104.compute-1.amazonaws.com
//.catch((e) => { console.log(e) })
//pm2

var Imgur = require('@rmp135/imgur');
var Client = Imgur.Client
let imgurClient = new Client('43652b743b5a7a0')

var moment = require('moment');

var Discordie = require("discordie");
var client = new Discordie({
  messageCacheLimit: 1000,
  autoReconnect: true
});
var urban = require("urban");
var p = '..'
var data = require('./data.json')
var randomPuppy = require('random-puppy');
var redpill = data.redpill
var holocaust = data.holocaust

//variables
var links = [
  'http://www.voidpls.tk/diversity/1.jpg',
  'http://www.voidpls.tk/diversity/2.jpg',
  'http://www.voidpls.tk/diversity/3.jpg',
  'http://www.voidpls.tk/diversity/4.jpg',
  'http://www.voidpls.tk/diversity/5.jpg',
  'http://www.voidpls.tk/diversity/6.jpg',
  'http://www.voidpls.tk/diversity/7.jpg'
]

var ids = [
  //stacey
  '299036445157621760',
  //blma
  '325314346999611415',
  //bob
  //'325625615761801217',
  //atdit non-mod
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
  '325827542164439040',
  //Void#4724
  '299052998355714049',
  //atdit
  '241875461171445761',
  //vegan
  '301566395534278656',
  //garl
  '165250994291212288',
  //bantz
  '191029824796622848',
  //faith
  '164599925911322625'
]

var spamIDs = [
  //Effy
  '135721889828962305',
  //Void#4724
  '299052998355714049',
  //Void#9093
  '325827542164439040',
  //atdit
  '241875461171445761',
  //stacey
  '299036445157621760',
  //atdit non-mod
  '325313826352398350',
  //faith
  '164599925911322625'
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
  "islam": "**..islam** | Religion of Peace\n",
  "urban": "**..ud [search term]** | Looks up a word on Urban Dictionary. \n",
  "pfp": "**..pfp [user]** | Gets the profile picture of an user \n",
  "lmgtfy": "**..lmgtfy [search term]** | Generates a lmgtfy link \n",
  "modping": "**..modping** | Pings all the online mods \n",
  "complain": "**..complain [feedback]** | Don't like my bot? Have suggestions? Use ..complain"
}

var botid = ['323992245781135360']
var everyone = info.heil + info.gas + info.diversity + info.nigger + info.redpill + info.holocaust + info.islam + info.poll + info.urban + info.lmgtfy + info.modping + info.complain
var mods = info.remind + info.swastika + info.ping
var game = {name: "made by Void | ..help"}

client.User.setStatus("dnd", game);

start();

 function start(){
   client.connect({
     token: "MzM0NDc1ODI1MjU4ODIzNzAx.DEbxWw.uknJNDDbKppkgKZz73wV-kg68fA"
   });
   client.User.setStatus("dnd", game);
 }
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
  }
  let channel = client.Channels.get('325648252810690570');
	if (e.guild.id === "325315599708454913") {
    setTimeout(send, 5000);
  }
});

//commands
client.Dispatcher.on("MESSAGE_CREATE", e => {
if (e.message.author.id == client.User.id) return;
else {
//args
  var args = e.message.content.split(/[ ]+/);
  client.Users.fetchMembers()
  var me = client.Users.find(u => u.id == '325827542164439040');
  var channel = e.message.channel

//tagspam mk. ii
  if (e.message.content.toLowerCase().startsWith(p + 'stag') && spamIDs.includes(e.message.author.id)) {
  if (args.length > 2){
    var number = parseInt(args.pop());
    args.shift();
    spamtext = args.join(' ');
    e.message.delete();
    while (number != 0){
      channel.sendMessage(spamtext).then(m => {
        m.delete();
      })
      number = number - 1
    }
  }
  else return;
}

//prune mk. ii /purge
  if (e.message.content.toLowerCase().startsWith(p + 'd') && args.length == 2 && e.message.author.id == '325827542164439040') {
    channel.fetchMessages();
    var msgs = channel.messages;
    if (isNaN(args[1])) {
      if (args[1] == 'bots'){
        e.message.delete();
        var msgArray = msgs.filter(m => m.deleted == false && m.author.bot == true);
        msgArray.reverse();
        msgArray.length = 25
        client.Messages.deleteMessages(msgArray).catch(e => console.log(e));
      }
    }
    if (!isNaN(args[1])){
      var msgArray = msgs.filter(m => m.deleted == false);
      msgArray.reverse();
      msgArray.length = parseInt(args[1], 10) + 1
      client.Messages.deleteMessages(msgArray).catch(e => console.log(e));
    }
}
//self message function
  function on_message(arg1, arg2){
    if (e.message.content.toLowerCase() == p + arg1 && ids.includes(e.message.author.id))
    channel.sendMessage(arg2);
  }

//global message function
  function globalon_message(arg1, arg2){
  if (e.message.content.toLowerCase() == p + arg1 &&
      e.message.author.id != client.User.id)
  channel.sendMessage(arg2);
  }
//global message + delete
  function globaldel_message(arg1, arg2){
    if (e.message.content.toLowerCase() == p + arg1 &&
        e.message.author.id != client.User.id &&
        e.message.author.bot != true){
    e.message.delete();
    channel.sendMessage(arg2);
  }
  }
//ping
  if (e.message.content.toLowerCase() == p + 'ping' && ids.includes(e.message.author.id)) {
    let start = process.hrtime();
    channel.sendMessage(":ping_pong:  |  Pong! - Time taken:").then(m => {
      const diff = process.hrtime(start);
      let time = diff[0] * 1000 + diff[1] / 1000000
      m.edit(':ping_pong:  |  Pong! - Time taken: **' + Math.round(time) + 'ms**');
    })
    }

//log
  var mainacc = client.Users.get('325827542164439040');
  if (e.message.author.id == '218177032327135232'){
  var channel = client.Channels.get('327320793681756161');
  channel.sendMessage('Baecon said: \"' + e.message.content + '\"');
}
  else if (e.message.content.toLowerCase().includes('void') &&
           e.message.author.id != client.User.id &&
           e.message.author.id != '325827542164439040' &&
           e.message.author.bot != true) {
  var channel = client.Channels.get('327331811292217347');
  channel.sendMessage("`" + e.message.author.username + "` said: `\"" + e.message.content + "`\"");
}
  else if (mainacc.isMentioned(e.message) &&
           e.message.author.id != client.User.id &&
           e.message.author.bot != true){
  var channel = client.Channels.get('327331811292217347');
  let me = client.Users.get('325827542164439040');
  let content = e.message.content.replace('<@325827542164439040>', '@' + me.username).replace('<@!325827542164439040>', '@' + me.username)
  channel.sendMessage("`" + e.message.author.username + "` said: `\"" + content + "`\"");
}
//poll
  if (e.message.content.toLowerCase().startsWith(p + 'poll')) {
  channel.sendMessage('**Poll:**' + args.join(" ").substring(6)).then(m => {
    m.addReaction('✅').then(m.addReaction('❎'));
  });
  e.message.delete();
}
//y/n poll
  if (e.message.content.toLowerCase().includes('y/n')){
  e.message.addReaction('✅').then(e.message.addReaction('❎'));
}

//random on message
function random_on_message(arg, list){
  var i = Math.floor(list.length * Math.random());
  if (e.message.content.toLowerCase() == p + arg)
  channel.sendMessage(list[i]);
}

//now grenze
if (e.message.content == 'now grenze')
e.message.delete();

//spam
  if (e.message.content.toLowerCase().startsWith(p + 'spam') && spamIDs.includes(e.message.author.id)) {
    if (args.length > 2){
      var number = parseInt(args.pop());
      args.shift();
      spamtext = args.join(' ');
      e.message.delete();
      while (number != 0){
        channel.sendMessage(spamtext);
        number = number - 1
      }
    }
    else {
      channel.sendMessage('Use `..spam [text] [#]`');
      e.message.delete();
    }
  }

//ping admins/mod
  if (e.message.content.toLowerCase() == p + "modping"){
    let members = client.Users.membersForGuild('325315599708454913');
    let membersArray = members.filter(m => m.hasRole('325320325409669130') || m.hasRole('325320348553969685') || m.hasRole('333750148788125707'))
    .filter(m => m.status != 'offline')
    var membersMention = membersArray.map(m => m.nickMention).join(' | ');
    channel.sendMessage('**Tagging all online Staff...** \n' + membersMention);
  }

//nick
  if (e.message.content.toLowerCase().startsWith('-' + "nick")){
    if (e.message.author.id == me.id){
      args.shift();
      var nick = args.join(' ');
      var botuser = client.User.memberOf(channel.guild);
      botuser.setNickname(nick);
      channel.sendMessage("<:check:335544753443831810> Nickname changed to `"+ nick +"`")
      }
      else channel.sendMessage("<:error:335660275481051136> **Bot Owner Only**");
   }
//feedback
  if (e.message.content.toLowerCase().startsWith(p + 'complain')){
    var fbChannel = client.Channels.get('335540223884656640');
    var author = e.message.author
    args.shift();
    var feedback = args.join(' ');
    if (feedback.length < 10){
      channel.sendMessage("`Error: Feedback too short (10+ characters)`");
    }
    else {
    fbChannel.sendMessage('', false, {
          color: 0xD00000,
          author: {
           name: author.username + "#" + author.discriminator,
           icon_url: author.avatarURL
         },
          fields: [{name: "**Feedback:**", value: feedback}],
          footer: {
            text: "User ID ("+ author.id +")"
          }
        });
      e.message.addReaction(":check:335548356552294410")
  }
}
//level up
  if (e.message.content.toLowerCase().includes('leveled up!')){
  channel.sendMessage('***L-L-LEVEL UP!!!***');
  }

//holocaust
  if (e.message.content.toLowerCase().startsWith(p + 'holocaust')){
    var intarg = parseInt(args[1]) - 1

    if (args.length == 1){
    channel.sendMessage('Please type `..holocaust [1-10]`');
  }
    else if (args.length == 2){
    channel.sendMessage(holocaust[intarg]);
  }
    else {
      channel.sendMessage(holocaust[intarg]);
    }
}

//avatar
  if (e.message.content.toLowerCase().startsWith(p + 'pfp')) {
    if (args.length == 1) {
      var avatarurl = e.message.author.avatarURL.replace('.jpg', '.png?size=1024');
      channel.sendMessage(avatarurl);
    }
    else if (args.length == 2) {
      let user = getUser(args[1]);
      if (user === undefined) return;
      else {
      var avatarurl = user.avatarURL.replace('.jpg', '.png?size=1024');
      channel.sendMessage(avatarurl);
    }
  }
}
//reacts
  if (e.message.author.id == '196296279771316224'){
  e.message.addReaction('🦊');
}
//echo
  if (e.message.content.toLowerCase().startsWith(p + 'echo') &&
      spamIDs.includes(e.message.author.id)){
  channel.sendMessage(args.join(" ").substring(6));
  e.message.delete();
}
  else if (e.message.content.toLowerCase().startsWith(p + 'echo') &&
      e.message.author.id != '299052998355714049')
      e.message.reply('nice try')
//ur mom gay
  let content = e.message.content.toLowerCase()
  if (content.startsWith('ur mom') || content.startsWith('ur mum') || content.startsWith('your mom') || content.startsWith('your mum') || content.startsWith('your mother'))
  channel.sendMessage('no u');

//urban
  if (e.message.content.toLowerCase().startsWith(p + 'ud')){
    if (args.length == '1'){
      var udRand = urban.random().first(function(json) {
        channel.sendMessage('',false, {
            color: 0xD00000,
            author: {
            name: json.word,
            icon_url: "http://www.voidpls.tk/files/urban.jpg"
            },
            fields: [ {name: "**Definition:**", value: json.definition},
                      {name: "**Example:**", value: json.example},
                      {name: "**Vote:**", value: "**👍 " + json.thumbs_up + " 👎 " + json.thumbs_down + "**"}],
            footer: {
              text: "Author: " + json.author
              }
          });
      });
    }
    else {
      args.shift();
      var ud = urban(args);
      if (ud != undefined) {
        ud.first(function(json) {
          if (json === undefined) channel.sendMessage("**<:error:335660275481051136> No Definition Found**");
          else
          channel.sendMessage('',false, {
              color: 0xD00000,
              author: {
              name: json.word,
              icon_url: "http://www.voidpls.tk/files/urban.jpg"
              },
              fields: [ {name: "**Definition:**", value: json.definition},
                        {name: "**Example:**", value: json.example},
                        {name: "**Vote:**", value: "**👍 " + json.thumbs_up + " 👎 " + json.thumbs_down + "**"}],
              footer: {
                text: "Author: " + json.author
                }
            });
        });
    }
  }
}

//lmgtfy
if (e.message.content.startsWith(p + 'lmgtfy') && args.length >= 2){
  args.shift();
  var q = args.join('+');
  e.message.channel.sendMessage("http://lmgtfy.com/?q=" + q);
}

//guilds
  if (e.message.content.toLowerCase() == p + 'servers'){
    var guilds = client.Guilds
    var now = moment()
    var formatted = now.format('ddd, MMM Do, YYYY hh:mma')

    channel.sendMessage('',false, {
      color: 0xD00000,
      title: "I am in **" + guilds.length + "** servers",
      footer: {
        text: formatted
      }
    });
  }
  if (e.message.content.toLowerCase() == p + 'list' && e.message.author.id == mainacc.id){
    var listGuilds = client.Guilds.map(g => g.name);
    channel.sendMessage('**I\'m in these servers: \n**' + listGuilds.join('\n'))
}


//puppy
  if (e.message.content.toLowerCase() == p + 'cute'){
    randomPuppy('aww').then(pup => {
      channel.sendMessage(pup);
    });
  }

//imgur
  if (e.message.content.toLowerCase().startsWith(p + 'pic')){
    if (args.length >= 2){
      args.shift();
      var q = args.join('');
      process.nextTick(function() {
        randomPuppy(q).then(pic => {
          if (pic === undefined) channel.sendMessage('**<:error:335660275481051136> No Picture Found**')
          else channel.sendMessage(pic);
        });
      });
    }
  }

//die
   if (e.message.content.toLowerCase().startsWith(p + 'kill') && e.message.author.id == '325827542164439040')
   e.message.addReaction('💀').then(client.disconnect());

 //restart
   if (e.message.content.toLowerCase().startsWith(p + 'restart') && e.message.author.id == '325827542164439040'){
   channel.sendMessage('<:raygun:335653827267264514>  |  i have raygun pls revive - `Restarting Bot...`').then(client.disconnect());
   console.log("Restarting");
   setTimeout(start, 5000);
 }
//kick
    if (e.message.content.toLowerCase().startsWith(p +'gas') && e.message.author.id == '325827542164439040'){
    if (args.length == 2){
      let user = getUser(args[1]);
      if (user === undefined) return;
      else {
        user.kick();
        channel.sendMessage("<:check:335544753443831810>** " + user.username + " **has been gassed!");
      }
    }
    else return;
}

//ban
if (e.message.content.toLowerCase().startsWith(p +'zyklon') && e.message.author.id == '325827542164439040'){
   if (args.length == 2){
     let user = getUser(args[1]);
     if (user === undefined) return;
     else {
      user.ban(0);
      channel.sendMessage("<:check:335544753443831810>** " + user.username + " **has been treated with a lethal dose of Zyklon-B");
    }
  }
}
//get user function
  function getUser(arg) {
    user = arg.replace(/\D/g,'');
    user = e.message.guild.members.find(gUser => gUser.id === user);

    if (user === undefined) {
        return;
    }
    return user;
}
//help
  if (e.message.content.toLowerCase() == p + 'help'){
  var bot = client.User;
  var pfp = me.avatarURL.replace('.jpg', '.png');
//embed
   channel.sendMessage('',false, {
      color: 0xD00000,
      author: {
       name: 'ϟϟ Bot Help',
       icon_url: bot.avatarURL
     },
      fields: [{name: "**Commands**", value: everyone},
              {name: "**Mod Commands**", value: mods}],
      footer: {
        icon_url: pfp,
        text: "Made by Void, for the honor of Mein Fürher"
      }
    });
}
//traps
  if (e.message.content.toLowerCase().includes('traps are gay'))
  e.message.reply('but they aren\'t');
//basic commands
  on_message('swastika', swastika)
  globaldel_message('salute', '<:TopKek:338007448860229633><:pepeSalute:338007522050965506> <:swastika:325668829759930368>')
  globaldel_message('jihad', '<:jihad:322904816441491456>');
  globaldel_message('911', '<:plane:334937403217281024><:towers:334934504647032832>');
  globaldel_message('morticia', 'http://www.voidpls.tk/files/morticia.jpg');
  globaldel_message('hitler', '<:a1:338564354955804672><:a2:338564371435487234><:a3:338564382789468162> \n<:a4:338564396404047873><:a5:338564407850434560><:a6:338564418902425616> \n<:a7:338564428318507011><:a8:338564438330441729><:a9:338564448916602880>');
  globalon_message('bob', '`bob`? I think you mean `gay faggot`');
  globalon_message('gay faggot', '`gay faggot`? I think you mean `bob`');
  globaldel_message('gas', ':star_of_david: **Gas the Kikes** :star_of_david:');
  globalon_message('heil', 'http://www.voidpls.tk/files/hitler.png');
  globalon_message('truth', 'Girls are the best but like Effy is better');
  on_message('remind', '**--------------------------------\n<:swastika:325668829759930368>   Daily Reminder:   <:swastika:325668829759930368>\nHitler Did Nothing Wrong!\n--------------------------------**');
  random_on_message('diversity', links);
  random_on_message('nigger', niggers);
  random_on_message('redpill', redpill);
//islam
  let islamI = Math.floor(islam.length * Math.random());
  if (e.message.content == p + 'islam')
  channel.sendMessage('"Religion of Peace" \n' + islam[islamI]);
}
});
