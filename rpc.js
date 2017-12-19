
const { Client } = require('discord-rpc');

const clientID = '390744285017800704';

const client = new Client({ transport: 'ipc' });

client.on('ready', () => {

  client.setActivity({
    state: 'Gassin\' Kikes',
    details: '14 | 88',
    startTimestamp: new Date(),
    largeImageKey: 'sexysun',
    smallImageKey: 'odal',
    instance: true,
  }).then(console.log);

});
client.login(clientID).catch(console.error);
