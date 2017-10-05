//git clone https://github.com/voidpls/VoidBot.git
//ssh root@217.61.120.88
//.catch((e) => { console.log(e) })

//fs
var fs = require('fs')
//usage
var usage = require('usage');
//moment
var moment = require('moment');
//node-delete
var del = require('node-delete');
//sharp
var sharp = require('sharp');
//urban
var urban = require('urban');
//random-puppy
var randomPuppy = require('random-puppy');
//weather
var weather = require("yahoo-weather")
//download-file
var download = require('download-file')
//tcpp
var Ping = require('ping-lite');
//speedtest
var speedTest = require('speedtest-net');
//convert
var convertTime = require('convert-seconds');
//discordie
var Discordie = require('discordie');
var discordiePackage = require("discordie/package.json")

//client contructor
var client = new Discordie({
  messageCacheLimit: 1000,
  autoReconnect: true
});
//prefix
var p = '..'
//data
var data = require('./data.json')
var redpill = data.redpill
var holocaust = data.holocaust

//variables
var links = data.diversity

var trustedIDs = [
  //Effy
  '135721889828962305',
  //Void#9093
  '325827542164439040',
  //stacey
  '299036445157621760',
  //faith
  '164599925911322625',
  //void newest :(
  '359542365926457359'
]

var urmomgay = [ 'ur mom', 'ur mum', 'your mom', 'your mum' ]

var niggers = data.nigs

var swastika = data.swastika
var islam = [
  'http://www.voidpls.tk/islam/peace1.jpg',
  'http://www.voidpls.tk/islam/peace2.jpg',
  'http://www.voidpls.tk/islam/peace3.jpg'
]

//descriptions:

var info = data.info

var botid = ['323992245781135360']
var everyone = info["heil"] + info["gas"] + info["diversity"] + info["nigger"] + info["redpill"] + info["holocaust"] + info["islam"] + info["remind"] + info["poll"] + info["pic"] + info["weather"] + info["urban"] + info["lmgtfy"] + info["modping"] + info["stats"] + info["complain"]
var mods =   info["swastika"] + info["ping"] + info["kick"] + info["ban"]

start();

function start(){
 client.connect({
   token: "MzM0NDc0NDQxODIyMTc1MjMy.DLcVVg.6SHLjXqSu4ebztzDRSVCqZVad_g"
 });
}
client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
  client.User.setStatus("dnd", {name: "made by Void | ..help"});
});

client.Dispatcher.on("DISCONNECTED", () => {
  console.log('Disconnected from Discord');
});

//welcome
client.Dispatcher.on("GUILD_MEMBER_ADD", e => {
  function send() {
    channel.sendMessage(`Welcome to Moon Central, ${e.member.mention}! \nType **..modping** to ping staff!`);
  }
  let channel = client.Channels.get('325648252810690570');
	if (e.guild.id === "325315599708454913") {
    setTimeout(send, 5000);
  }
});

