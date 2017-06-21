//https://github.com/voidpls/selfbot.git
//ssh -i "bot.pem" ec2-user@ec2-54-91-219-104.compute-1.amazonaws.com


var Discordie = require("discordie");
var client = new Discordie({
  messageCacheLimit: 1000,
  autoReconnect: true
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
  'http://www.voidpls.tk/niggers/5.jpg'
]

var redpill = [
  'An interactive map of white genocide in the world. \nhttp://whitegenocideproject.com/map-of-white-genocide/',
  'What we could do about white genocide. \nhttp://thisiseuropa.net/howtoreversewhitegenocide/',
  '“Nonwhite daters gain status by dating any White. Whites, on the other hand, have little to gain by dating minorities.” \nSource: http://sf.oxfordjournals.org/content/89/3/807.abstract',
  'White/Black babies are less healthy than White babies. \nSource: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2867623/',
  'Mixed race couples are more likely to have stillborn babies than same-race couples. \nSource: https://www.ncbi.nlm.nih.gov/pubmed/15994621',
  'Black-White children are more likely than both Black and Whites to make poor decisions. \nSource: http://www.nber.org/papers/w14192',
  '90% of women who have a child with a Black man never marry the father. \nSource: http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2625893',
  '98% of White women who have children with Black men are not financially supported by the father. \nSource: http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2625893',
  'The average White woman who has kids with a Black man earns $7250 a year, excluding welfare. \nSource: http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2625893',
  '97% of White women who have children with Black men have used welfare. \nSource: http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2625893',
  '97% of Black fathers who have children with White women are not active in their children’s lives. \nSource: http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2625893',
  'Race-mixers may give less parental support to their children because of greater genetic distance. \nSource: http://onlinelibrary.wiley.com/doi/10.1111/j.1095-8312.2008.01110.x/abstract',
  '97% of interracial (Black man, White women) children are born out of wedlock. Source: http://papers.ssrn.com/ White-Black couples have more partner violence than White couples and as much violence as Black couples. \nSource: http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3611980/',
  'White women who marry minorities tend to be poor and to “marry up” in socioeconomic status. \nSource: http://paa2008.princeton.edu/papers/80046#page=7',
  'Better educated men and women are more likely to exclude blacks as romantic partners. \nSource: http://paa2008.princeton.edu/papers/80046#page=23',
  '90% of White women who have kids with black men are unemployed or earn less than 10K a year. \nSource: http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2625893',
  'It can be proven that whites are genetically superior in intelligence compared to their African counterparts. Whites have created vast empires from Rome to Britain and have lead the charge for scientific advancement for hundreds of years. ',
  'Proof that the IQ gap is in fact racial\nhttp://nationalvanguard.org/2016/07/14-reasons-iq-race-gap-is-genetic/',
  'Blacks preforming poorer in schools due to their lower IQ \nhttp://gulfcoastcommentary.blogspot.com/2013/03/blacks-score-much-lower-on-all-academic.html?m=1',
  'IQ once again showing that blacks are intellectually inferior with whites and Asians leading the group. \nhttps://www.iq-tests.eu/iq-test-IQ-correlations-700.html',
  'A thorough explanation of white genocide and its disastrous implications. \nhttp://ww.renegadetribune.com/white-genocide-racist-conspiracy-theory-or-inconvenient-truth/\nhttps://www.google.com/amp/s/m.mic.com/articles/amp/106252/the-year-white-people-will-become-a-minority-in-america-has-been-declared\nhttp://andrewcarringtonhitchcock.com/jewish-genocide-of-the-white-race-case-closed/\nhttps://www.darkmoon.me/2016/white-extinction/'
]

var holocaust = [
  '1. The Holocaust is the only claimed genocide which was written in history on the basis of military tribunals where the victors judged the vanquished and that accepted as evidence absurd allegations such as human skin lampshades, human soap, blowing an experimental village with 20,000 Jews... just to name a few.',
  '2. The Holocaust is the only claimed genocide in which it is claimed that the perpetrators somehow managed to commit a perfect murder x 6,000,000 by destroying all evidence and using an unknown code language to submit orders and plans.',
  '3. The Holocaust is the only claimed genocide which claims a systematic industrial extermination in novel extermination weapons such as gas vans, gas chambers, diesel chambers, steam chambers, incinerators, etc. yet none of those weapons are ever found nor do they leave pictures, blueprints or construction orders.',
  '4. The Holocaust is the only claimed genocide which is peddled by people who by their own accounts were treated in hospitals in so-called "extermination camps".',
  '5. The Holocaust is the only claimed genocide which is "trademarked" and which has become a multi-billion dollar industry.',
  '6. The Holocaust is the only claimed genocide which is still used today as one of the most powerful political weapons ever invented.',
  '7. The Holocaust is the only claimed genocide which has been elevated to a religion status, including a religious dogmatic number, shrines, pilgrimages, martyrs and saints.',
  '8. The Holocaust is the only claimed genocide that will get you excommunicated (best case) or jailed (worst case) if you doubt its veracity.',
  '9. The Holocaust is the only claimed genocide which has changed the official story radically over the years yet we are always told that this is the absolute truth etched in stone which nobody is supposed to question.',
  '10. The Holocaust is the only genocide which relies on Soviet sources (anybody who ever lived in the Soviet Union would tell you how the "truth" is determined over there).'
]

var swastika =
  ':red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::white_circle::black_circle::white_circle::black_circle::white_circle::black_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::black_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::black_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::black_circle::white_circle::black_circle::white_circle::black_circle::white_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::white_circle::white_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::white_circle::white_circle::white_circle::black_circle::white_circle::white_circle::white_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle:'

//descriptions:
var heilInfo = '**..heil** | Posts a picture of hitler \n'
var gasInfo = '**..gas** | Sends "Gas the Kikes" \n'
var pollInfo = '**..poll [question]** | Makes a poll \n'
var diversityInfo = '**..diversity** | Sends a random picture on diversity \n'
var niggerInfo = '**..nigger** | Sends a nigger \n'
var morticiaInfo = '**..morticia** | Darn Russian Spy \n'
var remindInfo = '**..remind** | Hitler did nothing wrong \n'
var pingInfo = '**..ping** | Pong \n'
var holocaustInfo = '**..holocaust [1-10]** | Sends a statement debunking the Holocaust \n'
var redpillInfo = '**..redpill** | Sends a random redpill (DM me to add your own) \n'
var swastikaInfo = '**..swastika** | Creates a bigass swastika \n'

var botid = ['323992245781135360']
var everyone = heilInfo + gasInfo + pollInfo + diversityInfo + niggerInfo + morticiaInfo + redpillInfo + holocaustInfo
var mods = remindInfo + swastikaInfo + pingInfo
var game = {name: "made by Void | ..help"};

client.User.setStatus(null, game);
client.connect({
  token: "MzIzOTkyMjQ1NzgxMTM1MzYw.DCLlRw.xs1GqfbDfpxjQ3RSGZR2FzSspCE"
});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("GUILD_MEMBER_ADD", e => {
  function send() {
    channel.sendMessage(`Welcome to Moon Central, ${e.member.mention}!`);
};
  var channel = client.Channels.get('325648252810690570');
	if (e.guild.id === "325315599708454913") {
    setTimeout(send, 5000);
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
  var content = e.message.content.toLowerCase()
  if (content.startsWith('ur mom') || content.startsWith('ur mum') || content.startsWith('your mom') || content.startsWith('your mum') || content.startsWith('your mother'))
  e.message.channel.sendMessage('no u');

//delete evidence xd
  if (e.message.content == '.on <@325827542164439040>')
  e.message.delete();

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

};
//traps
  if (e.message.content.toLowerCase().startsWith('traps are gay'))
  e.message.reply('but they aren\'t');
//basic commands
  on_message('..ping', '**Pong!** :ping_pong:');
  on_message('..rep', 't!rep <@299052998355714049>');
  on_message('..daily', 't!daily <@255549538167685120>');
  on_message('..on', '.on <@325827542164439040>');
  on_message('..swastika', swastika)
  globalon_message('..morticia', 'http://www.voidpls.tk/files/morticia.jpg');
  globalon_message('..bob', '`..bob`? I think you mean `..gay faggot`');
  globalon_message('..gay faggot', '`..gay faggot`? I think you mean `..bob`');
  globalon_message('..gas', ':star_of_david: **Gas the Kikes** :star_of_david:');
  globalon_message('..heil', 'http://www.voidpls.tk/files/hitler.png');
  on_message('..remind', '**--------------------------------\n<:swastika:325668829759930368>   Daily Reminder:   <:swastika:325668829759930368>\nHitler Did Nothing Wrong!\n--------------------------------**');
  random_on_message('..diversity', links);
  random_on_message('..nigger', niggers);
  random_on_message('..redpill', redpill);

});
