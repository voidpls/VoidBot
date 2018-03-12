
const { Client } = require('discord-rpc');

const clientID = '390744285017800704';

const client = new Client({ transport: 'ipc' });

client.on('ready', () => {

  client.setActivity({
    state: '👌',
    details: 'gottem',
    startTimestamp: new Date(),
    largeImageKey: 'sexysun',
    smallImageKey: 'odal',
    instance: true,
  }).then(console.log);

});
client.login(clientID).catch(console.error);
