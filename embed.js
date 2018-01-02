const Discord = require("discord.js");
const client = new Discord.Client();
const google = require('google');
const translate = require('google-translate-api')
var urban = require('urban');
var Vibrant = require('node-vibrant')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const hook = new Discord.WebhookClient('367123905187545099', 'XmKjCRcOu0uw7o7ragFptM3VMo-WZA181826F4o1RdqVvNBkd4VsZjOF546uVQWw0JAn');


var a = true

client.on('guildMemberRemove', member => {

  if (member.guild.id !== '325315599708454913') return;

  var moon = client.guilds.filter(g => g.id == '325315599708454913').first();
  var blmaUser = client.users.filter(u => u.id == '285256673742946304').first();
  var blmaMember = moon.fetchMember(blmaUser);

  member.guild.fetchAuditLogs({limit: 1}).then(msg => {

    if (msg.entries.first().action == 'MEMBER_KICK'){

      if (msg.entries.first().executor.id == blmaUser.id){

        if (a == false) {

          blmaMember.kick({reason: 'Precaution [Staff was kicking members too fast]'});
          return;
        }
        a = false

        setTimeout( function(){
          a = true
        }, 7500 );

      }
    }

  });
});


client.on('messageDelete', msg => {
  if (msg.guild)
  if (msg.guild.id == "235366697249275905" && !msg.author.bot){
    hook.sendSlackMessage({
      'username': msg.author.username,
      'icon_url': msg.author.avatarURL,
      "attachments": [{
            "color": "#ffffff",
            "author_name": msg.guild.name,
            "author_icon": msg.guild.iconURL,
            "text": "**Message deleted in <#"+msg.channel.id+">**",
            "fields": [
                {"title": "Message:", "value": msg.cleanContent}
            ],
            "footer": "ID ("+msg.author.id+")",
            "ts": Date.now()/1000
      }]
    });
  }
  else return;
});

client.on('messageUpdate', (oldMsg, newMsg) => {
  if (oldMsg.guild)
  if (oldMsg.guild.id == "235366697249275905" && !oldMsg.author.bot){
    if (oldMsg.cleanContent === newMsg.cleanContent) return;
    else {
      hook.sendSlackMessage({
        'username': oldMsg.author.username,
        'icon_url': oldMsg.author.avatarURL,
        "attachments": [{
            "color": "#ffffff",
            "author_name": oldMsg.guild.name,
            "author_icon": oldMsg.guild.iconURL,
            "text": "**Message edited in <#"+oldMsg.channel.id+">**",
            "fields": [
              {"title": "Before:", "value": oldMsg.cleanContent},
              {"title": "After:", "value": newMsg.cleanContent}
            ],
            "footer": "ID ("+oldMsg.author.id+")",
            "ts": Date.now()/1000
        }]
      });
    }
  }
  else return;
});

