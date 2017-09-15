module.exports = {
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



  clr: function (e, content, args) {
      e.message.channel.fetchMessages();

      if (isNaN(args[0])) return;
      else if (!isNaN(args[0])){

        var msgs = e.message.channel.messages;
        var msgArray = msgs.filter(m => m.deleted == false && m.author.id == '325827542164439040')
        msgArray = msgArray.reverse();
        msgArray.length = parseInt(args[0], 10) + 1
        msgArray.map(m => m.delete());
      }
    }
  }
