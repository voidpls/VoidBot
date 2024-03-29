const Discordie = require("discordie");
const fs = require("fs");
const mp3 = require('mp3-duration');

const client = new Discordie({
  messageCacheLimit: 200,
  autoReconnect: true
});

client.connect({token: "Mzg4MTcxODYzNzEwMjM2Njcy.DQpIyQ.FFKjl0z6M22aL06GEQOtczr0d8U"});
const p = '..'
var start = null



client.Dispatcher.on("GATEWAY_READY", e => {

  client.User.setStatus('online', {name: "with code 24/7 Christmas Music | "+p+"help"});

  console.log("Connected as: " + client.User.username);
});

var list = shuffle(fs.readdirSync('./songs'));

function shuffle (arr) {
  return arr.sort(() => Math.random() - 0.5);
}

client.Dispatcher.on("MESSAGE_CREATE", e => {

  var message = e.message
  var channel = message.channel
  var author = message.member
  var guild = message.guild
  var content = message.content
  var args = content.split(/[ ]+/).slice(1)

  if (message.author.bot || message.author.id == client.User.id) return;
  if (!content.startsWith(p)) return;

//summon function
  function summon() {

  }

  if (content == p+"summon") {
    if (author.getVoiceChannel()) {
      author.getVoiceChannel().join(false, true).then(
        channel.sendMessage("<:check:335544753443831810> **Joined VC**")
      )
    }
    else channel.sendMessage('<:error:335660275481051136> **You aren\'t in a voice channel!**');
  }

//play func

  function play(list) {

    var encoder = info.voiceConnection.createExternalEncoder({
      type: "ffmpeg",
      source: "./songs/"+list[0],
      format: "opus",
      debug: false
    });
    var encoderStream = encoder.play();
    encoderStream;

    start = process.hrtime();

    encoder.once('end', () => {
      list.shift();
      encoderStream.unpipeAll();

      if (list.length == 0) {
        list = shuffle(fs.readdirSync('./songs'));
        play(list);
      }
      else {
        play(list);
      }
    });

  }


//start

  if (content == p+"start"){
    var info = client.VoiceConnections[0];
    if (!info) return channel.sendMessage('<:error:335660275481051136> Please type **'+p+'summon** first!');

    play(list);

    channel.sendMessage('<:check:335544753443831810> **Starting to play!**')
  }

//nowplaying

    function queue(){
      var displayLength = '[0:00/0:00]'
      var next = ''
      var nextLength = '0:00'
      var info = client.VoiceConnections[0];

      if (!list[0]) return;

      var ok = list[0].substring(0, list[0].indexOf('.'))

      if (!info) return;

      if (!list[1]) {
        next = 'None - Last song!';
        list[0] = '';
      }
      else next = list[1].substring(0, list[1].indexOf('.'));

      mp3("./songs/"+list[0], function (err, dur) {

        if (err) return console.log(err.message);
        let diff = process.hrtime(start);
        let time = Math.floor((diff[0] * 1000 + diff[1] / 1000000)/1000);

        var playedTime = Math.floor(time / 60) + ":" + ('00' + Math.floor(time % 60 ? time % 60 : '00')).slice(-2);
        var songLength = Math.floor(dur / 60) + ":" + ('00' + Math.floor(dur % 60 ? dur % 60 : '00')).slice(-2);

        displayLength = '['+playedTime+'/'+songLength+']';

        mp3("./songs/"+list[1], function (err, dur) {
          nextLength = Math.floor(dur / 60) + ":" + ('00' + Math.floor(dur % 60 ? dur % 60 : '00')).slice(-2);
          channel.sendMessage('', false, {
            color: 0x3C8D0D,
            author: {name: ok.replace('_', '/'),
                    icon_url: "http://pluspng.com/img-png/play-button-png-play-red-outline-button-1500.png"},
            title: displayLength,
            timestamp: new Date(Date.now()).toISOString(),
            fields: [{name: "Up Next:", value: next.replace('_', '/') +' **['+nextLength+']**'}]
          }).catch(e => console.log(e));
        }).catch(e => console.log(e));

      });
    }

  if (content == p+"np" || content == p+"queue" || content == p+"q") {
    queue();
  }

  //ping
  if (content == p+'ping'){
    channel.sendMessage("**🏓 | Pong!**")
  }

  //skip
  if (content == p+'skip' || content == p+'s') {

    var info = client.VoiceConnections[0];
    var encoder = info.voiceConnection.createExternalEncoder({
      type: "ffmpeg",
      source: "./songs/"+list[0],
      format: "opus",
      debug: false
    });

    var encoderStream = encoder.play();
    list.shift();
    encoderStream.unpipeAll();

    if (list.length == 0) {
      list = shuffle(fs.readdirSync('./songs'));
      play(list);
    }
    else {
      play(list);
    }
    queue();
  }

  //help

  if (content == p+'help'){
    var mainacc = client.Users.get('359542365926457359');
    channel.sendMessage('', false, {
      color: 0x3C8D0D,
      author: {name: client.User.username + " Help",
              icon_url: client.User.avatarURL},
      timestamp: new Date(Date.now()).toISOString(),
      fields: [{name: "Commands:", value:
        "**..queue | ..q | ..np** - Shows the current and following song\n"+
        "**..summon** - Makes the bot join your VC\n"+
        "**..start** - Restarts song queue\n"+
        "**..skip** - Skips current song\n"+
        "**..ping** - Pong!"
      }],
      footer: {text:"This Bot is Private", icon_url: mainacc.avatarURL.replace('.jpg', '.png')}
    });
  }


});