client.on('message', msg => {

  var p = 's.'

  if (!msg.content.startsWith(p)) return;

  if (msg.author.id !== '359542365926457359') return;

  var args = msg.content.split(/[ ]+/).slice(1)

  var color = 16777215
  if (msg.member){
    if (msg.member.colorRole) color = msg.member.colorRole.color;
  }


//embed
  if (msg.content.toLowerCase().startsWith(p+'e ')) {

    msg.delete();
    msg.channel.send({embed: {
      color: color,
      description: args.join(' ')
    }});
  }


//spam
  if (msg.content.startsWith(p+'s ')){
    var num = args.pop();
    msg.delete()
    for (i = num; i > 0; i--) {
      msg.channel.send(args.join(' '));
    }
  }

  if (msg.content.startsWith(p+'s2 ')){
    var num = args.pop();
    msg.delete()
    for (i = num; i > 0; i--) {
      msg.channel.send(args.join(' ')).then(m => m.delete());
    }
  }



//mock/clap
  if (msg.content.startsWith(p+'m ')){
    var mocktxt = mock();
    msg.edit(mocktxt);
  }
  if (msg.content.startsWith(p+'mc ')){
    var mocktxt = mock();
    var claptxt = mocktxt = mocktxt.split(' ');
    claptxt = '👏' + claptxt.join('👏') + '👏';
    msg.edit(claptxt);
  }
  if (msg.content.startsWith(p+'c ')){
    var clap = '👏'+args.join('👏')+'👏'
    msg.edit(clap);
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

//google
  if (msg.content.toLowerCase().startsWith(p+'g ')) {
    msg.delete()
    google.resultsPerPage = 8

    google(args.join(' '), function (err, res){
      if (err) console.error(err)
      else {
        var a = 0; var a2 = 0
        var linksArray = []; linksArray["titles"] = []; linksArray["links"] = []
        while (a >= 0){
          var link = res.links[a]
          if (link.link){
            linksArray["titles"][a2] = "**"+link.title+"**"; linksArray["links"][a2] = link.link;
            a2++;a++;
            if(a2 >= 3) {
              a = -1
              msg.channel.send({embed: {
                author: {
                  name: "Google Search",
                  icon_url: "https://i.imgur.com/RU7KojF.png"
                },
                description: "Results for: **"+args.join(' ')+"**",
                color: color,
                fields: [{name: linksArray["titles"][0], value: linksArray["links"][0]},
                  {name: linksArray["titles"][1], value: linksArray["links"][1]},
                  {name: linksArray["titles"][2], value: linksArray["links"][2]}],
                footer: {
                  icon_url: null,
                  text: "Selfbot made by "+msg.author.username+'#'+msg.author.discriminator
                }}
              });
            }
          }
          else a++;
        }
      }
    });
  }

//translate
  if (msg.content.toLowerCase().startsWith(p+'tr ')){

    if (!args.length >= 2) {
      msg.delete();
      return;
    }
    var lang = args.shift()

    translate(args.join(' '), {to: lang}).then(res => {
      msg.edit(res.text);
    }).catch(err => {
      console.error(err);
    });
  }

//pfp
  if (msg.content.toLowerCase().startsWith(p+'pfp')){

    if (args.length == 0) msg.edit(msg.author.avatarURL.replace('.jpg', '.png'));

    else if (args.length == 1){
      let user = getUser(args[0]);
      if (user === undefined) return;
      msg.edit(user.avatarURL.replace('.jpg', '.png'));
    }

  }

//urban
  if (msg.content.toLowerCase().startsWith(p+'ud')){
    if (args.length == 0){
      var udRand = urban.random().first(function(json) {
        msg.delete();
        urbanMsg(msg, json);
      });
    }
    else if (args.length >= 1) {
      urban(args.join(' ')).first(function(json) {
        msg.delete();
        if (json === undefined) return;
        urbanMsg(msg, json);
      });
    }
  }

  function getUser(arg) {
    user = client.users.get(arg.replace(/\D/g,''));
    if (user === undefined) return;
    return user;
  }


  function mock(){

      function getNums(x, y) {
        var numbers = [];
        for (var i = x; i < y; i++) {
          numbers.push(i);
        }
        numbers.shift();
        return numbers;
      }

      var substrNum = 0
      var mocktxt = ''
      var sub = args.join(' ').toLowerCase();

      while (substrNum < msg.content.length){

        mocktxt = mocktxt + sub.charAt(substrNum).toUpperCase();

        var randNum = Math.floor(Math.random() * 3) + 1
        var tempNum = substrNum
        substrNum = substrNum + randNum
        var betweenChar = getNums(tempNum, substrNum);

        betweenChar.map(c => {
          if (sub.charAt(c)) mocktxt = mocktxt + sub.charAt(c).toLowerCase()
        });
      }
      return mocktxt;
    }


  function urbanMsg(msg, json){
    msg.channel.send({embed: {
      author: {
        name: json.word,
        icon_url: "http://www.voidpls.tk/files/urban.jpg"
      },
      color: color,
      fields: [
        {name: "**Definition:**", value: json.definition},
        {name: "**Example:**", value: json.example},
        {name: "**Rating:**", value: "**👍 " + json.thumbs_up + " 👎 " + json.thumbs_down + "**"}
      ],
      footer: {
        icon_url: null,
        text: "Author: " + json.author
      }}
    });
  }
});

client.login('MzU5NTQyMzY1OTI2NDU3MzU5.DKIiaQ.3VEdAuSlxJ5o9wKeyfhgM6TaP7U');
