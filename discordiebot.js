//https://github.com/voidpls/selfbot.git
//ssh -i "bot.pem" ec2-user@ec2-54-91-219-104.compute-1.amazonaws.com


var Discordie = require("discordie");
var client = new Discordie({
  messageCacheLimit: 1000,
  autoReconnect: true
});
var p = '..'
var data = require('./data.json')
var redpill = data.redpill
var holocaust = data.holocaust

//variables
var links = [
  'http://www.voidpls.tk/diversity/1.jpg',
  'http://www.voidpls.tk/diversity/2.jpg',
  'http://www.voidpls.tk/diversity/3.jpg',
  'http://www.voidpls.tk/diversity/4.jpg',
  'http://www.voidpls.tk/diversity/5.jpg',
  'http://www.voidpls.tk/diversity/6.jpg'
]

var ids = [
  //stacey
  '299036445157621760',
  //blma
  '325314346999611415',
  //bob
  '325625615761801217',
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
  '191029824796622848'
]
var spamIDs = [
  //Void#4724
  '299052998355714049',
  //Void#9093
  '325827542164439040',
  //atdit
  '241875461171445761',
  //stacey
  '299036445157621760',
  //atdit non-mod
  '325313826352398350'
]

var helpIDs = [
  '325315599708454913',
  '317978984119795712',
  '295467114586832906',
  '269957997600440320',
  '329459816365817866',
  '150782283736023040',
  '298711656437907456'
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

client.User.setStatus("dnd", game);

client.connect({
  token: "MzM0NDc1ODI1MjU4ODIzNzAx.DEbxWw.uknJNDDbKppkgKZz73wV-kg68fA"
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
  }
  let channel = client.Channels.get('325648252810690570');
	if (e.guild.id === "325315599708454913") {
    setTimeout(send, 5000);
  }
});