//commands
client.Dispatcher.on("MESSAGE_CREATE", e => {

var author = e.message.author

if (author.id == client.User.id) return;
else {
  //args
  var args = e.message.content.split(/[ ]+/);

  var channel = e.message.channel
  var content = e.message.content.toLowerCase();

  var mainacc = client.Users.get('359542365926457359');
  var me = client.User
  //has mod function
  function hasMod(IUser) {
    return IUser.can(Discordie.Permissions.General.MANAGE_ROLES, e.message.guild);
  }

//tagspam mk. ii
  if (content.startsWith(p + 'stag') && trustedIDs.includes(author.id)) {
    if (args.length > 2){
      var number = parseInt(args.pop());
      args.shift();
      spamtext = args.join(' ');
      e.message.delete();
      while (number != 0){
        channel.sendMessage(spamtext).then(m => {
          m.delete();
        });
        number = number - 1
      }
    }
  else return;
  }

//dm spam
  if (content.startsWith(p + 'dm') && trustedIDs.includes(author.id)) {
    if (args.length > 3){

      var spamNum = args.pop()
      let user = getUser(args.pop());
      args.shift();
      spamtext = args.join(' ');

      if (user === undefined) return;
      else {
        e.message.delete();
        user.openDM().then(c => {
          while (spamNum != 0){
            c.sendMessage(spamtext).then(m => {
            });
            spamNum = spamNum - 1
          }
        });
      }
    }
    else return;
  }



//prune mk. ii /purge
  var manageMessages = Discordie.Permissions.Text.MANAGE_MESSAGES

  if (content.startsWith(p + 'd ') && args.length > 1 && author.can(manageMessages, channel)){
    channel.fetchMessages();
    if (isNaN(args[1])) {
      if (args[1] == 'bots'){
        e.message.delete();
        var msgs = channel.messages;
        var msgArray = msgs.filter(m => m.deleted == false && m.author.bot == true);
        msgArray.reverse();
        msgArray.length = 30
        client.Messages.deleteMessages(msgArray).catch(e => console.log(e));
      }
      else if (args[1] == 'with'){
        let len = args.length
        var keywords = content.replace(p+'d with ', '');
        var msgs = channel.messages;
        var msgArray = msgs.filter(m => m.deleted == false && m.content.toLowerCase().includes(keywords));
        msgArray.reverse();
        msgArray.length = 50
        client.Messages.deleteMessages(msgArray).catch(e => console.log(e));
      }
    }
    if (!isNaN(args[1])){
      var msgs = channel.messages;
      var msgArray = msgs.filter(m => m.deleted == false);
      msgArray.reverse();
      msgArray.length = parseInt(args[1], 10) + 1
      client.Messages.deleteMessages(msgArray).catch(e => console.log(e));
    }
}


/*
 if (content == p + 'log'){
   client.Users.fetchMembers()
   let members = client.Users.membersForGuild('325315599708454913');
   fs.readFile('./files/mcusers.json', function (err, data) {
     var json = JSON.parse(data)
     members.map(m => {
       var mroles = m.roles
       var rroles = mroles.map(r => r.name)
       json[m.username+'#'+m.discriminator] = {id: m.id, roles: rroles}
     })
     fs.writeFile("./files/mcusers.json", JSON.stringify(json, null, '\t'))
     if(err) console.log(err)
  })
}
*/
//on message function
  function on_message(arg1, arg2){
    if (content == p + arg1 && hasMod(author))
    channel.sendMessage(arg2);
  }

//global message function
  function globalon_message(arg1, arg2){
  if (content == p + arg1 &&
      author.id != client.User.id)
  channel.sendMessage(arg2);
  }
//global message + delete
  function globaldel_message(arg1, arg2){
    if (content == p + arg1 &&
        author.id != client.User.id &&
        author.bot != true){
    e.message.delete();
    channel.sendMessage(arg2);
  }
  }

//ping
  if (content.startsWith(p + 'ping') && hasMod(author)) {
    if (args.length > 1){

      var ping = new Ping(args[1]);

      ping.on('result', function(ms) {
        if (ms == undefined) channel.sendMessage('<:error:335660275481051136> Could not ping **'+args[1]+'**');
        else channel.sendMessage(':ping_pong:  |  Pong! - \`'+args[1]+'\` responded in **' + Math.round(ms) + 'ms**');
      });
      ping.send();
    }
    else {
      let start = process.hrtime();
      channel.sendMessage(":ping_pong:  |  Pong! - Time taken:").then(m => {
        const diff = process.hrtime(start);
        let time = diff[0] * 1000 + diff[1] / 1000000
        m.edit(':ping_pong:  |  Pong! - Time taken: **' + Math.round(time-30) + 'ms**');
      });
    }
  }

//speedtest
  if (content == p + 'speedtest'){
    var test = speedTest({maxTime: 5000, maxServers: 2, pingCount: 5});
    channel.sendMessage('**Running a speedtest...**').then(msg => {
      test.on('data', data => {
        msg.edit('', {
               color: 0xD00000,
               author: {
                name: 'Speedtest Results',
                icon_url: 'http://i.imgur.com/2x6vqOb.png'
              },
               fields: [{name: "**Ping:**", value: '**' + Math.round(data.server.ping) + '**ms'},
                       {name: "**Download:**", value: '**' + Math.round(data.speeds.download*10)/10 + '**Mbit/s'},
                       {name: "**Upload:**", value: '**' + Math.round(data.speeds.upload*10)/10 + '**Mbit/s'}],
               footer: {
                 text: "Server Location: "+data.server.location+', '+ data.server.country
               }
        });
      });
    });

    test.on('error', err => {
      console.log(err);
    });
    test.on('data', data => {
      console.dir(data);
    });

    test.on('error', err => {
      console.error(err);
    });

    test.on('done', dataOverload => {
      console.log('TL;DR:');
      console.dir(dataOverload);
      console.log('The speed test has completed successfully.');
    });
  }

//invite
	if (content == p + 'invite'){
		author.openDM().then(c => {
			var msg = '<:ss:350261180280995840> **Want to add me to your server?** <:ss:350261180280995840>\n\n:link: Here\'s my invite link: **http://voidpls.tk/invite**\n\n```diff\n- Don\'t need moderation commands? Uncheck all the perms.\n\n- If you have any issues, please message '+mainacc.username+'#'+mainacc.discriminator+'```'
			c.sendMessage(msg);
			e.message.addReaction(":check:335548356552294410")
		});
	}


//poll
  if (content.startsWith(p + 'poll')) {
  channel.sendMessage('**Poll:**' + args.join(" ").substring(6)).then(m => {
    m.addReaction('✅').then(m.addReaction('❎'));
  });
  e.message.delete();
}
//y/n poll
  if (content.includes('y/n')){
  e.message.addReaction('✅').then(e.message.addReaction('❎'));
}

//random on message
function random_on_message(arg, list){
  var i = Math.floor(list.length * Math.random());
  if (content == p + arg)
  channel.sendMessage(list[i]);
}

//now grenze
if (content == 'now grenze')
e.message.delete();

//spam
  if (content.startsWith(p + 'spam') && trustedIDs.includes(author.id)) {
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
  if (content.startsWith(p + "modping") && e.message.guild.id == '325315599708454913'){
    let members = client.Users.membersForGuild('325315599708454913');
    let membersArray = members.filter(m => m.hasRole('325320325409669130') || m.hasRole('325320348553969685') || m.hasRole('333750148788125707'))
    .filter(m => m.status != 'offline')
    var membersMention = membersArray.map(m => m.nickMention).join(' | ');
    channel.sendMessage('**Tagging all online Staff...** \n' + membersMention);
  }

//tfw
  var tfw = ['mfw', "mfw"]
  if (tfw.includes(args[0])) channel.sendMessage('Nobody gives a shit about how you feel, kill yourself ' + author.mention);

//nick
  if (content.startsWith('-' + "nick")){
    if (author.id == mainacc.id){
      args.shift();
      var nick = args.join(' ');
      var botuser = client.User.memberOf(channel.guild);
      botuser.setNickname(nick);
      channel.sendMessage("<:check:335544753443831810> Nickname changed to **"+ nick +"**")
   }
   else channel.sendMessage("<:error:335660275481051136> **Bot Owner Only**");
  }
//feedback
  if (content.startsWith(p + 'complain')){
    var fbChannel = client.Channels.get('335540223884656640');
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
  if (content.includes('leveled up!')){
  channel.sendMessage('***L-L-LEVEL UP!!!***');
  }

if (content.includes('heil')) e.message.addReaction(":swastika:322900266959765506")
//roleme
/*
  if (content == p + 'roleme'){
    e.message.member.assignRole('325320348553969685')
  } */

//holocaust
  if (content.startsWith(p + 'holocaust')){
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
  if (content.startsWith(p + 'pfp')) {
    if (args.length == 1) {
      var avatarurl = author.avatarURL.replace('.jpg', '.png?size=1024');
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
  if (author.id == '196296279771316224'){
  e.message.addReaction('🦊');
}
//echo
  if (content.startsWith(p + 'echo') &&
      trustedIDs.includes(author.id)){
  channel.sendMessage(args.join(" ").substring(6));
  e.message.delete();
}
  else if (content.startsWith(p + 'echo') &&
      author.id != '299052998355714049')
      e.message.reply('nice try')
//ur mom gay
  if (content.startsWith('ur mom') || content.startsWith('ur mum') || content.startsWith('your mom') || content.startsWith('your mum') || content.startsWith('your mother'))
  channel.sendMessage('no u');

//urban
  if (content.startsWith(p + 'ud')){
    if (args.length == '1'){
      var udRand = urban.random().first(function(json) {
        channel.sendMessage('',false, {
            color: 0xD00000,
            author: {
            name: json.word,
            icon_url: ""
            },
            fields: [ {name: "**Definition:**", value: json.definition},
                      {name: "**Example:**", value: json.example},
                      {name: "**Rating:**", value: "**👍 " + json.thumbs_up + " 👎 " + json.thumbs_down + "**"}],
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

//weather
  if (content.startsWith(p + 'weather')  || content.startsWith(p + 'w')){
  function weatherSearch(loc){
    weather(loc, 'f').then(info => {
        var ftemp = info.item.condition.temp
        var ctemp = Math.round((ftemp-32)*5/9)
        var cwind = Math.round((info.wind.chill-32)*5/9)
        var forecast = info.item.forecast[0]
        var cHigh = Math.round((forecast.high-32)*5/9)
        var cLow = Math.round((forecast.low-32)*5/9)
        var highLow = '**'+ forecast.high+'**°/**'+forecast.low+
        			  '**°F **| '+cHigh+'**°/**'+cLow+'**°C'
        if (ftemp > 30){
          var desctext = 'Fuck, it\'s cold.'
          if (ftemp > 45){
            var desctext = 'Feels as cool as I am'
            if (ftemp > 65){
              var desctext = 'Why the fuck aren\'t you outside, ya nerd?'
              if (ftemp > 75){
                var desctext = 'Getting warmer...'
                if (ftemp > 85){
                  var desctext = 'Toasty!'
                  if (ftemp > 95){
                    var desctext = 'It\'s hot enough to cook a Jew!'
                  }
                }
              }
            }
          }
        }
        else var desctext = 'Hans! Grab the fucking Flame Thrower!'
        channel.sendMessage('',false, {
          color: 0xD00000,
          author: {
            name: info.location.city+', '+info.location.region+', '+info.location.country
          },
          thumbnail: {url: 'http://www.voidpls.tk/files/weather/'+ info.item.condition.code +'.png'},
          fields: [{name: "**Temperature:**", value: '**'+ftemp+'**°F/**'+ctemp+'**°C'},
                   {name: "**High/Low:**", value: highLow},
                   {name: "**Condition**:", value: info.item.condition.text+' | **'+info.atmosphere.humidity+'**% humidity'}],
          footer: {text: info.lastBuildDate.replace(/\w+[.!?]?$/, '')},
          description: desctext
        });
    }).catch(err => {
      console.log(err)
      channel.sendMessage("**<:error:335660275481051136> Could not find weather info for `"+loc+"`**")
    });
  }
    if (args.length > 1){
      args.shift()
      if (args[0] == 'set'){
        if (args.length > 1){
          args.shift()
          loc = args.join(' ')
          fs.readFile('./files/weather.json', function (err, data) {
            var json = JSON.parse(data)
            json[author.id] = {location: loc, username: author.username+'#'+author.discriminator}
            fs.writeFile("./files/weather.json", JSON.stringify(json, null, '\t'))
            channel.sendMessage("Your location has been successfully updated to **"+loc+"**");
            if(err) console.log(err)
        });
        }
        else channel.sendMessage('Type `..weather set [location]` to set a location.')
      }
      else{
        loc = args.join(' ')
        weatherSearch(loc);
      }
    }
    else {
      fs.readFile('./files/weather.json', function (err, weatherData) {
        weatherData = JSON.parse(weatherData)
        if (weatherData[author.id]){
          weatherSearch(weatherData[author.id].location);
        }
        else {
          channel.sendMessage('Type `..weather set [location]` to set a location.');
        }
        if(err) console.log(err)
      });
    }
  }

//lmgtfy
if (content.startsWith(p + 'lmgtfy') && args.length >= 2){
  args.shift();
  var q = args.join('+');
  e.message.channel.sendMessage("http://lmgtfy.com/?q=" + q);
}

//botinfo
  if (content == p + 'botinfo'){
    var guilds = client.Guilds
    client.Users.fetchMembers().then(() => {
      var now = moment()
      var formatted = now.format('ddd, MMM Do, YYYY hh:mma')
      var nodeVersion = process.version
      channel.sendMessage('',false, {
        color: 0xD00000,
        author: {
          name: "Bot Info",
          icon_url: "http://i.imgur.com/2x6vqOb.png"
        },
        fields: [
          {name: '**Servers**', value: guilds.length},
          {name: '**Users**', value: client.Users.length},
      //    {name: '**Invite**', value: '[here](http://voidpls.tk/invite)'},
          {name: '**Node.js**', value: "["+nodeVersion+"](https://nodejs.org/)"},
          {name: '**Discordie**', value: "[v"+discordiePackage.version+"](https://qeled.github.io/discordie/#/)"}
        ],
        footer: {
          text: formatted
        }
      });
  });
  }
  if (content == p + 'list' && author.id == mainacc.id){
    var listGuilds = client.Guilds.map(g => g.name);
    channel.sendMessage('**I\'m in these servers: \n**' + listGuilds.join('\n'))
}
//eval
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;
  }

  if (content.startsWith(p + 'eval') || content.startsWith(p + 'debug')){
    if (author.id !== mainacc.id && author.id !== '301967604191592448') channel.sendMessage('**<:error:335660275481051136> Bot Owner Only**');
    else {
      try {
        var code = args.slice(1).join(' ');
        let evaled = eval(code);

        if (typeof evaled !== 'string')
        evaled = require("util").inspect(evaled);
        channel.sendMessage('\`\`\`xl\n'+clean(evaled)+'\`\`\`').catch(e => channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(e)}\n\`\`\``))
      } catch (err) {
        channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
      }
    }
  }

  function reduce(int, md, image){
    if (md.width >= md.height) return image.resize(Math.round(md.width - md.width*int));
    else return image.resize(Math.round(md.length - md.length*int));
  }
//imgur
  function search(q, imageMsg, msg){
    randomPuppy(q).then(pic => {

      if (pic === undefined) msg.edit('<:error:335660275481051136> No results found for **' + arg + '**');
      else
        var filename = pic.slice(pic.length - 11).replace('\m', '')
        var jpgFilename = filename.replace('png', 'jpg')
        var url = pic.replace('imgur', 'i.imgur')
        if (url.slice(url.length - 3) == 'gif'){ search(q, imageMsg, msg); console.log('gif'); return; }
        else
        console.log(url);
        download(url, {directory: "./png/", filename: filename}, function (err) {
          if (err) setTimeout(function() {search(q, imageMsg, msg); console.log('Retrying');}, 1000)
          else {
            var image = sharp('./png/' + filename)
            image
              .metadata()
              .then(function(metadata, err) {
                if (metadata.width >= '1999' || metadata.height >= '1999'){
                  if (metadata.width >= '7999' || metadata.height >= '7999') { reduce(0.7, metadata, image); console.log('kkk(8k)'); }
                  else if (metadata.width >= '4999' || metadata.height >= '4999') { reduce(0.6, metadata, image); console.log('kkk(5k)'); }
                  else if (metadata.width >= '3999' || metadata.height >= '3999') { reduce(0.5, metadata, image); console.log('kkk(4k)'); }
                  else if (metadata.width >= '2999' || metadata.height >= '2999') { reduce(0.4, metadata, image); console.log('kkk(3k)'); }
                  else { reduce(0.3, metadata, image); console.log('kkk(2k)'); }
                }
                if (err) console.log(err)
                image
                  .toFile('./jpg/' + jpgFilename, function(err){
                    if (err) { console.log(err) }
                    else {
                      channel.uploadFile('./jpg/' + filename, filename, imageMsg)
                      .then(() => {
                        msg.delete().catch(e => console.log(e))
                        del(['!./jpg/' + filename ,'./jpg/*', '!./png/' + filename, './png/*']);
                      });
                    }
                  });
              });
            }
          })
      }).catch(e => console.log(e));
    }
    if (content.startsWith(p + 'pic ') && e.message.guild != '292791323474264064'){
      if (args.length >= 2){
        args.shift();
        var arg = args.join('')
        var q = arg.replace('r/', '').replace('/r/', '')
        channel.sendMessage("Searching for **" + arg + "**...").then(msg => {
          search(q, "<:image:340725852612460544> Image results for **" + arg + "**:", msg)
      });
    }
}

//puppy
  if (content == p + 'cute') search('aww', '')

//die
   if (content.startsWith(p + 'kill') && author.id == '325827542164439040'){
     var count = 5
     channel.sendMessage('Shutting down in **'+count+'** seconds...').then(m => {
     function shutdown(){
       setTimeout(function(){
         if (count != 0) {
           count--
           m.edit('Shutting down in **'+count+'** seconds...')
           shutdown();
         }
         else {
           m.edit('💀');
           setTimeout(function(){process.exit()}, 3000)
         }
       }, 1000)
     }
     shutdown();
   });
}
//usage
if (content.startsWith(p + 'stats')){
  usage.lookup(process.pid, function(err, result) {

  var startTime = Math.floor(process.uptime());

  var days = Math.floor(convertTime(startTime).hours/24);
  var hrs = Math.floor(convertTime(startTime).hours - days*24);
  var mins = convertTime(startTime).minutes;
  var secs = convertTime(startTime).seconds;

  if (days == 0) {
    if (hrs == 0) {
      var timemsg = mins+' minutes and '+secs+' seconds'
    }
    else {
    var timemsg = hrs+' hrs, '+mins+' mins '+secs+' secs'
    }
  }
  else {
    var timemsg = days+' days, '+hrs+' hours '+mins+' mins'
  }
    if (err) console.log(err);
    channel.sendMessage('',false, {
       color: 0xD00000,
       author: {
        name: 'Bot Stats',
        icon_url: 'http://i.imgur.com/2x6vqOb.png'
      },
       fields: [{name: "**CPU Usage:**", value: '**' + Math.round(result.cpu*10)/10 + '**%'},
               {name: "**Memory Usage:**", value: '**' + Math.round(result.memory/100000)/10 + '**MB'},
               {name: "**Uptime:**", value: timemsg}],
       footer: {
         text: "Bot Owner: "+mainacc.username+'#'+mainacc.discriminator
       }
     });
  });
}


 //restart
   if (content.startsWith(p + 'restart') && author.id == '325827542164439040'){
   channel.sendMessage('<:raygun:335653827267264514>  |  i have raygun pls revive - `Restarting Bot...`').then(client.disconnect());
   console.log("Restarting");
   setTimeout(start, 5000);
 }

//kick
    if (content.startsWith(p +'gas') && trustedIDs.includes(author.id)){
    if (args.length == 2){
      let user = getUser(args[1]);
      if (user === undefined) return;
      else {
        user.kick();
        channel.sendMessage("<:check:335544753443831810>** " + user.username + " **has been gassed!");
      }
    }
    else if (args.length == 1){ channel.sendMessage('**Hans, get the gas!**'); return; }
    else return;
}

//ban
if (content.startsWith(p +'zyklon') && trustedIDs.includes(author.id)){
   if (args.length == 2){
     let user = getUser(args[1]);
     if (!user) return;
     else {
      user.ban(0);
      channel.sendMessage("<:check:335544753443831810>** " + user.username + " **has been treated with a lethal dose of Zyklon-B");
    }
  }
  else if (args.length == 1) {
    channel.sendMessage('**Revving up the Gas Chambers...**').then(msg => {
      setTimeout(function(){msg.edit('**Gas chambers spinning at full RPM, ready for gassing!**')}, 4000);
    });
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
  if (content == p + 'help'){
  var bot = client.User;
  var pfp = mainacc.avatarURL.replace('.jpg', '.png');
//embed
   channel.sendMessage('',false, {
      color: 0xD00000,
      author: {
       name: 'ϟϟ Bot Help',
       icon_url: bot.avatarURL
      },
      description: "Type **..invite** to invite me!",
      fields: [{name: "**Commands**", value: everyone},
              {name: "**Private Commands**", value: mods}],
      footer: {
        icon_url: pfp,
        text: "Made by Void, for the honor of Mein Führer"
      }
    });
}

//heil
 if (content.startsWith(p + 'heil')){
   var len = args.length
   if (len > 1) {
     args.shift()
     var arg = args.join(' ')
     var imageMsg = '**HEIL ' + arg + '!**'
   }
   else {
     var imageMsg = '<:swastika:325668829759930368> **14 | 88** <:swastika:325668829759930368>'
   }
   channel.uploadFile('./files/heil.jpg', 'heil.jpg', imageMsg);
 }

//custom
  if (e.message.member) {
    if (e.message.member.roles.map(r => r.id).indexOf('343963373748355075') !== -1 && e.message.guild.id == '292791323474264064'){
      e.message.addReaction('♿');
    }
  }
//basic commands
  on_message('swastika', swastika);
  globaldel_message('salute', '<:TopKek:338007448860229633><:pepeSalute:338007522050965506> <:swastika:325668829759930368>');
  globaldel_message('jihad', '<:jihad:322904816441491456>');
  globaldel_message('911', '<:plane:334937403217281024><:towers:334934504647032832>');
  globaldel_message('morticia', 'http://www.voidpls.tk/files/morticia.jpg');
  globaldel_message('hitler', '<:a1:338564354955804672><:a2:338564371435487234><:a3:338564382789468162> \n<:a4:338564396404047873><:a5:338564407850434560><:a6:338564418902425616> \n<:a7:338564428318507011><:a8:338564438330441729><:a9:338564448916602880>');
  globalon_message('bob', '`bob`? I think you mean `gay faggot`');
  globalon_message('gay faggot', '`gay faggot`? I think you mean `bob`');
  globaldel_message('gas', ':star_of_david: **Gas the Kikes** :star_of_david:');
  globalon_message('truth', 'Girls are the best but like Effy is better');
  globalon_message('remind', '**--------------------------------\n<:swastika:325668829759930368>   Daily Reminder:   <:swastika:325668829759930368>\nHitler Did Nothing Wrong!\n--------------------------------**');
  random_on_message('diversity', links);
  random_on_message('nigger', niggers);
  random_on_message('redpill', redpill);
//islam
  let islamI = Math.floor(islam.length * Math.random());
  if (content == p + 'islam')
  channel.sendMessage('"Religion of Peace" \n' + islam[islamI]);
}
});
