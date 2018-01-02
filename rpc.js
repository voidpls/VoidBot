
const { Client } = require('discord-rpc');

const clientID = '390744285017800704';

const client = new Client({ transport: 'ipc' });

client.on('ready', () => {

  client.setActivity({
    state: 'files/oldmenporn.mp4',
    details: 'voidpls.tk/',
    startTimestamp: new Date(),
    largeImageKey: 'sexysun',
    smallImageKey: 'odal',
    instance: true,
  }).then(console.log);

});
client.login(clientID).catch(console.error);