//commands
client.Dispatcher.on("MESSAGE_CREATE", e => {

//args
  var args = e.message.content.split(/[ ]+/);
  client.Users.fetchMembers()

//tagspam mk. ii
if (e.message.content.toLowerCase().startsWith(p + 'stag') && spamIDs.includes(e.message.author.id)) {
  if (args.length > 2){
    var number = parseInt(args.pop());
    args.shift();
    spamtext = args.join(' ');
    e.message.delete();
    while (number != 0){
      e.message.channel.sendMessage(spamtext).then(m => {
        m.delete();
      })
      number = number - 1
    };
  }
  else return;
};

/*
  //prune
  if (e.message.content.startsWith("." + "d" && e.message.author.id == '325827542164439040')) {
    let msgcount = parseInt(args[0]);

    //e.message.channel.fetchMessages({limit: msgcount}).then(messages => e.message.channel.deleteMessage(messages));

    e.message.channel.fetchMessages({limit: 100}).then(() => {
    var msgArray = e.message.channel.messages.filter(m => m.channel.id == e.message.channel.id);
    msgArray.length = msgcount + 1;
    client.Messages.deleteMessages(msgArray).catch(console.log);
  });

      //let msgs = e.message.channel.fetchMessages({limit: 100}).then(msgs => {

        //var msgArray = msgs.filter(m => m.author.id === '325827542164439040' || m.author.id === '334475825258823701')
        //client.Messages.deleteMessages(msgArray).catch(console.log);
      //})
    }
    */
//self message function
  function on_message(arg1, arg2){
    if (e.message.content.toLowerCase() == p + arg1 && ids.includes(e.message.author.id))
    e.message.channel.sendMessage(arg2);
  };

//global message function
  function globalon_message(arg1, arg2){
  if (e.message.content.toLowerCase() == p + arg1 &&
      e.message.author.id != client.User.id)
  e.message.channel.sendMessage(arg2);
  }
//global message + delete
  function globaldel_message(arg1, arg2){
    if (e.message.content.toLowerCase() == p + arg1 &&
        e.message.author.id != client.User.id &&
        e.message.author.bot != true){
    e.message.delete();
    e.message.channel.sendMessage(arg2);
  };
  }
//ping
  if (e.message.content.toLowerCase() == p + 'ping' && ids.includes(e.message.author.id)) {
    e.message.channel.sendMessage("**Pong! :ping_pong:**")
    };

//log
  var mainacc = client.Users.get('325827542164439040');
  if (e.message.author.id == '218177032327135232'){
  var channel = client.Channels.get('327320793681756161');
  channel.sendMessage('Baecon said: \"${e.message.content}\"');
}
  else if (e.message.content.toLowerCase().includes('void') &&
  e.message.author.id != client.User.id &&
e.message.author.id != '325827542164439040') {
  var channel = client.Channels.get('327331811292217347');
  channel.sendMessage("`" + e.message.author.username + "` said: `\"" + e.message.content + "`\"");
}
  else if (mainacc.isMentioned(e.message) && e.message.author.id != client.User.id){
  var channel = client.Channels.get('327331811292217347');
  let me = client.Users.get('325827542164439040');
  let content = e.message.content.replace('<@325827542164439040>', '@' + me.username)
  channel.sendMessage("`" + e.message.author.username + "` said: `\"" + content + "`\"");
};
//poll
  if (e.message.content.toLowerCase().startsWith(p + 'poll')) {
  e.message.channel.sendMessage('**Poll:**' + args.join(" ").substring(6)).then(m => {
    m.addReaction('✅').then(m.addReaction('❎'));
  });
  e.message.delete();
};
//y/n poll
  if (e.message.content.toLowerCase().includes('y/n')){
  e.message.addReaction('✅').then(e.message.addReaction('❎'));
};
//random on message
function random_on_message(arg, list){
  var i = Math.floor(list.length * Math.random());
  if (e.message.content.toLowerCase() == arg)
  e.message.channel.sendMessage(list[i]);
}

//spam
  if (e.message.content.toLowerCase().startsWith(p + 'spam') && spamIDs.includes(e.message.author.id)) {
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
  if (e.message.content.toLowerCase().includes('leveled up!')){
  e.message.channel.sendMessage('***L-L-LEVEL UP!!!***');
  };

//holocaust
  if (e.message.content.toLowerCase().startsWith(p + 'holocaust')){
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
  if (e.message.content.toLowerCase().startsWith(p + 'avatar')) {
  var user = client.Users.find(u => u.id == e.message.author.id);
  var avatarurl = user.avatarURL.replace('.jpg', '.webp?size=1024');
  e.message.channel.sendMessage(avatarurl);
};
//reacts
  if (e.message.author.id == '196296279771316224'){
  e.message.addReaction('🦊');
}
//echo
  if (e.message.content.toLowerCase().startsWith(p + 'echo') &&
      spamIDs.includes(e.message.author.id)){
  e.message.channel.sendMessage(args.join(" ").substring(6));
  e.message.delete();
}
  else if (e.message.content.toLowerCase().startsWith(p + 'echo') &&
      e.message.author.id != '299052998355714049')
      e.message.reply('nice try')
//ur mom gay
  let content = e.message.content.toLowerCase()
  if (content.startsWith('ur mom') || content.startsWith('ur mum') || content.startsWith('your mom') || content.startsWith('your mum') || content.startsWith('your mother'))
  e.message.channel.sendMessage('no u');

//die
  if (e.message.content.toLowerCase().startsWith('..kill') && e.message.author.id == '325827542164439040')
  client.disconnect();
//kick
  if (e.message.content.toLowerCase().startsWith('..gas') && e.message.author.id == '325827542164439040'){
    let user = getUser(args[1]);
    if (user === undefined) return;
    else {
    user.kick();
    e.message.channel.sendMessage("<:check:335197798272073728>** " + user.username + " **has been gassed!");
  };
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
  if (e.message.content.toLowerCase() == p + 'help' && helpIDs.includes(e.message.guild.id)){
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
  on_message('swastika', swastika)
  globaldel_message('jihad', '<:jihad:322904816441491456>');
  globaldel_message('911', '<:plane:334937403217281024><:towers:334934504647032832>');
  globaldel_message('morticia', 'http://www.voidpls.tk/files/morticia.jpg');
  globalon_message('/o/', '\\o\\');
  globalon_message('\\o\\', '/o/');
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
  if (e.message.content == 'islam')
  e.message.channel.sendMessage('"Religion of Peace" \n' + islam[islamI]);
});
