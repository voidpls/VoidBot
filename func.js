var StringMap = require('string-map');

module.exports = {

//mock
  mock: function (e, args) {

    var content = e.message.content
    var author = e.message.content
    var member = e.message.member
    var guild = e.message.guild

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

      while (substrNum < content.length){

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
    },

//vapor
    vapor: function (e, args) {

      var content = e.message.content
      var author = e.message.content
      var member = e.message.member
      var guild = e.message.guild

      var substrNum = 0
      var vaportxt = ''
      var sub = args.join(' ');

      var map = new StringMap();
      map.set({
          A : 'Ａ',
          B : 'Ｂ',
          C : 'Ｃ',
          D : 'Ｄ',
          E : 'Ｅ',
          F : 'Ｆ',
          G : 'Ｇ',
          H : 'Ｈ',
          I : 'Ｉ',
          J : 'Ｊ',
          K : 'Ｋ',
          L : 'Ｌ',
          M : 'Ｍ',
          N : 'Ｎ',
          O : 'Ｏ',
          P : 'Ｐ',
          Q : 'Ｑ',
          R : 'Ｒ',
          S : 'Ｓ',
          T : 'Ｔ',
          U : 'Ｕ',
          V : 'Ｖ',
          W : 'Ｗ',
          X : 'Ｘ',
          Y : 'Ｙ',
          Z : 'Ｚ',

          a : 'ａ',
          b : 'ｂ',
          c : 'ｃ',
          d : 'ｄ',
          e : 'ｅ',
          f : 'ｆ',
          g : 'ｇ',
          h : 'ｈ',
          i : 'ｉ',
          j : 'ｊ',
          k : 'ｋ',
          l : 'ｌ',
          m : 'ｍ',
          n : 'ｎ',
          o : 'ｏ',
          p : 'ｐ',
          q : 'ｑ',
          r : 'ｒ',
          s : 'ｓ',
          t : 'ｔ',
          u : 'ｕ',
          v : 'ｖ',
          w : 'ｗ',
          x : 'ｘ',
          y : 'ｙ',
          z : 'ｚ',

          0 : '０',
          1 : '１',
          2 : '２',
          3 : '３',
          4 : '４',
          5 : '５',
          6 : '６',
          7 : '７',
          8 : '８',
          9 : '９',

          ' ' : '　'
        });
      while (substrNum < sub.length){
        if (map.get(sub.charAt(substrNum))){
          vaportxt = vaportxt + map.get(sub.charAt(substrNum))
        }

        else {
          vaportxt = vaportxt + sub.charAt(substrNum)
        }
        substrNum++
      }
      return vaportxt;
    },


  clr: function (e, content, args) {
      e.message.channel.fetchMessages();

      if (isNaN(args[0])) return;
      else if (!isNaN(args[0])){

        var msgs = e.message.channel.messages;
        var msgArray = msgs.filter(m => m.deleted == false && m.author.id == '359542365926457359')
        msgArray = msgArray.reverse();
        msgArray.length = parseInt(args[0], 10) + 1
        msgArray.map(m => m.delete());
      }
    },


    log: function(e, webhookChannel, client){

      var moment = require('moment');
      var content = e.message.content
      var channel = e.message.channel

      var author = e.message.content
      var member = e.message.member
      var guild = e.message.guild
      var resolvedContent = e.message.resolveContent();

      var now = moment()
      var formatted = now.format('ddd, MMM Do, YYYY hh:mma')
      client.Webhooks.fetchForChannel(webhookChannel).then(webhook => {

        client.Webhooks.execute(webhook[0], null, {
          username: member.username,
          avatar_url: member.avatarURL,
          embeds: [{
            color: 0xffffff,
            author: {name: guild.name, icon_url: guild.iconURL},
            description: "I mentioned you in **#" + channel.name + "**",
            fields: [{name: "Message:", value: content},
                     {name: "Author:", value: '**'+member.mention+'** (ID: '+member.id+')'}],
            footer: {text: "Sent: "+ formatted}
          }]
        });

      });
    }


  }
